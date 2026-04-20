import { MainHeader } from '../MainHeader/index.tsx';
import { MainCard } from '../MainCard/index.tsx';
import { SecondaryCards } from '../SecondaryCards/index.tsx';

import styles from './index.module.scss';
import type { LanguageProps } from '../../types/language'

export function Main({ languages, loading, onChangeLanguage }: LanguageProps) {
	return (
		<main className={styles.main}>
      <div className={styles['main-content']}>
				<MainHeader languages={languages} loading={loading} onChangeLanguage={onChangeLanguage} />
				<MainCard />
				<SecondaryCards />
      </div>
		</main>
	)
}
