import { useState, useEffect } from 'react'
import type { LanguageListState } from '../types/languageListState.ts'

const LANGUAGE_LIST = 'languageList'

function getInitialState() {
	const storedData = localStorage.getItem(LANGUAGE_LIST)

	if (!storedData) {
		return null
	}

	const parsedData = JSON.parse(storedData)

	return parsedData
}

export function useLanguageList() {
	const [state, setState] = useState(getInitialState)

	useEffect(() => {
		localStorage.setItem(LANGUAGE_LIST, JSON.stringify(state))
	}, [state])

	const addNewLanguage = ({language, totalCount}: LanguageListState) => {
		if (state?.some((item: LanguageListState) => item.language === language)) return

		setState((prevState: LanguageListState[] | null) => {
			return !prevState ? [{ language, totalCount }] : [...prevState, { language, totalCount }]
		})
	}

	const reset = () => localStorage.removeItem(LANGUAGE_LIST)

	return { languageList: state, addNewLanguage, reset }
}
