import { Socials } from '@/shared/ui/Socials/Socials'
import { HeroTitle } from './HeroTitle'
import { Container } from '@/shared/ui/Container/Container'
import PhotoMain from '@/shared/assets/photo.png'

import s from './Hero.module.scss'

export const Hero = () => {
  return (
    <Container className={s.hero}>
      <div className={s.main}>
        <HeroTitle />
        <Socials theme='DARK' />
      </div>
      <div className={s.image}>
        <img src={PhotoMain} />
        <div className={s.borderImage} />
      </div>
    </Container>
  )
}