import React from 'react'

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'sm' | 'md' | 'lg'
  label: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'md',
  backgroundColor,
  label,
  ...props
}) => {
  const baseButton = 'font-bold'
  const sizeMode =
    size === 'sm'
      ? 'py-1.5 px-4 text-xs'
      : size === 'md'
      ? 'py-2 px-5 text-sm'
      : size === 'lg'
      ? 'py-3 px-6 text-base'
      : ''
  return primary ? (
    <>
      <button
        type="button"
        className={`text-white bg-primary-600 ${baseButton} ${sizeMode}`}
        {...props}
      >
        {label}
      </button>
    </>
  ) : (
    <button
      type="button"
      className={`text-gray-600 bg-transparent shadow-inner ${baseButton} ${sizeMode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
