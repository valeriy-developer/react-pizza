import { useDispatch, useSelector } from 'react-redux'
import IconPlus from './icons/IconPlus'
import { useState } from 'react'
import { addItem } from '../redux/slices/cartSlice'

interface Props {
  id: number
  title: string
  price: number
  imgUrl: string
  types: number[]
  size: number[]
}

const doughs: string[] = ['Тонке', 'Традиційне']

const Item = ({ id, title, price, imgUrl, types, size }: Props) => {
  const dispatch = useDispatch()

  const [activeDough, setActiveDough] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const cartItem = useSelector((state: any) =>
    state.cart.items.find((obj: any) => obj.id === id)
  )
  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imgUrl,
      type: doughs[activeDough],
      size: size[activeSize],
    }

    dispatch(addItem(item))
  }

  return (
    <div className="item">
      <img src={imgUrl} alt="Pizza" className="ratio-img item__img" />
      <div className="item__content">
        <h3 className="item__title">{title}</h3>
        <div className="item__variations">
          <ul className="item__dough-menu">
            {types.map((typeNum, idx) => {
              return (
                <li
                  key={idx}
                  className={
                    activeDough === idx
                      ? 'item__dough  item__dough--active'
                      : 'item__dough'
                  }
                  onClick={() => setActiveDough(typeNum)}
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
          <button onClick={onClickAdd} className="item__btn">
            <IconPlus />
            Додати
            {addedCount > 0 && (
              <span className="item__amount">{addedCount}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
