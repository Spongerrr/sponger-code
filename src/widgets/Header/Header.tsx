import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div>@sponger.code</div>
      <nav>
        <ul className={s.list}>
          <li>Навыки</li>
          <li>Обо мне</li>
          <li>Опыт работы</li>
          <li>Связаться со мной</li>
        </ul>
      </nav>
      <div>Button</div>
    </header>
  )
}