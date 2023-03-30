import { useState } from 'react'
import IconArrowUp from './icons/IconArrowUp'
import IconArrowDown from './icons/IconArrowDown'

const Sort = ({ sortValue, onChangeSort }) => {
  const [popupOpened, setPopupOpened] = useState(false)

  const openPopup = () => {
    setPopupOpened(!popupOpened)
  }

  const sortItems = [
    {
      name: 'ціною',
      sort: 'price',
    },
    {
      name: 'алфавітом',
      sort: 'title',
    },
    {
      name: 'популярністю',
      sort: 'rating',
    },
  ]

  const selectActiveItems = id => {
    onChangeSort(id)
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
            <span className="sort__name">{sortValue.name}</span>
          </p>
        </button>
        {popupOpened && (
          <ul className="sort__popup">
            {sortItems.map((obj, idx) => {
              return (
                <li
                  key={idx}
                  className={
                    sortValue.sort === obj.sort
                      ? 'sort__item sort__item--active'
                      : 'sort__item'
                  }
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
