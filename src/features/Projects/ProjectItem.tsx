import s from './Projects.module.scss'

interface Props {
  img: string
  num: string
  name: string
  description: string
}

export const ProjectItem = ({ img, num, name, description }: Props) => {
  return (
    <div className={s.project}>
      <img src={img} />
      <div className={s.text}>
        <strong className={s.number}>{num}</strong>
        <h6 className={s.projectName}>{name}</h6>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  )
}