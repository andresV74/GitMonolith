import { useRouter } from '../../hooks/useRouter.tsx'

export function Link({ href, children, ...restOfProps }: { href: string, children: React.ReactNode }) {
	const { navigateTo } = useRouter()
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		navigateTo(href)
	}

	return (
		<a href={href} {...restOfProps} onClick={handleClick}>
			{children}
		</a>
	)
}