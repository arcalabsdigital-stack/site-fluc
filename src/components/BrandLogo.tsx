import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function BrandLogo({ className, size = 'md', showText = true }: BrandLogoProps) {
  const sizes = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-8 h-8 text-lg',
    lg: 'w-10 h-10 text-xl',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'bg-slate-900 text-white flex items-center justify-center rounded-lg font-bold',
          sizes[size],
        )}
      >
        F
      </div>
      {showText && (
        <span className={cn('font-bold tracking-tighter text-slate-900', textSizes[size])}>
          Fluc
        </span>
      )}
    </div>
  )
}
