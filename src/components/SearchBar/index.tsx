import { Input } from '../Input'
import { SearchBarContainer } from './styles'

export function SearchBar() {
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
      />
    </SearchBarContainer>
  )
}
