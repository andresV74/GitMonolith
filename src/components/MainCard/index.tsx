import type { LanguageProps } from '../../types/language';
import type { RepositoryItem } from '../../types/repoInfo';
import styles from './index.module.scss';

export function MainCard(
	{
		cardState,
		selectedLanguage,
		selectedRepo,
		isSearching }: LanguageProps
		& {
			cardState: boolean;
			selectedRepo: RepositoryItem | null;
			isSearching: boolean }) {
	return ((cardState)
		? (
			<div className={styles['main-card']}>
				<div className={styles['main-card-accent']}></div>
				<div className={styles['main-card-content']}>
					<div>
						<h3>
							{isSearching ? 'Loading...' : selectedRepo?.name}
						</h3>
						<h2>
							{isSearching ? 'Loading...' : selectedRepo?.name}
						</h2>
						<p>
							{isSearching ? 'Loading...' : selectedRepo?.description}
						</p>
					</div>
					<div className={styles['main-card-stats-grid']}>
						<div className={styles['stat-item']}>
							<div className={styles['stat-value']}>
								<span className="material-symbols-outlined">star</span>
								<span>Stars</span>
							</div>
							<span className={styles['stat-label']}>
								{isSearching ? 'Loading...' : selectedRepo?.stargazers_count}
							</span>
						</div>
						<div className={styles['stat-item']}>
							<div className={styles['stat-value']}>
								<span className="material-symbols-outlined">account_tree</span>
								<span>Forks</span>
							</div>
							<span className={styles['stat-label']}>
								{isSearching ? 'Loading...' : selectedRepo?.forks_count}
							</span>
						</div>
						<div className={styles['stat-item']}>
							<div className={`${styles['stat-value']} ${styles['stat-error']}`}>
								<span className="material-symbols-outlined">error</span>
								<span>Issues</span>
							</div>
							<span className={styles['stat-label']}>
								{isSearching ? 'Loading...' : selectedRepo?.open_issues_count}
							</span>
						</div>
					</div>
					<button>
						<span className="material-symbols-outlined">casino</span>
							Fetch Random Repository
					</button>
				</div>
				<div className={styles['main-card-footer']}>
					<div className={styles['footer-item']}>
						<div></div>
						<span>
							{isSearching ? 'Loading...' : selectedLanguage}
						</span>
					</div>
					<span>Updated 2h ago</span>
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