import type { MouseEvent } from 'react'
import style from './Pagination.module.scss'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

export function Pagination({ currentPage = 1, totalPages = 5, onPageChange }: PaginationProps) {
	const pages = Array.from({ length: totalPages}, (_, index) => index + 1)

	const isFirstPage = currentPage === 1
	const isLastPage = currentPage === totalPages

	const stylePrevButton = isFirstPage ? style['disabled'] : ''
	const styleNextButton = isLastPage ? style['disabled'] : ''

	const handlePrevClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		if (isFirstPage) return
		onPageChange(currentPage - 1)
	}

	const handleNextClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		if (isLastPage) return
		onPageChange(currentPage + 1)
	}

	const handlePageChange = (event: MouseEvent<HTMLAnchorElement>, page: number) => {
		event.preventDefault()
		if (page === currentPage) return
		onPageChange(page)
	}

	return (
		<div className={style['pagination']}>
			<span>Showing 1-5 of 40 records</span>
			<nav>
				<a href="#" className={stylePrevButton} onClick={handlePrevClick}>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
						strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M15 6l-6 6l6 6" />
					</svg>
				</a>
				{
					pages.map(page => (
						<a href="#"
						key={page}
							className={currentPage === page ? style['is-active'] : ''}
							onClick={(event) => handlePageChange(event, page)}
						>
							{page}
						</a>
					))
				}
				<a href="#" className={styleNextButton} onClick={handleNextClick}>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
						strokeLinecap="round" strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M9 6l6 6l-6 6" />
					</svg>
				</a>
			</nav>
		</div>
	)
}