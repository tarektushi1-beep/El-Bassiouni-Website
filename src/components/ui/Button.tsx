// src/components/ui/Button.tsx
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'outline-dark' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-aspire tracking-widest uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-eb-red focus:ring-offset-2'

  const variants = {
    primary: 'bg-eb-red text-white hover:bg-red-800',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-eb-black',
    'outline-dark': 'border-2 border-eb-black text-eb-black hover:bg-eb-black hover:text-white',
    white: 'bg-white text-eb-black hover:bg-eb-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
