import s from './Experience.module.scss'

interface Props {
  icon: React.ReactNode
  job: string
  title: string
  date: string
  text: string
}

export const ExperienceItem = ({ icon, job, title, date, text }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.top}>
        <div className={s.company}>
          {icon}
          <strong>{job}</strong>
        </div>
        <p>{date}</p>
      </div>
      <strong className={s.job}>{title}</strong>
      <p className={s.text}>{text}</p>
    </div>
  )
}