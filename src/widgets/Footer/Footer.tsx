import { Container } from '@/shared/ui/Container/Container'
import s from './Footer.module.scss'
import { Socials } from '@/shared/ui/Socials/Socials'

export const Footer = () => {
  return (
    <footer className={s.background}>
      <Container className={s.footer}>
        <p>@sponger.code</p>
        <Socials theme='LIGHT' />
        <div>
          <p>©2024 Copyright.</p>
          <p>All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}