import { Link } from 'react-router-dom'
import IconCart from './icons/IconCart'
import SearchInput from './SearchInput'
import { useSelector } from 'react-redux'

const Header = () => {
  const { items, totalPrice } = useSelector(state => state.cart)
  const totalCount = items.reduce((sum, item) => {
    return sum + item.count
  }, 0)

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
          <p className="header__price">{totalPrice} грн.</p>
          <div className="heder__line"></div>
          <div className="header__cart-wrapper">
            <IconCart />
            <p className="header__count-item">{totalCount}</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
