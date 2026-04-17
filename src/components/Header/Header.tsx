import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<span className={styles['header-title']}>GitMonolith</span>
			<nav>
				<a href="#">
					<span className='material-symbols-outlined'>code</span>
					<span>Languages</span>
				</a>
				<a href="#">
					<span className='material-symbols-outlined'>star</span>
					<span>Favorites</span>
				</a>
				<a href="#">
					<span className='material-symbols-outlined'>History</span>
					<span>History</span>
				</a>
			</nav>
		</header>
	)
}