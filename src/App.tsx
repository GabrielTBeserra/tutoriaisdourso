import { Box } from '@radix-ui/themes'
import Header from './components/Header'
import Home from './pages/Home'
import TutorialPage from './pages/Tutorial'
import { useHashRoute } from './router'

function App() {
  const route = useHashRoute()

  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      {route.name === 'home' && <Home />}
      {route.name === 'tutorial' && <TutorialPage slug={route.slug} />}
    </Box>
  )
}

export default App
