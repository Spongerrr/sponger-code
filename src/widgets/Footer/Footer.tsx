import { Container } from '@/shared/ui/Container/Container'
import s from './Footer.module.scss'
import { Socials } from '@/shared/ui/Socials/Socials'
import { useScrollToSection } from '@/shared/hooks/useScrollToSection'

export const Footer = () => {
  const scrollToSection = useScrollToSection(false)

  return (
    <footer className={s.background}>
      <Container className={s.footer}>
        <div
          className={s.logo}
          onClick={() => scrollToSection('hero')}>
          @sponger.code
        </div>
        <Socials className={s.socials} theme='LIGHT' />
        <div>
          <p>©2024 Copyright.</p>
          <p>All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}