import { handleChangeForm } from '../../services/handleChangeForm'

import styles from './MainHeader.module.scss';
import type { LanguageProps } from '../../types/language'

export function MainHeader({ languages, loading, error, onChangeLanguage }: LanguageProps) {
	return (
		<header className={styles['main-header']}>
			<div>
				<h1>Repository Finder</h1>
				<p>Discover your next open-source project.</p>
			</div>
			<div>
				<label htmlFor="language">Language Filter</label>
				<form onChange={(e) => handleChangeForm(e, onChangeLanguage)} id='language-choose-form' role='search'>
					<span className="material-symbols-outlined text-primary text-lg">code</span>
					{error
						? (<div className={styles['main-header__error-message']}>Error fetching data</div>)
						: (
							<select
								name="language"
								id="language"
								disabled={loading || languages?.length === 0}
							>
								{loading ? (
									<option value="">Loading languages...</option>
								) : (
									languages?.map((language, id) => (
										<option key={id} value={language.value}>
											{language.title}
										</option>
									))
								)}
							</select>
						)
					}
				</form>
			</div>
		</header>
	)
}