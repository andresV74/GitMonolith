import { Header } from './components/Header/Header.tsx'
import { Homepage } from './pages/Home.tsx'
import { LanguagesPage } from './pages/Languages.tsx'
import { HistoryPage } from './pages/History.tsx'
import { NotFoundPage } from './pages/404.tsx'
import { Route } from './components/Route/Route.tsx'

function App() {

  return (
    <>
      <Header />
      <Route path="/" component={Homepage} />
      <Route path="/languages" component={LanguagesPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="*" component={NotFoundPage} />
    </>
  )
}

export default App
