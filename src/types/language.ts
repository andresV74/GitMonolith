export type Language = {
	title: string
	value: string
}

export interface LanguageProps {
  languages: Language[]
  loading: boolean
}