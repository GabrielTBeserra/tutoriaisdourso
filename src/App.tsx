import Header from './components/Header'
import Home from './pages/Home'
import TutorialPage from './pages/Tutorial'
import { useHashRoute } from './router'

function App() {
  const route = useHashRoute()

  return (
    <div className="app">
      <Header />
      {route.name === 'home' && <Home />}
      {route.name === 'tutorial' && <TutorialPage slug={route.slug} />}
    </div>
  )
}

export default App
