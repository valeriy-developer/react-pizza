import { useState } from 'react'
import IconArrowUp from './icons/IconArrowUp'
import IconArrowDown from './icons/IconArrowDown'

export const sortList = [
  {
    name: 'популярністю',
    sortProperty: 'rating',
  },
  {
    name: 'ціною',
    sortProperty: 'price',
  },
  {
    name: 'алфавітом',
    sortProperty: 'title',
  },
]

const Sort = () => {
  const [popupOpened, setPopupOpened] = useState(false)

  const openPopup = () => {
    setPopupOpened(!popupOpened)
  }

  const selectActiveItems = () => {
    setPopupOpened(false)
  }

  return (
    <>
      <div className="sort">
        <button onClick={openPopup} className="sort__btn">
          <span className="sort__arrow">
            {popupOpened ? <IconArrowUp /> : <IconArrowDown />}
          </span>
          <p className="sort__show-text">
            Сортування за:
            <span className="sort__name">популярністю</span>
          </p>
        </button>
        {popupOpened && (
          <ul className="sort__popup">
            {sortList.map((obj, idx) => {
              return (
                <li
                  key={idx}
                  className="sort__item"
                  onClick={() => selectActiveItems(obj)}
                >
                  <p className="sort__text">{obj.name}</p>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}

export default Sort
