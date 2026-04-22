import styles from './index.module.scss';
import type { LanguageProps } from '../../types/language'

export function MainHeader({ languages, loading, onChangeLanguage }: LanguageProps) {
	const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const selectedLanguage = formData.get('language')

		onChangeLanguage(selectedLanguage as string)
	}

	return (
		<header className={styles['main-header']}>
			<div>
				<h1>Repository Finder</h1>
				<p>Discover your next open-source project.</p>
			</div>
			<div>
				<label htmlFor="language">Language Filter</label>
				<form onChange={handleChange} id='language-choose-form' role='search'>
					<span className="material-symbols-outlined text-primary text-lg">code</span>
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
				</form>
			</div>
		</header>
	)
}