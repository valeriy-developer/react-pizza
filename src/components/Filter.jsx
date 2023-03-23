const Filter = () => {
  return (
    <>
      <ul className="filter">
        <li className="filter__li">
          <input
            id="filter__input-radio1"
            className="filter__radio"
            type="radio"
            name="filter-radios"
            defaultChecked
          />
          <label className="filter__text" htmlFor="filter__input-radio1">
            Усі
          </label>
        </li>
        <li className="filter__li">
          <input
            id="filter__input-radio2"
            className="filter__radio"
            type="radio"
            name="filter-radios"
          />
          <label className="filter__text" htmlFor="filter__input-radio2">
            М'ясні
          </label>
        </li>
        <li className="filter__li">
          <input
            id="filter__input-radio3"
            className="filter__radio"
            type="radio"
            name="filter-radios"
          />
          <label className="filter__text" htmlFor="filter__input-radio3">
            Вегетаріанські
          </label>
        </li>
        <li className="filter__li">
          <input
            id="filter__input-radio4"
            className="filter__radio"
            type="radio"
            name="filter-radios"
          />
          <label className="filter__text" htmlFor="filter__input-radio4">
            Гриль
          </label>
        </li>
        <li className="filter__li">
          <input
            id="filter__input-radio5"
            className="filter__radio"
            type="radio"
            name="filter-radios"
          />
          <label className="filter__text" htmlFor="filter__input-radio5">
            Гострі
          </label>
        </li>
        <li className="filter__li">
          <input
            id="filter__input-radio6"
            className="filter__radio"
            type="radio"
            name="filter-radios"
          />
          <label className="filter__text" htmlFor="filter__input-radio6">
            Закриті
          </label>
        </li>
      </ul>
    </>
  )
}

export default Filter
