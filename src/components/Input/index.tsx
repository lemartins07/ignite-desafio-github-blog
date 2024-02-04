import React, { InputHTMLAttributes } from 'react'
import { InputContent } from './styles'

// Defina os tipos de props para o componente de input
type InputProps = InputHTMLAttributes<HTMLInputElement>

// Defina o componente funcional de input
export const Input: React.FC<InputProps> = (props) => {
  return <InputContent {...props} />
}
