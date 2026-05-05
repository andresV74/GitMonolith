import styles from './MainCard.module.scss';
import type { LanguageProps } from '../../types/language';
import type { RepositoryItem } from '../../types/repoInfo';
import type { PostMetaProps } from '../../types/postMetaProps'

export function MainCard(
	{
		cardState,
		languageError,
		selectedLanguage = '',
		selectedRepo,
		isSearching,
		publishedAt,
		onChangeLanguage,
	}: LanguageProps
		& PostMetaProps & {
			cardState: boolean
			selectedLanguage: string
			selectedRepo: RepositoryItem | null
			isSearching: boolean
			languageError: boolean
		}
	) {
	return (
		(cardState)
		? (
			<div className={isSearching ? `${styles['main-card']} ${styles['main-card--loading']}` : styles['main-card']}>
				<div className={styles['main-card-accent']}></div>
				<div className={`${styles['main-card-content']} ${styles['empty']}`}>
					<h2>
						{
							languageError
								? 'Error fetching repositories for the selected language. Please try again.'
								: isSearching ? 'Loading...'
								: 'Select a programming language from the dropdown Language filter to discover a random repository.'
						}
					</h2>
				</div>
			</div>
		)
		: (
			<div className={isSearching ? `${styles['main-card']} ${styles['main-card--loading']}` : styles['main-card']}>
				<div className={styles['main-card-accent']}></div>
				<div className={styles['main-card-content']}>
					<div>
						<h3 className={isSearching ? styles.loading : ''}>
							<a href={selectedRepo?.owner.html_url} target="_blank" rel="noopener noreferrer">
								{selectedRepo?.full_name.split('/')[0]}
							</a>
						</h3>
						<h2>
							<a href={selectedRepo?.html_url} target="_blank" rel="noopener noreferrer">
								{isSearching ? 'Loading...' : selectedRepo?.full_name.split('/')[1]}
							</a>
						</h2>
						<p className={isSearching ? styles.loading : ''}>
							{selectedRepo?.description}
						</p>
					</div>
					<div className={isSearching ? `${styles['main-card-stats-grid']} ${styles['loading']}` : styles['main-card-stats-grid']}>
						<div className={styles['stat-item']}>
							<div className={styles['stat-value']}>
								<span className="material-symbols-outlined">star</span>
								<span>Stars</span>
							</div>
							<div className={styles['stat-label']}>
								{selectedRepo?.stargazers_count}
							</div>
						</div>
						<div className={styles['stat-item']}>
							<div className={styles['stat-value']}>
								<span className="material-symbols-outlined">account_tree</span>
								<span>Forks</span>
							</div>
							<div className={styles['stat-label']}>
								{selectedRepo?.forks_count}
							</div>
						</div>
						<div className={styles['stat-item']}>
							<div className={`${styles['stat-value']} ${styles['stat-error']}`}>
								<span className="material-symbols-outlined">error</span>
								<span>Issues</span>
							</div>
							<div className={styles['stat-label']}>
								{selectedRepo?.open_issues_count}
							</div>
						</div>
					</div>
					<button
						onClick={() => onChangeLanguage(selectedLanguage)}
						disabled={isSearching}
					>
						<span className="material-symbols-outlined">casino</span>
						Fetch Random Repository
					</button>
				</div>
				<div className={styles['main-card-footer']}>
					<div className={styles['footer-item']}>
						<div></div>
						<span>
							{selectedLanguage}
						</span>
					</div>
					<span>
						<relative-time datetime={publishedAt} tense='past'>
							{new Date(publishedAt).toLocaleDateString()}
						</relative-time>
					</span>
				</div>
			</div>
		)
	)
}