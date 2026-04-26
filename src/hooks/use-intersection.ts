import { useEffect, useRef, useState } from 'react'

interface UseIntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export function useIntersection(options: UseIntersectionOptions = {}) {
  const { triggerOnce = true, ...observerOptions } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        if (triggerOnce) {
          observer.disconnect()
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false)
      }
    }, observerOptions)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [triggerOnce, observerOptions])

  return { ref, isIntersecting }
}
