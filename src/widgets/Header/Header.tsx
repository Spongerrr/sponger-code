import { Container } from '@/shared/ui/Container/Container'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import DownloadIcon from '@/shared/assets/icons/download.svg?react'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <Container className={s.header}>
      <div>@sponger.code</div>
      <nav>
        <ul className={s.list}>
          <li>Навыки</li>
          <li>Обо мне</li>
          <li>Опыт работы</li>
          <li>Связаться со мной</li>
        </ul>
      </nav>
      <Button
        className={s.button}
        theme={ButtonTheme.CONTAIN}
      >
        <p>Скачать резюме</p>
        <DownloadIcon />
      </Button>
    </Container>
  )
}