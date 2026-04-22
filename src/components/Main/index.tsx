import { MainHeader } from '../MainHeader/index.tsx';
import { MainCard } from '../MainCard/index.tsx';
import { SecondaryCards } from '../SecondaryCards/index.tsx';

import styles from './index.module.scss';
import type { LanguageProps } from '../../types/language'
import type { RepositoryItem } from '../../types/repoInfo.ts';

interface PostMetaProps {
  publishedAt: string // ISO 8601 string, e.g. "2024-06-01T12:00:00Z"
  updatedAt?: string
}

export function Main(
	{
		languages,
		loading,
		error,
		onChangeLanguage,
		cardState,
		selectedLanguage,
		selectedRepo,
		isSearching,
		publishedAt
	}: LanguageProps
		& PostMetaProps
		& {
			cardState: boolean;
			selectedRepo: RepositoryItem | null;
			isSearching: boolean
		}
	) {
	return (
		<main className={styles.main}>
      <div className={styles['main-content']}>
				<MainHeader languages={languages} loading={loading} error={error} onChangeLanguage={onChangeLanguage} />
				<MainCard cardState={cardState} selectedLanguage={selectedLanguage} selectedRepo={selectedRepo} isSearching={isSearching} publishedAt={publishedAt} />
				<SecondaryCards />
      </div>
		</main>
	)
}
