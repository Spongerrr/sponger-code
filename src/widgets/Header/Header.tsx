import { Container } from '@/shared/ui/Container/Container'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import ResumeFile from '@/shared/assets/SpongerResume.txt'
import DownloadIcon from '/public/pictures/icons/download.svg?react'
import NavList from '@/shared/assets/data/nav.json'
import { BurgerMenu } from './BurgerMenu/BurgerMenu'

import s from './Header.module.scss'
import { useScrollToSection } from '@/shared/hooks/useScrollToSection'

export const Header = () => {
  const scrollToSection = useScrollToSection(false)

  return (
    <Container className={s.header}>
      <div>@sponger.code</div>
      <nav>
        <ul className={s.list}>
          {NavList.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.url)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
      <Button theme={ButtonTheme.CONTAIN} className={s.buttonContainer}>
        <a className={s.button} href={ResumeFile} download>
          <p>Скачать резюме</p>
          <DownloadIcon />
        </a>
      </Button>
      <BurgerMenu />
    </Container>
  )
}