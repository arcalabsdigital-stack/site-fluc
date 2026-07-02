import { cn } from '@/lib/utils'

export function FlucLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg bg-slate-900 text-white font-bold w-8 h-8 text-lg',
        className,
      )}
    >
      F
    </div>
  )
}
