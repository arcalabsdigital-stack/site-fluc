import { useIntersection } from '@/hooks/use-intersection'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 })

  return (
    <section
      id={id}
      ref={ref as any}
      className={cn(
        'opacity-0 transition-opacity duration-1000',
        isIntersecting && 'animate-fade-in-up opacity-100',
        className,
      )}
    >
      {children}
    </section>
  )
}
