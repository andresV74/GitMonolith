import styles from './index.module.scss';

export function MobileNavigation() {
	return (
		<nav className={styles['mobile-navigation']}>
      <button>
				<span className="material-symbols-outlined">code</span>
				<span>Language</span>
      </button>
      <button>
				<span className="material-symbols-outlined">star</span>
				<span>Favorites</span>
      </button>
      <button>
				<span className="material-symbols-outlined">history</span>
				<span>History</span>
      </button>
      <button>
				<span className="material-symbols-outlined">person</span>
				<span>Profile</span>
      </button>
		</nav>
	)
}