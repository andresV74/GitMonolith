import { useState, useEffect } from 'react'

type DailyCounterState = {
	count: number;
	lastUpdated: string;
};

const STORAGE_KEY = 'dailyCounter'

function getToday() {
	return new Date().toISOString().split('T')[0]
}

function getInitialState() {
	const storedData = localStorage.getItem(STORAGE_KEY)

	if (!storedData) {
		return { count: 0, lastUpdated: getToday() }
	}

	const parsedData = JSON.parse(storedData)
	const today = getToday()

	if (parsedData.lastUpdated !== today) {
		return { count: 0, lastUpdated: today }
	}

	return parsedData
}

export function useDailyCounter() {
	const [state, setState] = useState(getInitialState)

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
	}, [state])

	const increment = () => {
		setState((prevState: DailyCounterState) => ({
			count: prevState.count + 1,
			lastUpdated: prevState.lastUpdated,
		}))
	}

	const reset = () => {
		setState({ count: 0, lastUpdated: getToday() })
	}

	return { count: state.count, increment, reset }
}

