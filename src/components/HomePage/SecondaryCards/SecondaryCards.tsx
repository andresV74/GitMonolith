import { HistoryLink } from '../HistoryLink/HistoryLink.tsx'
import type { RepositoryItem } from '../../../types/repoInfo.ts';
import styles from './SecondaryCards.module.scss';

export function SecondaryCards({ counter, reposList }: { counter: number, reposList: RepositoryItem[] }) {
	return (
		<div className={styles['secondary-cards']}>
			<div className={styles.card}>
				<h4>
					<span className="material-symbols-outlined">history</span>
					<span>Search History</span>
				</h4>
				<ul>
					{
						reposList.length === 0
							? <h5>No history records</h5>
							: reposList.map(({ full_name, html_url, id }: RepositoryItem & { id: number}) => (
								<HistoryLink key={id} full_name={full_name} html_url={html_url} />
							))
					}
				</ul>
			</div>
			<div className={`${styles['card']} ${styles['flex-card']}`}>
				<span>{counter}</span>
				<span>Repos Fetched Today</span>
			</div>
		</div>
	)
}