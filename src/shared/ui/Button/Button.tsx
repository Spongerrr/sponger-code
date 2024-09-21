import { classNames } from '@/shared/lib/classNames'
import { ButtonHTMLAttributes, FC } from 'react'

import s from './Button.module.scss'

export enum ButtonTheme {
  CONTAIN = 'contain',
  OUTLINE = 'outline'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<Props> = (props) => {

  const {
    className,
    children,
    theme,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [s[theme]]: true,
    [s[size]]: true
  }

  return (
    <button
      className={classNames(s.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}