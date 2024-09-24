import { SocialItem } from './SocialItem'

import s from './Socials.module.scss'

interface Props {
  theme: 'DARK' | 'LIGHT'
  className?: string
}

export const Socials = ({ theme, className }: Props) => {
  const cls = theme === 'DARK' ? s.dark : s.light

  return (
    <ul className={`${s.socials} ${cls} ${className} `}>
      <SocialItem href='https://t.me/sponger_code' i='TG' />
      <SocialItem href='https://vk.com/sponger_ilya' i='VK' />
      <SocialItem href='https://github.com/Spongerrr' i='GH' />
    </ul>
  )
}