import { Container } from '@/shared/ui/Container/Container'
import GoogleIcon from '@/shared/assets/icons/google.svg?react'
import RefergramLogo from '@/shared/assets/refergram-logo.svg?react'
import PenguinStudioLogo from '@/shared/assets/penguin-studio-logo.svg?react'

import s from './Experience.module.scss'
import { ExperienceItem } from './ExperienceItem'

export const Experience = () => {
  return (
    <div className={s.background}>
      <Container className={s.experience}>
        <h2 className={s.title}>Опыт работы</h2>
        <div className={s.items}>
          <ExperienceItem
            icon={<PenguinStudioLogo />}
            job='Penguin Studio'
            title='Frontend - разработчик'
            date='Декабрь 2023 - Май 2024'
            text='Разрабатывал информационный веб-сайт для Digital-студии из Швейцарии, используя используя стек технологий: Next.JS, TypeScript, Framer-Motion.'
          />
          <ExperienceItem
            icon={<RefergramLogo />}
            job='Refergram Inc.'
            title='Frontend - разработчик'
            date='Июнь 2024 - Август 2024'
            text='Разрабатывал веб-интерфейс для Telegram Mini-App, используя стек технологий: React, TypeScript, Redux Toolkit, Telegram SDK.'
          />
        </div>
      </Container>
    </div>
  )
}