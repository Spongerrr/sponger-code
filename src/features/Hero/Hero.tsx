import { Socials } from '@/shared/ui/Socials/Socials'
import { HeroTitle } from './HeroTitle'
import { Container } from '@/shared/ui/Container/Container'

import s from './Hero.module.scss'

export const Hero = () => {
  return (
    <Container className={s.hero}>
      <div className={s.main}>
        <HeroTitle />
        <Socials />
      </div>
      <div className={s.image}>
        <img src='my-photo.png' />
      </div>
    </Container>
  )
}