import { SocialItem } from './SocialItem'

import s from './Socials.module.scss'

export const Socials = () => {
  return (
    <ul className={s.socials}>
      <SocialItem href='https://t.me/sponger_code' i='TG' />
      <SocialItem href='https://vk.com/sponger_ilya' i='VK' />
      <SocialItem href='https://github.com/Spongerrr' i='GH' />
      <SocialItem href='https://t.me/sponger_code' i='IN' />
    </ul>
  )
}