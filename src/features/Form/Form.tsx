import { Container } from '@/shared/ui/Container/Container'
import { useState } from 'react'
import { Textarea } from './Textarea'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import type { IData } from './types/IData'

import s from './Form.module.scss'
import { sendMessage } from './lib/sendMessage'
import { Socials } from '@/shared/ui/Socials/Socials'

export const Form = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [sended, setSended] = useState(false)
  const [data, setData] = useState<IData>({
    name: '',
    contacts: '',
    text: ''
  })

  const changeData = (key: keyof IData, value: string | null) => {
    setData(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const requiredFields: (keyof IData)[] = ['name', 'contacts', 'text']
    const dataErrors: string[] = []

    requiredFields.forEach(field => {
      if (!data[field]) {
        dataErrors.push(`${field}`)
      }
    })

    if (dataErrors.length > 0) {
      setErrors(dataErrors)
    } else {
      sendMessage(data)
      setSended(true)
      setErrors([])
    }
  }

  return (
    <Container className={s.container}>
      <form
        onSubmit={handleSubmit}
        className={s.form}
      >
        <input
          type='text'
          placeholder='Имя'
          value={data.name}
          onChange={(e) => changeData('name', e.target.value)}
        />
        <input
          type='email'
          placeholder='Контакт для связи'
          value={data.contacts}
          onChange={(e) => changeData('contacts', e.target.value)}
        />
        <Textarea
          value={data.text}
          onChange={(value) => changeData('text', value)}
        />
        <div className={s.footer}>
          <Button
            type='submit'
            theme={ButtonTheme.CONTAIN}
          >
            Отправить
          </Button>
          <Socials theme='DARK' />
        </div>
      </form>
      <div className={s.info}>
        <h2>Интересует сотрудничество? Напишите мне!</h2>
        <p>Независимо от сложности проекта, я готов помочь. Заполните форму ниже или перейдите по одной из ссылок, и мы обсудим, как я могу быть полезен для Вашего бизнеса.</p>
        <a href='mailto:sponger.code@gmail.com&body' target='_blank'>
          sponger.code@gmail.com
        </a>
      </div>
    </Container>
  )
}