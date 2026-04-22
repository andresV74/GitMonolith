export async function fetchResults<T>(url: string): Promise<T> {
	const response = await fetch(url)
	if (!response.ok) throw new Error('Error en la petición')

	return response.json()
}