import { Container } from '@/shared/ui/Container/Container'
import { ProjectItem } from './ProjectItem'
import ProjectsData from '@/shared/assets/data/projects.json'

import s from './Projects.module.scss'


export const Projects = () => {
  return (
    <div className={s.background}>
      <Container className={s.container} id='projects'>
        <h2 className={s.title}>Мои проекты</h2>
        <div className={s.projects}>
          {ProjectsData.map((item) => (
            <ProjectItem
              key={item.id}
              img={item.img}
              num={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}