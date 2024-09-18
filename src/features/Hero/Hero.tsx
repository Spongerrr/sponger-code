import s from './Hero.module.scss'

import { Socials } from '@/shared/ui/Socials/Socials'
import { HeroTitle } from './HeroTitle'

export const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.main}>
        <HeroTitle />
        <Socials />
      </div>
      <div className={s.image}>
        <img src='my-photo.png' />
      </div>
    </div>
  )
}