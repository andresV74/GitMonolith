import { useState } from 'react'

import { Header } from './components/Header/Header.tsx'
import { Main } from './components/Main/index.tsx'
import { MobileNavigation } from './components/MobileNavigation/index.tsx'
import { useFetchResults } from './hooks/useFetchResults.tsx'
import { fetchResults } from './services/api.ts'
import type { Language } from './types/language.ts'
import type { Repository, RepositoryItem } from './types/repoInfo.ts'

const LANGUAGE_DATA_URL = 'https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json'
const REPO_DATA_URL = 'https://api.github.com/search/repositories?per_page=100&q=language:'

function App() {
  const { data: languages, loading, error: err } = useFetchResults<Language[]>(LANGUAGE_DATA_URL)
  const [ isCardEmpty, setIsCardEmpty ] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [selectedRepo, setSelectedRepo] = useState<RepositoryItem | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const chooseRepository = (totalCount: number, items: RepositoryItem[]) => {
    const limit = Math.min(totalCount, items.length)
    const randomIndex = Math.floor(Math.random() * limit)

    return items[randomIndex]
  }

  const handleChangeLanguage = async (selectedLanguage: string) => {
    try {
      setIsCardEmpty(true)
      setIsSearching(true)
      const data = await fetchResults<Repository>(`${REPO_DATA_URL}${selectedLanguage}`)
      const randomRepo = chooseRepository(data.total_count, data.items)

      setSelectedRepo(randomRepo)
      setSelectedLanguage(selectedLanguage)
    } catch (err) {
      console.error('Failed to fetch repository data:', err)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <>
      <Header />
      <Main
        languages={languages}
        loading={loading}
        error={err}
        onChangeLanguage={handleChangeLanguage}
        cardState={isCardEmpty}
        selectedLanguage={selectedLanguage}
        selectedRepo={selectedRepo}
        isSearching={isSearching}
      />
      <MobileNavigation />
    </>
  )
}

export default App
