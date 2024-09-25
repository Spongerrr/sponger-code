import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Socials } from '@/shared/ui/Socials/Socials'
import { classNames } from '@/shared/lib/classNames'
import { useScrollToSection } from '@/shared/hooks/useScrollToSection'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import DownloadIcon from '/public/pictures/icons/download.svg?react'
import ResumeFile from '@/shared/assets/Resume.txt'
import NavList from '@/shared/assets/data/nav.json'

import s from './BurgerMenu.module.scss'

export const BurgerMenu = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const scrollToSection = useScrollToSection(setIsOpen)

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
              {NavList.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.url)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <Button theme={ButtonTheme.CONTAIN} className={s.buttonContainer}>
              <a className={s.button} href={ResumeFile} download>
                <p>Скачать резюме</p>
                <DownloadIcon />
              </a>
            </Button>
            <Socials className={s.socials} theme='DARK' />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}