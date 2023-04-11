import { useState } from 'react'
import IconArrowUp from './icons/IconArrowUp'
import IconArrowDown from './icons/IconArrowDown'
import { useSelector, useDispatch } from 'react-redux'
import { setSortItems } from '../redux/slices/filterSlice.js'

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
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filter.sort)

  const openPopup = () => {
    setPopupOpened(!popupOpened)
  }

  const selectActiveItems = id => {
    dispatch(setSortItems(id))
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
            <span className="sort__name">{sort.name}</span>
          </p>
        </button>
        {popupOpened && (
          <ul className="sort__popup">
            {sortList.map((obj, idx) => {
              return (
                <li
                  key={idx}
                  className={
                    sort.sortProperty === obj.sortProperty
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
