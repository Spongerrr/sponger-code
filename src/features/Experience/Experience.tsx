import { Container } from '@/shared/ui/Container/Container'
import { ExperienceItem } from './ExperienceItem'
import ExperienceData from '@/shared/assets/data/experience.json'

import s from './Experience.module.scss'

export const Experience = () => {
  return (
    <div className={s.background}>
      <Container className={s.experience}>
        <h2 className={s.title}>Опыт работы</h2>
        <div className={s.items}>
          {ExperienceData.map((item) => (
            <ExperienceItem
              key={item.id}
              icon={item.icon}
              title={item.job}
              date={item.date}
              job={item.name}
              text={item.description}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}