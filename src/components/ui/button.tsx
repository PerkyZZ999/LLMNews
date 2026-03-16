import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '../../lib/cn'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'default' | 'secondary'
}

export function Button({ className, variant = 'default', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'button',
        variant === 'secondary' && 'button button--secondary',
        className,
      )}
      type={type}
      {...props}
    />
  )
}
