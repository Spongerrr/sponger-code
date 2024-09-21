import { useEffect, useRef } from 'react'

import s from './Form.module.scss'

interface Props {
  value: string
  onChange: (value: string) => void
}

export const Textarea = ({ value, onChange }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const setHeight = () => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }

    textarea.addEventListener('input', setHeight)

    return () => {
      textarea.removeEventListener('input', setHeight)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <textarea
      ref={textareaRef}
      placeholder='Ваше сообщение'
      value={value}
      onChange={handleChange}
      className={s.textarea}
    />
  )
}