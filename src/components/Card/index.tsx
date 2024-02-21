import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CardContainer } from './style'
import { useMarkdownParser } from '../../hooks/useMarkdownParser'

interface CardProps {
  title: string
  content: string
  createdAt: string
}

export function Card({ title, content, createdAt }: CardProps) {
  const body =
    content.length > 185 ? `${content.substring(0, 185)}...` : content
  const parsedBody = useMarkdownParser(body)

  return (
    <CardContainer>
      <div>
        <strong>{title}</strong>
        <span>
          Há{' '}
          {formatDistance(new Date(), createdAt, {
            locale: ptBR,
          })}
        </span>
      </div>
      {parsedBody}
    </CardContainer>
  )
}
