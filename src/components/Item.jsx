import IconPlus from './icons/IconPlus'
import { useState } from 'react'

const Item = ({ title, price, imgUrl, type, size }) => {
  const [activeDough, setActiveDough] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const doughs = ['Тонке', 'Традиційне']

  return (
    <div className="item">
      <img src={imgUrl} alt="Pizza" className="ratio-img item__img" />
      <div className="item__content">
        <h3 className="item__title">{title}</h3>
        <div className="item__variations">
          <ul className="item__dough-menu">
            {type.map((typeNum, idx) => {
              return (
                <li
                  className={
                    activeDough === idx
                      ? 'item__dough  item__dough--active'
                      : 'item__dough'
                  }
                  key={idx}
                  onClick={() => setActiveDough(idx)}
                >
                  {doughs[typeNum]}
                </li>
              )
            })}
          </ul>
          <ul className="item__size-menu">
            {size.map((sizeNum, idx) => {
              return (
                <li
                  className={
                    activeSize === idx
                      ? 'item__size item__size--active'
                      : 'item__size'
                  }
                  key={idx}
                  onClick={() => setActiveSize(idx)}
                >
                  {sizeNum} см.
                </li>
              )
            })}
          </ul>
        </div>
        <div className="item__purchase-wrapper">
          <p className="item__price">від {price} грн.</p>
          <button className="item__btn">
            <IconPlus />
            Додати
            <span className="item__amount">1</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
