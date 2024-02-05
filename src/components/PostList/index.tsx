import { Link } from 'react-router-dom'
import { Card } from '../Card'

import { PostListContainer } from './styles'

export function PostList() {
  const posts = [
    { id: 1, title: 'teste', content: 'teste' },
    { id: 2, title: 'teste', content: 'teste' },
    { id: 3, title: 'teste', content: 'teste' },
    { id: 4, title: 'teste', content: 'teste' },
    { id: 5, title: 'teste', content: 'teste' },
    { id: 6, title: 'teste', content: 'teste' },
  ]

  return (
    <PostListContainer>
      {posts &&
        posts.map((post) => (
          <Link key={post.id} to={`post/${post.id}`}>
            <Card title={post.title} content={post.content} />
          </Link>
        ))}
    </PostListContainer>
  )
}
