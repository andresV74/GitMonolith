import React from 'react'
import { useRouter } from '../../hooks/useRouter.tsx'

export function Route({ path, component: Component }: { path: string, component: React.ComponentType }) {
	const { currentPath } = useRouter()

	if (currentPath !== path) return null

	return <Component />
}