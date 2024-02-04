import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'

import { HomeContainer, HomeMain } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeMain>
        <Profile />
      </HomeMain>
    </HomeContainer>
  )
}
