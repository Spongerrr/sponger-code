import { Container } from '@/shared/ui/Container/Container'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import DownloadIcon from '@/shared/assets/icons/download.svg?react'
import ResumeFile from '@/shared/assets/SpongerResume.txt'

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
      <Button theme={ButtonTheme.CONTAIN} className={s.buttonContainer}>
        <a className={s.button} href={ResumeFile} download>
          <p>Скачать резюме</p>
          <DownloadIcon />
        </a>
      </Button>
    </Container>
  )
}