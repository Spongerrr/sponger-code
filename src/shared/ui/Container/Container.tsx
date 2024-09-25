import { classNames } from '@/shared/lib/classNames'

import s from './Container.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Container = ({ children, className, id }: Props) => {
  return (
    <div className={classNames(s.container, {}, [className])} id={id}>
      {children}
    </div>
  )
}