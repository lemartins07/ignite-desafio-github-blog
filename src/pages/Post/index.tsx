import { useContext, useEffect } from 'react'
import { PostInfo } from '../../components/PostInfo'
import { PostsContext } from '../../contexts/PostsProvider'
import { PostContainer } from './styles'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'

export function Post() {
  const { postId } = useParams()
  const { post, fetchPost } = useContext(PostsContext)

  useEffect(() => {
    fetchPost(postId || '')
  }, [postId, fetchPost])

  return (
    <PostContainer>
      <PostInfo data={post} />
      <Markdown>{post.body}</Markdown>
    </PostContainer>
  )
}
