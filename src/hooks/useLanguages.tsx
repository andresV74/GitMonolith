import { useState, useEffect } from 'react'

type Language = {
	title: string
	value: string
}

export function useLanguages() {
	const LANGUAGE_DATA = 'https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json'
	const [languages, setLanguages] = useState<Language[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchLanguages() {
			try {
				setLoading(true)
				const response = await fetch(LANGUAGE_DATA)
				const data = (await response.json()) as Language[]

				setLanguages(data)
			} catch (error) {
				console.error('Error fetching languages:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchLanguages()
	}, [])

	return {
		languages,
		loading
	}
}
