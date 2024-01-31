import { ThemeProvider } from 'styled-components'
import { UserProvider } from './contexts/UserContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <GlobalStyle />
        <Home />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
