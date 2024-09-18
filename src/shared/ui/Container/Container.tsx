import { classNames } from '@/shared/lib/classNames'
import s from './Container.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={classNames(s.container, {}, [className])}>
      {children}
    </div>
  )
}