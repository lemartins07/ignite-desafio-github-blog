import { ReactNode } from 'react'
import { LinkAnchor, LinkContainer } from './styles'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { FaChevronLeft } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  children: ReactNode
  url: string
  blank?: boolean
  icon: 'back' | 'external'
  type: 'internal' | 'external'
}

export function Link({
  children,
  url,
  blank = true,
  icon = 'external',
  type,
}: LinkProps) {
  return (
    <LinkContainer>
      {type === 'external' ? (
        <LinkAnchor href={url} target={blank ? '_blank' : ''}>
          {icon === 'back' && <FaChevronLeft />}
          {children}
          {icon === 'external' && <FaArrowUpRightFromSquare />}
        </LinkAnchor>
      ) : (
        <RouterLink to={url}>
          {icon === 'back' && <FaChevronLeft />}
          {children}
          {icon === 'external' && <FaArrowUpRightFromSquare />}
        </RouterLink>
      )}
    </LinkContainer>
  )
}
