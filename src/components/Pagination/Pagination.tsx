import style from './Pagination.module.scss'

export function Pagination() {
	return (
		<div className={style['pagination']}>
			<span>Showing 1-5 of 40 records</span>
			<nav>
				<a href="">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
						strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M15 6l-6 6l6 6" />
					</svg>
				</a>
				<a href="">
					1
				</a>
				<a href="">
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