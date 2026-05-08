import { useState, useEffect } from 'react'
import type { RepositoryItem } from '../types/repoInfo.ts'

const HISTORY_LIST = 'historyList'

function getInitialState() {
	const storedData = localStorage.getItem(HISTORY_LIST)

	if (!storedData) return []

	return JSON.parse(storedData)
}

export function usePopulateSearchList() {
	const [ reposList, setReposList] = useState(getInitialState)

	useEffect(() => {
		localStorage.setItem(HISTORY_LIST, JSON.stringify(reposList))
	}, [reposList])

	const addNewRepository = (newRepository: RepositoryItem) => {
		setReposList((prevState: RepositoryItem[]) => {
			return [newRepository, ...prevState]
		})
	}

	return { reposList, addNewRepository}
}
