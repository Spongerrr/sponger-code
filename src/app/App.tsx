import { useVh } from '@/shared/hooks/useVh'
import { AppRouter } from './providers/AppRouter'
import { Footer, Header } from '@/widgets'

function App() {

  useVh()

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <AppRouter />
      </div>
      <Footer />
    </div>
  )
}

export default App
