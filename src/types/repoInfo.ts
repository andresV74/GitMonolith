export type RepositoryItem = {
	id: number
	name: string
	full_name: string
	description: string
	stargazers_count: number
	forks_count: number
	open_issues_count: number
	html_url: string
}

export type Repository = {
	total_count: number
	items: RepositoryItem[]
}
