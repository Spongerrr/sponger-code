import { useVh } from '@/shared/hooks/useVh'
import { AppRouter } from './providers/AppRouter'
import { Header } from '@/widgets'

function App() {

  useVh()

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
