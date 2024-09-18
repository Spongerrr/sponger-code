import { Container } from '@/shared/ui/Container/Container'

import s from './About.module.scss'

export const About = () => {
  return (
    <Container className={s.about}>
      <div className={s.image}>
        <img src='my-photo.png' />
      </div>
      <div className={s.text}>
        <h2 className={s.title}>Обо мне</h2>
        <p className={s.subtitle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad facere, magni hic aperiam numquam at, ducimus animi nostrum iusto dolores eos accusantium. Cumque eius alias error ex odit laboriosam corrupti, magnam eveniet, amet, facere nihil aliquam corporis veritatis necessitatibus saepe numquam. Quisquam exercitationem facere similique dicta magni, explicabo optio.<br/><br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt molestias velit dolore, beatae accusamus perspiciatis nihil dolorem, harum adipisci voluptatum odio autem illum quasi dignissimos delectus, qui ullam assumenda! Incidunt, maxime blanditiis. Quos provident explicabo sapiente neque eius quibusdam labore excepturi eveniet ipsam numquam, veniam eum similique exercitationem maxime at?<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima saepe numquam et accusamus, fuga perferendis. Veniam numquam impedit corporis, iusto pariatur officia placeat et facere, culpa omnis eaque, dolore nihil cumque ipsam delectus ducimus necessitatibus quia sit a magni quidem quibusdam. Harum quis eum cupiditate nesciunt dolore rerum sapiente!
        </p>
      </div>
    </Container>
  )
}