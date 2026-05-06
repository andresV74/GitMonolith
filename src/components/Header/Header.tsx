import { Link } from '../Link/Link.tsx'
import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<span className={styles['header-title']}>GitMonolith</span>
			</Link>
			<nav>
				<Link href="/languages">
					<span className='material-symbols-outlined'>code</span>
					<span>Languages</span>
				</Link>
				<Link href="/favorites">
					<span className='material-symbols-outlined'>star</span>
					<span>Favorites</span>
				</Link>
				<Link href="/history">
					<span className='material-symbols-outlined'>History</span>
					<span>History</span>
				</Link>
			</nav>
		</header>
	)
}