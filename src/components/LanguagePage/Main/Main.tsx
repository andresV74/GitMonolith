import { Card } from '../LanguageCard/LanguageCard.tsx'
import { Pagination } from '../../Pagination/Pagination.tsx'
import { useLanguageList } from '../../../hooks/useLanguageList.tsx'
import type { LanguageListState } from '../../../types/languageListState.ts'
import styles from './Main.module.scss'

export function Main() {
	const { languageList } = useLanguageList()

	return (
		<main className={styles['main']}>
			<div className={styles['main-content']}>
				<h1>Languages</h1>
				<p>
					Chronological analysis of accessed monoliths
				</p>
				<ul>
					{
						languageList === null
							?<h2>No language list exists yet</h2>
							: languageList.map(({language, totalCount}: LanguageListState) => (
								<Card key={totalCount} language={language} totalCount={totalCount} />
						))
					}
				</ul>
			</div>
			<Pagination />
		</main>
	)
}