import { Header } from './components/Header/Header.tsx'
import { Main } from './components/Main/index.tsx'
import { MobileNavigation } from './components/MobileNavigation/index.tsx'
import { useLanguages } from './hooks/useLanguages.tsx'

function App() {
  const { languages, loading } = useLanguages()

  const handleChangeLanguage = (selectedLanguage: string) => {
    console.log('Selected language:', selectedLanguage)
  }

  return (
    <>
      <Header />
      <Main languages={languages} loading={loading} onChangeLanguage={handleChangeLanguage} />
      <MobileNavigation />
    </>
  )
}

export default App
