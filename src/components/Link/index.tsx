import { ReactNode } from 'react'
import { LinkAnchor } from './styles'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

interface LinkProps {
  children: ReactNode
  url: string
  blank?: boolean
}

export function Link({ children, url, blank = true }: LinkProps) {
  const formattedUrl = `http://${url}`
  return (
    <LinkAnchor href={formattedUrl} target={blank ? '_blank' : ''}>
      {children} <FaArrowUpRightFromSquare />
    </LinkAnchor>
  )
}
