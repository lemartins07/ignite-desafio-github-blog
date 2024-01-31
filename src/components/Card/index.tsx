import { CardContainer } from './style'

interface CardProps {
  title: string
  content: string
}

export function Card({ title, content }: CardProps) {
  const limitedContent = content.substring(0, 190) + '...'

  return (
    <CardContainer>
      <div>
        <strong>{title}</strong>
        <span>Há 1 dia</span>
      </div>
      <p>{limitedContent}</p>
    </CardContainer>
  )
}
