import cx from 'classnames'
import globalStyle from '../../styles/global-styles/bootstrap.min.module.scss'
import icons from '../../styles/global-styles/bootstrap-icons.module.scss'
import styles from './Header.module.scss'

export default function Header () {
  return (
    <nav className={cx(globalStyle['navbar'], globalStyle['navbar-expand-lg'], globalStyle['navbar-dark'])}>
      <div className={globalStyle['container-fluid']}>
        <a className={cx(globalStyle['navbar-brand'], styles.logo)} href=''><img src='Logo.png'></img></a>
        <div className={cx(globalStyle['collapse'], globalStyle['navbar-collapse'])}>
          <ul className={cx(globalStyle['navbar-nav'], globalStyle['me-auto'], globalStyle['mb-2'], globalStyle['mb-lg-0'])}> 
            <li className={globalStyle['nav-item']}><a className={globalStyle['nav-link']} href="">Movies</a></li>
            <li className={globalStyle['nav-item']}><a className={globalStyle['nav-link']} href="">TvShows</a></li>
            <li className={globalStyle['nav-item']}><a className={globalStyle['nav-link']} href="">Genres</a></li>
            <li className={globalStyle['nav-item']}><a className={globalStyle['nav-link']} href="">WebSeries</a></li>
            <li className={globalStyle['nav-item']}><a className={globalStyle['nav-link']} href="">Anime</a></li>
          </ul>
          <form className={cx(globalStyle['d-flex'], styles.searchForm)}>
            <input type={'search'}></input>
            <label htmlFor="search-box">
              <span id={styles.searchIcon}><i className={cx(icons.bi, icons['bi-search'])}></i></span>
            </label>
            <ul className={cx(globalStyle['navbar-nav'])}>
            <li className={globalStyle['nav-item']}><a className={globalStyle['nav-link']} href="">LOGIN</a></li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
