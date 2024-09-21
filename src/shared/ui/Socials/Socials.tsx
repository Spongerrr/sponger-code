import { SocialItem } from './SocialItem'

import s from './Socials.module.scss'

interface Props {
  theme: 'DARK' | 'LIGHT'
}

export const Socials = ({ theme }: Props) => {
  const cls = theme === 'DARK' ? s.dark : s.light

  return (
    <ul className={`${s.socials} ${cls} `}>
      <SocialItem href='https://t.me/sponger_code' i='TG' />
      <SocialItem href='https://vk.com/sponger_ilya' i='VK' />
      <SocialItem href='https://github.com/Spongerrr' i='GH' />
    </ul>
  )
}