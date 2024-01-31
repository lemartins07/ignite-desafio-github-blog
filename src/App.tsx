import { UserProvider } from './contexts/UserContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Home />
    </UserProvider>
  )
}

export default App
