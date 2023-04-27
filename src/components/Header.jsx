import { Link } from 'react-router-dom'
import IconCart from './icons/IconCart'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <header className="container header">
      <div className="header__wrapper">
        <Link className="header__left-link" to="/">
          <img className="header__logo" src="images/logo.jpg" alt="Logo" />
          <div className="header__text">
            <h1 className="header__title">REACT PIZZA</h1>
            <p className="header__subtitle">Найсмачніша піца у всесвіті</p>
          </div>
        </Link>
        <SearchInput />
        <Link className="header__right-link" to="/cart">
          <p className="header__price">520 грн.</p>
          <div className="heder__line"></div>
          <div className="header__cart-wrapper">
            <IconCart />
            <p className="header__count-item">3</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
