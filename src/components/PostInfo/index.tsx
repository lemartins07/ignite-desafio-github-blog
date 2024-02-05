import { FaCalendarDay, FaComment, FaGithub } from 'react-icons/fa'
import { Link } from '../Link'
import { PostInfoContainer } from './styles'

export function PostInfo() {
  console.log(window)

  return (
    <PostInfoContainer>
      <div>
        <Link type="internal" icon="back" url={window.origin} blank={false}>
          Voltar
        </Link>
        <Link
          type="external"
          icon="external"
          url="http://github.com/lemartins07"
        >
          Ver no Github
        </Link>
      </div>
      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FaGithub /> cameronwll
        </li>
        <li>
          <FaCalendarDay />
          Há 1 dia
        </li>
        <li>
          <FaComment />5 comentários
        </li>
      </ul>
    </PostInfoContainer>
  )
}
