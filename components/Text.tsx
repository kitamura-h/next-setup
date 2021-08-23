import React from 'react'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  label: string
}

export const Text: React.FC<TextProps> = ({ size = 'md', label, ...props }) => {
  const sizeMode =
    size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : size === 'lg' ? 'text-lg' : ''
  return (
    <p className={`text-gray-600 ${sizeMode}`} {...props}>
      {label}
    </p>
  )
}
