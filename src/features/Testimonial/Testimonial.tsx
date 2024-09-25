import { Container } from '@/shared/ui/Container/Container'
import TestimonialData from '@/shared/assets/data/testimonial.json'

import s from './Testimonial.module.scss'
import { TestimonialItem } from './TestimonialItem'

export const Testimonial = () => {
  return (
    <Container className={s.container} id='testimonial'>
      <h2 className={s.title}>Отзывы</h2>
      <div className={s.testimonial}>
        {TestimonialData.map((item) => (
          <TestimonialItem
            key={item.id}
            avatar={item.avatar}
            text={item.text}
            name={item.name}
            job={item.job}
          />
        ))}
      </div>
    </Container>
  )
}