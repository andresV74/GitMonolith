export const handleChangeForm = (
	event: React.ChangeEvent<HTMLFormElement>,
	onChangeLanguage: (language: string) => void) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const selectedLanguage = formData.get('language')

		if (onChangeLanguage) {
			onChangeLanguage(selectedLanguage as string)
		}
	}
