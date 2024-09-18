import { SocialSvg } from '@/shared/helpers/SocialSvg'

import s from './Socials.module.scss'

interface Props {
  href: string
  i: 'TG' | 'VK' | 'GH' | 'IN'
}

export const SocialItem = ({ href, i }: Props) => {
  return (
    <li>
      <a href={href} className={s.social} target='_blank'>
        <SocialSvg i={i} />
      </a>
    </li>
  )
}