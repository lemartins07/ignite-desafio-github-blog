import { Link } from 'react-router-dom'
import { Card } from '../Card'

import { PostListContainer } from './styles'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsProvider'

export function PostList() {
  const { posts } = useContext(PostsContext)
  console.log(posts)

  return (
    <PostListContainer>
      {posts &&
        posts.map((post) => (
          <Link key={post.number} to={`post/${post.number}`}>
            <Card
              title={post.title}
              content={post.body}
              createdAt={post.created_at}
            />
          </Link>
        ))}
    </PostListContainer>
  )
}
