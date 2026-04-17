import { MainHeader } from '../MainHeader/index.tsx';
import { MainCard } from '../MainCard/index.tsx';
import { SecondaryCards } from '../SecondaryCards/index.tsx';

import styles from './index.module.scss';

export function Main() {
	return (
		<main className={styles.main}>
      <div className={styles['main-content']}>
				<MainHeader />
				<MainCard />
				<SecondaryCards />
      </div>
		</main>
	)
}
