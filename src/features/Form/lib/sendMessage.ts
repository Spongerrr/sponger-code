import type { IData } from '../types/IData'

export const sendMessage = async (data: IData): Promise<void> => {
  const token = ''
  const chatId  = ''

  const message = `
    Заявка с формы контактов:
    Имя: ${data.name}
    Контакт: ${data.contacts}
    Текст: ${data.text}
  `

  const msgUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${encodeURIComponent(message)}`

  try {
    const messageResponse = await fetch(msgUrl)
    if (!messageResponse.ok) {
      throw new Error('Ошибка отправки формы')
    }

    console.log('Данные успешно отправлены')
  } catch (error) {
    console.log('Произошла ошибка:', error)
  }
}