import { Card } from '../LanguageCard/LanguageCard.tsx'
import { useLanguageList } from '../../../hooks/useLanguageList.tsx'
import styles from './Main.module.scss'

type LanguageListState = {
	language: string;
	totalCount: number;
};

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
							: languageList?.map(({language, totalCount, id}: LanguageListState & {id: number}) => (
							<Card key={id} language={language} totalCount={totalCount} />
						))
					}
				</ul>
			</div>
		</main>
	)
}