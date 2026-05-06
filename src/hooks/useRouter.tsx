import { useState, useEffect } from 'react'

export function useRouter() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

		useEffect(() => {
		const handleLocationChange = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener('popstate', handleLocationChange)

		return () => {
			window.removeEventListener('popstate', handleLocationChange)
		}
	}, [])

	function navigateTo(path: string) {
		window.history.pushState({}, '', path)
		const navEvent = new PopStateEvent('popstate')
		window.dispatchEvent(navEvent)
	}

	return { currentPath, navigateTo }
}
