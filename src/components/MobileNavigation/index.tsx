import { Link } from '../Link/Link.tsx'
import styles from './index.module.scss';

export function MobileNavigation() {
	return (
		<nav className={styles['mobile-navigation']}>
      <Link href="/languages">
				<span className="material-symbols-outlined">code</span>
				<span>Language</span>
      </Link>
      <Link href="/favorites">
				<span className="material-symbols-outlined">star</span>
				<span>Favorites</span>
      </Link>
      <Link href="/history">
				<span className="material-symbols-outlined">history</span>
				<span>History</span>
      </Link>
		</nav>
	)
}