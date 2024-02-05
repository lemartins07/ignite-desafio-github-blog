import { Header } from '../../components/Header'
import { PostList } from '../../components/PostList'
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
        <PostList />
      </HomeMain>
    </HomeContainer>
  )
}
