export async function apiCall<T>(url: string): Promise<T> {
	const controller = new AbortController()
	const response = await fetch(url, { signal: controller.signal })
	if (!response.ok) throw new Error('Error en la petición')

	return response.json()
}