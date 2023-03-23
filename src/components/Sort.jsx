import IconArrowUp from './icons/IconArrowUp'

const Sort = () => {
  return (
    <>
      <div className="sort">
        <button className="sort__btn">
          <span className="sort__arrow">
            <IconArrowUp />
          </span>
          <p className="sort__show-text">
            Сортування за:
            <span className="sort__name">популярністю</span>
          </p>
        </button>
        <ul className="sort__popup">
          <li className="sort__item">
            <input
              id="sort__input-radio1"
              className="sort__radio"
              type="radio"
              name="sort-radios"
              defaultChecked
            />
            <label className="sort__text" htmlFor="sort__input-radio1">
              ціною
            </label>
          </li>
          <li className="sort__item">
            <input
              id="sort__input-radio2"
              className="sort__radio"
              type="radio"
              name="sort-radios"
            />
            <label className="sort__text" htmlFor="sort__input-radio2">
              алфавітом
            </label>
          </li>
          <li className="sort__item">
            <input
              id="sort__input-radio3"
              className="sort__radio"
              type="radio"
              name="sort-radios"
            />
            <label className="sort__text" htmlFor="sort__input-radio3">
              популярністю
            </label>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sort
