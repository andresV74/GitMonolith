import { MainHeader } from '../MainHeader/index.tsx';
import { MainCard } from '../MainCard/index.tsx';
import { SecondaryCards } from '../SecondaryCards/index.tsx';

import styles from './index.module.scss';

type Language = {
  title: string
  value: string
}

interface MainProps {
  languages: Language[]
  loading: boolean
}

export function Main({ languages, loading }: MainProps) {
	return (
		<main className={styles.main}>
      <div className={styles['main-content']}>
				<MainHeader languages={languages} loading={loading} />
				<MainCard />
				<SecondaryCards />
      </div>
		</main>
	)
}
