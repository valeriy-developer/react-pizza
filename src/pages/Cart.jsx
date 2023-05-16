import IconBasket from '../components/icons/IconBasket'
import IconArrowLeft from '../components/icons/IconArrowLeft'
import IconBlackCart from '../components/icons/IconBlackCart'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { clearItems } from '../redux/slices/cartSlice'
import CartEmpty from '../components/CartEmpty'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(state => state.cart)

  const totalCount = items.reduce((sum, item) => {
    return sum + item.count
  }, 0)

  const onClickClear = () => {
    if (window.confirm('Видалити всі товари з кошику?')) {
      dispatch(clearItems())
    }
  }

  if (!totalPrice) {
    return <CartEmpty />
  }

  return (
    <div className="cart">
      <div className="cart__top-block">
        <div className="cart__title-wrapper">
          <IconBlackCart />
          <h2 className="cart__title">Кошик</h2>
        </div>
        <button onClick={onClickClear} className="cart__clear-btn">
          <IconBasket />
          Очистити кошик
        </button>
      </div>
      <ul className="cart__item-list">
        {items.map((el, idx) => {
          return <CartItem key={idx} {...el} />
        })}
      </ul>
      <div className="cart__bottom-block">
        <div className="cart__info-wrapper">
          <p className="cart__quantity">
            Усього піцц:
            <span className="cart__quantity-bold"> {totalCount} шт</span>
          </p>
          <p className="cart__summ">
            Сума замовлення:
            <span className="cart__summ-bold"> {totalPrice} грн.</span>
          </p>
        </div>
        <div className="cart__btns-wrapper">
          <Link to="/" className="cart__back-btn">
            <Button icon={<IconArrowLeft />} text={'Повернутись назад'} />
          </Link>
          <Button text={'Оплатити зараз'} />
        </div>
      </div>
    </div>
  )
}

export default Cart
