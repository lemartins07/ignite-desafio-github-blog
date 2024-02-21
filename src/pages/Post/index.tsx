/* eslint-disable react/no-children-prop */
import { useContext, useEffect } from 'react'
import { PostInfo } from '../../components/PostInfo'
import { PostsContext } from '../../contexts/PostsProvider'
import { useParams } from 'react-router-dom'
import { useMarkdownParser } from '../../hooks/useMarkdownParser'

import { PostContainer, PostContent } from './styles'

export function Post() {
  const { postId } = useParams()
  const { post, fetchPost } = useContext(PostsContext)

  useEffect(() => {
    fetchPost(postId || '')
  }, [postId, fetchPost])
  const parsedPost = useMarkdownParser(post.body)
  return (
    <PostContainer>
      <PostInfo data={post} />
      <PostContent>{parsedPost}</PostContent>
    </PostContainer>
  )
}
