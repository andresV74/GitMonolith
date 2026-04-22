export type Language = {
	title: string
	value: string
}

export interface LanguageProps {
  languages?: Language[] | null
  loading?: boolean
	error?: Error | null
	selectedLanguage?: string
	onChangeLanguage?: (selectedLanguage: string) => void
}