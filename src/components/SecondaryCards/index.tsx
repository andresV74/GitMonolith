import styles from './index.module.scss';

export function SecondaryCards() {
	return (
		<div className={styles['secondary-cards']}>
			<div className={styles.card}>
				<h3>
					<span className="material-symbols-outlined">history</span>
					<span>Search History</span>
				</h3>
				<div>
					<a href='#' className={styles['history-item']}>
						<span>hyper-terminal/v4</span>
						<span>10m ago</span>
					</a>
					<a href='#' className={styles['history-item']}>
						<span>rust-lang/cargo</span>
						<span>1h ago</span>
					</a>
				</div>
			</div>
			<div className={`${styles['card']} ${styles['flex-card']}`}>
				<span>2,840+</span>
				<span>Repos Fetched Today</span>
			</div>
		</div>
	)
}