import { ChangeEvent, useContext, useState } from 'react'
import { Input } from '../Input'
import { SearchBarContainer } from './styles'
import { PostsContext } from '../../contexts/PostsProvider'

export function SearchBar() {
  const [search, setSearch] = useState<string>('')
  const { fetchPosts } = useContext(PostsContext)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(() => e.target.value)
    fetchPosts(e.target.value)
  }

  return (
    <SearchBarContainer>
      <div>
        <span>Publicações</span>
        <span>06 publicações</span>
      </div>
      <Input
        type="text"
        placeholder="Buscar conteúdo"
        name="search"
        autoComplete="off"
        onChange={handleChange}
        value={search}
      />
    </SearchBarContainer>
  )
}
