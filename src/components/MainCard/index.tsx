import styles from './index.module.scss';

export function MainCard() {
	return (
		<div className={styles['main-card']}>
			<div className={styles['main-card-accent']}></div>
			<div className={styles['main-card-content']}>
				<div>
					<h2 className="text-4xl font-extrabold text-primary font-headline tracking-tighter hover:text-primary-fixed-dim transition-colors">
						monolith-engine/core-cli
					</h2>
					<p>
						A high-performance, asynchronous CLI toolkit designed for building complex architectural monoliths with seamless state management and real-time telemetry.
					</p>
				</div>
				<div className={styles['main-card-stats-grid']}>
					<div className={styles['stat-item']}>
						<div className={styles['stat-value']}>
							<span className="material-symbols-outlined">star</span>
							<span>Stars</span>
						</div>
						<span className={styles['stat-label']}>12.4k</span>
					</div>
					<div className={styles['stat-item']}>
						<div className={styles['stat-value']}>
							<span className="material-symbols-outlined">account_tree</span>
							<span>Forks</span>
						</div>
						<span className={styles['stat-label']}>842</span>
					</div>
					<div className={styles['stat-item']}>
						<div className={`${styles['stat-value']} ${styles['stat-error']}`}>
							<span className="material-symbols-outlined">error</span>
							<span>Issues</span>
						</div>
						<span className={styles['stat-label']}>14</span>
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
					<span>JavaScript</span>
				</div>
				<span>Updated 2h ago</span>
			</div>
		</div>
	)
}