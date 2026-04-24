import { useState, useEffect } from 'react'
import { fetchResults } from '../services/api'

export function useFetchResults<T>(url: string) {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true)
				const result = await fetchResults<T>(url)
				setData(result)
			} catch (err) {
				if (err instanceof Error && err.name !== 'AbortError') {
					console.error('Fetching error:', err)
					setError(err)
				}
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [url])

	return {
		data,
		loading,
		error
	}
}
