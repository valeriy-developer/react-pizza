import { useState } from 'react'
import IconArrowUp from './icons/IconArrowUp'
import IconArrowDown from './icons/IconArrowDown'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../redux/slices/filterSlice'

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
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filter.sort)
  const [popupOpened, setPopupOpened] = useState(false)

  const openPopup = () => {
    setPopupOpened(!popupOpened)
  }

  const selectActiveItems = obj => {
    dispatch(setSort(obj))
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
                  onClick={() => selectActiveItems(obj)}
                  className={
                    obj.sortProperty === sort.sortProperty
                      ? 'sort__item sort__item--active'
                      : 'sort__item'
                  }
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
