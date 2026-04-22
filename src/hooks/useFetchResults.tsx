import { useState, useEffect } from 'react'

export function useFetchResults<T>(url: string) {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const controller = new AbortController()

		async function fetchData() {
			try {
				setLoading(true)
				const response = await fetch(url, { signal: controller.signal })

				if (!response.ok) throw new Error('Error en la petición')

				const result = (await response.json()) as T
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
