import style from './LanguageCard.module.scss'

type LanguageCardProps = {
	language: string;
	totalCount: number;
}

export function Card({ language, totalCount }: LanguageCardProps) {
	return (
		<li className={style.card}>
			<h2>{language}</h2>
			<div className={style['card__count-info']}>
				<p className={style.card__count}>{totalCount.toLocaleString()}</p>
				<p className={style.card__countName}>Active Repositories</p>
			</div>
		</li>
	)
}