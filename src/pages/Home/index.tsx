import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'

import { HomeContainer, HomeMain } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeMain>
        <Profile />
        <SearchBar />
      </HomeMain>
    </HomeContainer>
  )
}
