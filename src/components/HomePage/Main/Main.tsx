import { MainHeader } from '../MainHeader/MainHeader.tsx';
import { MainCard } from '../MainCard/MainCard.tsx';
import { SecondaryCards } from '../SecondaryCards/SecondaryCards.tsx';

import type { LanguageProps } from '../../../types/language.ts'
import type { RepositoryItem } from '../../../types/repoInfo.ts';
import type { PostMetaProps } from '../../../types/postMetaProps.ts'
import styles from './Main.module.scss';

export function Main(
	{
		languages,
		loading,
		error,
		languageError,
		onChangeLanguage,
		cardState,
		selectedLanguage,
		selectedRepo,
		isSearching,
		publishedAt,
		counter,
		reposList,
	}: LanguageProps
		& PostMetaProps
		& {
			cardState: boolean
			languageError: boolean
			selectedLanguage: string
			selectedRepo: RepositoryItem | null
			isSearching: boolean
			counter: number
			reposList: RepositoryItem[]
		}
	) {
	return (
		<main className={styles.main}>
      <div className={styles['main-content']}>
				<MainHeader languages={languages} loading={loading} error={error} onChangeLanguage={onChangeLanguage} />
				<MainCard cardState={cardState} languageError={languageError} selectedLanguage={selectedLanguage} selectedRepo={selectedRepo} isSearching={isSearching} publishedAt={publishedAt} onChangeLanguage={onChangeLanguage} />
				<SecondaryCards counter={counter} reposList={reposList} />
      </div>
		</main>
	)
}
