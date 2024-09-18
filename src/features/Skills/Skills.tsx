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

import s from './Skills.module.scss'

export const Skills = () => {
  return (
    <section>
      <h2 className={s.title}>Навыки</h2>
      <div className={s.skills}>
        <div className={s.skill}>
          <IconJavaScript />
          <p>JavaScript</p>
        </div>
        <div className={s.skill}>
          <IconTypeScript />
          <p>TypeScript</p>
        </div>
        <div className={s.skill}>
          <IconReact />
          <p>React</p>
        </div>
        <div className={s.skill}>
          <IconRedux />
          <p>Redux</p>
        </div>
        <div className={s.skill}>
          <IconNext />
          <p>Next</p>
        </div>
      </div>
      <div className={s.skills}>
        <div className={s.skill}>
          <IconScss />
          <p>Scss</p>
        </div>
        <div className={s.skill}>
          <IconWebpack />
          <p>Webpack</p>
        </div>
        <div className={s.skill}>
          <IconStorybook />
          <p>Storybook</p>
        </div>
        <div className={s.skill}>
          <IconGit />
          <p>Git</p>
        </div>
        <div className={s.skill}>
          <IconDocker />
          <p>Docker</p>
        </div>
      </div>
    </section>
  )
}