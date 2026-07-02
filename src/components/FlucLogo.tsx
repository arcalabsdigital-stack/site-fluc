import { cn } from '@/lib/utils'

interface FlucLogoProps {
  className?: string
}

export function FlucLogo({ className }: FlucLogoProps) {
  return (
    <div
      className={cn(
        'bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-lg',
        className,
      )}
    >
      F
    </div>
  )
}
