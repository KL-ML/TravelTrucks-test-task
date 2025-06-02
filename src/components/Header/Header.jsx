
import css from './Header.module.css';


export default function Header() {
  return (
    <header className={css.header}>
          <div className={css.navGroup}>
        Header
      <p>Logo</p>
        {/* <Logo /> */}
      </div>
    </header>
  );
}

