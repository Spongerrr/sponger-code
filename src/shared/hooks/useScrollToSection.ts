import { useCallback } from 'react'

export const useScrollToSection = (setIsOpen) => {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    if (setIsOpen) {
      setIsOpen(false)
    }
  }, [setIsOpen])

  return scrollToSection
}