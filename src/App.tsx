import { ThemeProvider } from 'styled-components'
import { UserProvider } from './contexts/UserContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PostsProvider } from './contexts/PostsProvider'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <PostsProvider>
            <GlobalStyle />
            <Router />
          </PostsProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
