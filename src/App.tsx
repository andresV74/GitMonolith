import { useState } from 'react'

import { Header } from './components/Header/Header.tsx'
import { Main } from './components/Main/Main.tsx'
import { MobileNavigation } from './components/MobileNavigation/index.tsx'
import { useFetchResults } from './hooks/useFetchResults.tsx'
import { apiCall } from './services/api.ts'
import type { Language } from './types/language.ts'
import type { Repository, RepositoryItem } from './types/repoInfo.ts'

const LANGUAGE_DATA_URL = './src/data/languages.json'
const REPO_DATA_URL = 'https://api.github.com/search/repositories?per_page=100&q=language:'

function App() {
  const { data: languages, loading, error } = useFetchResults<Language[]>(LANGUAGE_DATA_URL)
  const [ isCardEmpty, setIsCardEmpty ] = useState(false)
  const [languageError, setLanguageError] = useState(false)
  const [ selectedLanguage, setSelectedLanguage ] = useState<string>('')
  const [ selectedRepo, setSelectedRepo ] = useState<RepositoryItem | null>(null)
  const [ isSearching, setIsSearching ] = useState(false)

  const chooseRepository = (totalCount: number, items: RepositoryItem[]) => {
    const limit = Math.min(totalCount, items.length)
    const randomIndex = Math.floor(Math.random() * limit)

    return items[randomIndex]
  }

  const handleChangeLanguage = async (selectedLanguage: string) => {
    try {
      setIsCardEmpty(true)
      setIsSearching(true)
      setLanguageError(false)
      const reposData = await apiCall<Repository>(`${REPO_DATA_URL}${selectedLanguage}`)
      const randomRepo = chooseRepository(reposData.total_count, reposData.items)

      setSelectedRepo(randomRepo)
      setSelectedLanguage(selectedLanguage)
    } catch (languageError) {
      console.error('Failed to fetch repository data:', languageError)
    } finally {
      setIsSearching(false)
      setLanguageError(true)
    }
  }

  return (
    <>
      <Header />
      <Main
        languages={languages}
        loading={loading}
        error={error}
        languageError={languageError}
        onChangeLanguage={handleChangeLanguage}
        cardState={isCardEmpty}
        selectedLanguage={selectedLanguage}
        selectedRepo={selectedRepo}
        isSearching={isSearching}
        publishedAt={new Date().toISOString()}
      />
      <MobileNavigation />
    </>
  )
}

export default App
