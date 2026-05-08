import style from './HistoryLink.module.scss'

type RepositoryProps = {
  full_name: string | undefined
  html_url: string | undefined
}

export function HistoryLink({ full_name, html_url }: RepositoryProps) {
	return (
		<li>
			<a href={html_url} className={style['history-item']} target='_blank' >
				<span>{full_name}</span>
			</a>
		</li>
	)
}