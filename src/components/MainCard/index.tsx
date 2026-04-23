import type { LanguageProps } from '../../types/language';
import type { RepositoryItem } from '../../types/repoInfo';
import styles from './index.module.scss';
import type { PostMetaProps } from '../../types/postMetaProps'

export function MainCard(
	{
		cardState,
		selectedLanguage = '',
		selectedRepo,
		isSearching,
		publishedAt,
		error,
		onChangeLanguage,
	}: LanguageProps
		& PostMetaProps & {
			cardState: boolean;
			selectedLanguage: string;
			selectedRepo: RepositoryItem | null;
			isSearching: boolean
		}
	) {
	return ((cardState)
		? (
			<div className={isSearching ? `${styles['main-card']} ${styles['main-card--loading']}` : styles['main-card']}>
				<div className={styles['main-card-accent']}></div>
				<div className={styles['main-card-content']}>
					<div>
						<h3 className={isSearching ? styles.loading : ''}>
							{selectedRepo?.full_name.split('/')[0]}
						</h3>
						<h2>
							{isSearching ? 'Loading...' : selectedRepo?.full_name.split('/')[1]}
						</h2>
						<p className={isSearching ? styles.loading : ''}>
							{selectedRepo?.description}
						</p>
					</div>
					<div className={styles['main-card-stats-grid']}>
						<div className={styles['stat-item']}>
							<div className={styles['stat-value']}>
								<span className="material-symbols-outlined">star</span>
								<span>Stars</span>
							</div>
							<div className={isSearching ? `${styles['stat-label']} ${styles['loading']}` : styles['stat-label']}>
								{selectedRepo?.stargazers_count}
							</div>
						</div>
						<div className={styles['stat-item']}>
							<div className={styles['stat-value']}>
								<span className="material-symbols-outlined">account_tree</span>
								<span>Forks</span>
							</div>
							<div className={isSearching ? `${styles['stat-label']} ${styles['loading']}` : styles['stat-label']}>
								{selectedRepo?.forks_count}
							</div>
						</div>
						<div className={styles['stat-item']}>
							<div className={`${styles['stat-value']} ${styles['stat-error']}`}>
								<span className="material-symbols-outlined">error</span>
								<span>Issues</span>
							</div>
							<div className={isSearching ? `${styles['stat-label']} ${styles['loading']}` : styles['stat-label']}>
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
		: (
			<div className={styles['main-card']}>
				<div className={styles['main-card-accent']}></div>
				<div className={`${styles['main-card-content']} ${styles['empty']}`}>
					<h2>Please choose a language from the dropdown Language filter</h2>
				</div>
			</div>
		)
	)
}