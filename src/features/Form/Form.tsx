import { Container } from '@/shared/ui/Container/Container'
import { useState } from 'react'
import { Textarea } from './Textarea'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { sendMessage } from './lib/sendMessage'
import { Socials } from '@/shared/ui/Socials/Socials'
import { AnimatePresence, motion } from 'framer-motion'
import type { IData } from './types/IData'

import s from './Form.module.scss'

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

  const clearData = () => {
    setData({
      name: '',
      contacts: '',
      text: ''
    })
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
      clearData()
      setErrors([])
    }
  }

  if (!sended) {
    return (
      <Container className={s.container} id='contact'>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            type='text'
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
              className={s.button}
            >
              Отправить
            </Button>
            <Socials theme='DARK' className={s.socials} />
          </div>
        </motion.form>
        <div className={s.info}>
          <h2>Интересует сотрудничество? Напишите мне!</h2>
          <p>Независимо от сложности проекта, я готов помочь. Заполните форму ниже или перейдите по одной из ссылок, и мы обсудим, как я могу быть полезен для Вашего бизнеса.</p>
          <a href='mailto:sponger.code@gmail.com&body' target='_blank'>
            sponger.code@gmail.com
          </a>
        </div>
      </Container>
    )
  } else {
    return (
      <AnimatePresence>
        {sended && (
          <Container id='contact'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={s.sended}
            >
              <h2>Ваше сообщение успешно отправлено.<br/>
              Совсем скоро я свяжусь с Вами!</h2>
            </motion.div>
          </Container>
        )}
      </AnimatePresence>
    )
  }
}