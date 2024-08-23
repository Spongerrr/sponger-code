import { useEffect } from 'react'

export const useVh = () => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    setVh()
    window.addEventListener('resize', setVh)

    return () => {
      window.removeEventListener('resize', setVh)
    }
  })
}