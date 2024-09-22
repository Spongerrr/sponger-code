import s from './Testimonial.module.scss'

interface Props {
  avatar: string
  text: string
  name: string
  job: string
}

export const TestimonialItem = ({ avatar, text, name, job }: Props) => {
  return (
    <div className={s.testimonialItem}>
      <img className={s.avatar} src={avatar} />
      <p className={s.text}>{text}</p>
      <div className={s.line} />
      <strong>{name}</strong>
      <p className={s.job}>{job}</p>
    </div>
  )
}