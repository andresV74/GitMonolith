import { useState } from 'react'
import { Card } from '../LanguageCard/LanguageCard.tsx'
import { Pagination } from '../../Pagination/Pagination.tsx'
import { useLanguageList } from '../../../hooks/useLanguageList.tsx'
import type { LanguageListState } from '../../../types/languageListState.ts'
import styles from './Main.module.scss'

const RESULTS_PER_PAGE = 7

export function Main() {
	const [currentPage, setCurrentPage] = useState(1)
	const { languageList } = useLanguageList()
	const totalPages = Math.ceil(languageList.length / RESULTS_PER_PAGE)

	const pageResults = languageList.slice(
		(currentPage - 1) * RESULTS_PER_PAGE,
		currentPage * RESULTS_PER_PAGE
	)

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

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
							: pageResults.map(({language, totalCount}: LanguageListState) => (
								<Card key={totalCount} language={language} totalCount={totalCount} />
						))
					}
				</ul>
			</div>
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
		</main>
	)
}