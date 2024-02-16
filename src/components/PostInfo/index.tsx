import { FaCalendarDay, FaComment, FaGithub } from 'react-icons/fa'
import { Link } from '../Link'
import { PostInfoContainer } from './styles'

interface Post {
  number: string
  html_url: string
  comments: number
  created_at: string
  updated_at: string
  body: string
  title: string
  user: {
    login: string
  }
}
interface PostInfoProps {
  data: Post
}

export function PostInfo({ data }: PostInfoProps) {
  return (
    <>
      {data.user && (
        <PostInfoContainer>
          <div>
            <Link type="internal" icon="back" url={window.origin} blank={false}>
              Voltar
            </Link>
            <Link type="external" icon="external" url={data.html_url}>
              Ver no Github
            </Link>
          </div>
          <h1>{data.title}</h1>
          <ul>
            <li>
              <FaGithub /> {data.user.login}
            </li>
            <li>
              <FaCalendarDay />
              Há {data.created_at} dia
            </li>
            <li>
              <FaComment />
              {data.comments} comentários
            </li>
          </ul>
        </PostInfoContainer>
      )}
    </>
  )
}
