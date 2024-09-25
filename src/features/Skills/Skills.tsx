import { Container } from '@/shared/ui/Container/Container'
import IconJavaScript from '@/shared/assets/icons/javascript.svg?react'
import IconTypeScript from '@/shared/assets/icons/typescript.svg?react'
import IconReact from '@/shared/assets/icons/react.svg?react'
import IconRedux from '@/shared/assets/icons/redux.svg?react'
import IconNext from '@/shared/assets/icons/next.svg?react'
import IconScss from '@/shared/assets/icons/scss.svg?react'
import IconWebpack from '@/shared/assets/icons/webpack.svg?react'
import IconStorybook from '@/shared/assets/icons/storybook.svg?react'
import IconGit from '@/shared/assets/icons/git.svg?react'
import IconDocker from '@/shared/assets/icons/docker.svg?react'
import IconWeb3JS from '@/shared/assets/icons/web3js.svg?react'
import SkillsData from '@/shared/assets/data/skills.json'

import s from './Skills.module.scss'

export const Skills = () => {
  return (
    <Container className={s.skillsSection} id='skills'>
      <h2 className={s.title}>Навыки</h2>
      <div className={s.skills}>
        {SkillsData.map((item) => (
          <div className={s.skill} key={item.id}>
            <img src={item.iconUrl} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}