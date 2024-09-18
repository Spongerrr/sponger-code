import { Container } from '@/shared/ui/Container/Container'
import GoogleIcon from '@/shared/assets/icons/google.svg?react'

import s from './Experience.module.scss'

export const Experience = () => {
  return (
    <div className={s.background}>
      <Container className={s.experience}>
        <h2 className={s.title}>Опыт работы</h2>
        <div className={s.items}>
          <div className={s.item}>
            <div className={s.top}>
              <div className={s.logo}>
                <GoogleIcon />
                <strong>Frontend - разработчик</strong>
              </div>
              <p>Декабрь 2023 - Май 2024</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}