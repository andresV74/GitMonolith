import styles from './index.module.scss';
import type { LanguageProps } from '../../types/language'

export function MainHeader({ languages, loading }: LanguageProps) {
	return (
		<div className={styles['main-header']}>
			<div>
				<h1>Repository Finder</h1>
				<p>Discover your next open-source project.</p>
			</div>
			<div>
				<label htmlFor="language">Language Filter</label>
				<form action="" method="get">
					<span className="material-symbols-outlined text-primary text-lg">code</span>
					<select
						name="language"
						id="language"
						disabled={loading || languages.length === 0}
					>
						{loading ? (
							<option value="">Loading languages...</option>
						) : (
							languages.map((language, id) => (
								<option key={id} value={language.value}>
									{language.title}
								</option>
							))
						)}
					</select>
				</form>
			</div>
		</div>
	)
}