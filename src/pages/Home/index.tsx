import { PostList } from '../../components/PostList'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'

import { HomeContainer, HomeMain } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeMain>
        <Profile />
        <SearchBar />
        <PostList />
      </HomeMain>
    </HomeContainer>
  )
}
