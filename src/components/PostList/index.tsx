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
          <Link key={post.id} to={`post/${post.id}`}>
            <Card title={post.title} content={post.body} />
          </Link>
        ))}
    </PostListContainer>
  )
}
