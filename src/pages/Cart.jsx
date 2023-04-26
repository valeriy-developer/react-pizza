import IconAmountMinus from '../components/icons/IconAmountMinus'
import IconAmountPlus from '../components/icons/IconAmountPlus'
import IconBasket from '../components/icons/IconBasket'
import IconRemove from '../components/icons/IconRemove'
import IconArrowLeft from '../components/icons/IconArrowLeft'
import IconBlackCart from '../components/icons/IconBlackCart'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top-block">
        <div className="cart__title-wrapper">
          <IconBlackCart />
          <h2 className="cart__title">Кошик</h2>
        </div>
        <button className="cart__clear-btn">
          <IconBasket />
          Очистити кошик
        </button>
      </div>
      <ul className="cart__item-list">
        <li className="grid cart__item">
          <div className="cart__item-details">
            <img
              className="ratio-img cart__item-img"
              src="images/items/1.png"
              alt="Pizza"
            />
            <div className="cart__text-wrapper">
              <p className="cart__item-name">Чізбургер-піца</p>
              <p className="cart__item-dough">
                тонке тісто, <span className="cart__item-size"> 26 см.</span>
              </p>
            </div>
          </div>
          <div className="cart__amount-wrapper">
            <button className="cart__amount-btn">
              <IconAmountMinus />
            </button>
            <p className="cart__amount">0</p>
            <button className="cart__amount-btn">
              <IconAmountPlus />
            </button>
          </div>
          <p className="cart__price">770 грн.</p>
          <button className="cart__remove-btn">
            <IconRemove />
          </button>
        </li>
        <li className="grid cart__item">
          <div className="cart__item-details">
            <img
              className="ratio-img cart__item-img"
              src="images/items/2.png"
              alt="Pizza"
            />
            <div className="cart__text-wrapper">
              <p className="cart__item-name">Чізбургер-піца</p>
              <p className="cart__item-dough">
                тонке тісто, <span className="cart__item-size"> 26 см.</span>
              </p>
            </div>
          </div>
          <div className="cart__amount-wrapper">
            <button className="cart__amount-btn">
              <IconAmountMinus />
            </button>
            <p className="cart__amount">0</p>
            <button className="cart__amount-btn">
              <IconAmountPlus />
            </button>
          </div>
          <p className="cart__price">770 грн.</p>
          <button className="cart__remove-btn">
            <IconRemove />
          </button>
        </li>
      </ul>
      <div className="cart__bottom-block">
        <div className="cart__info-wrapper">
          <p className="cart__quantity">
            Усього піцц:
            <span className="cart__quantity-bold"> 2 шт</span>
          </p>
          <p className="cart__summ">
            Сума замовлення:
            <span className="cart__summ-bold"> 900 грн.</span>
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
