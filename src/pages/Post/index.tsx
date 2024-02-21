import { useContext, useEffect } from 'react'
import { PostInfo } from '../../components/PostInfo'
import { PostsContext } from '../../contexts/PostsProvider'
import { PostContainer } from './styles'
import { useParams } from 'react-router-dom'

import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { useMarkdownParser } from '../../hooks/useMarkdownParser'

export function Post() {
  const { postId } = useParams()
  const { post, fetchPost } = useContext(PostsContext)

  useEffect(() => {
    fetchPost(postId || '')
  }, [postId, fetchPost])

  return (
    <PostContainer>
      <PostInfo data={post} />
      <Markdown
        children={post.body}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={dark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}
      />
    </PostContainer>
  )
}
