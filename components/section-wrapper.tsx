"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out",
        isVisible && "animate-fade-in-up opacity-100",
        className
      )}
    >
      {children}
    </section>
  )
}
