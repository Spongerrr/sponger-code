import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import s from './BurgerMenu.module.scss'
import { Socials } from '@/shared/ui/Socials/Socials'
import { classNames } from '@/shared/lib/classNames'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <div className={s.burger}>
      <button
        className={s.burgerBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={classNames(s.icon, { [s.isOpen]: isOpen }, [])}
          viewBox="0 0 100 100"
          width="50"
        >
          <path
            className={`${s.line} ${s.top}`}
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
          <path
            className={`${s.line} ${s.middle}`}
            d="m 30,50 h 40" />
          <path
            className={`${s.line} ${s.bottom}`}
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={s.menu}
            key='burger'
            initial={{ right: '-100%' }}
            animate={{ right: '0' }}
            exit={{ right: '-100%' }}
          >
            <ul className={s.list}>
              <li>Навыки</li>
              <li>Обо мне</li>
              <li>Опыт работы</li>
              <li>Связаться со мной</li>
            </ul>
            <a
              className={s.link}
              target='_blank'
              href='mailto:sponger.code@gmail.com&body'
            >
              sponger.code@gmail.com
            </a>
            <Socials className={s.socials} theme='DARK' />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}