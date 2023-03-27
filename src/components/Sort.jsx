import { useState } from 'react'
import IconArrowUp from './icons/IconArrowUp'
import { v4 as uuidv4 } from 'uuid'
import IconArrowDown from './icons/IconArrowDown'

const Sort = () => {
  const [popupOpened, setPopupOpened] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  const openPopup = () => {
    setPopupOpened(!popupOpened)
  }

  const sortItems = ['ціною', 'алфавітом', 'популярністю']

  const selectActiveItems = id => {
    setActiveItem(id)
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
            <span className="sort__name">{sortItems[activeItem]}</span>
          </p>
        </button>
        {popupOpened && (
          <ul className="sort__popup">
            {sortItems.map((item, idx) => {
              return (
                <li
                  key={uuidv4()}
                  className={
                    activeItem === idx
                      ? 'sort__item sort__item--active'
                      : 'sort__item'
                  }
                  onClick={() => selectActiveItems(idx)}
                >
                  <p className="sort__text">{item}</p>
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
