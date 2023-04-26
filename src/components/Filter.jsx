const Filter = ({ value, onClickCategory }) => {
  const categories = [
    'Усі',
    "М'ясні",
    'Вегетаріанські',
    'Гриль',
    'Гострі',
    'Закриті',
  ]

  return (
    <>
      <ul className="filter">
        {categories.map((el, idx) => {
          return (
            <li
              key={idx}
              onClick={() => onClickCategory(idx)}
              className={
                value === idx ? 'filter__li filter__li--active' : 'filter__li'
              }
            >
              <p className="filter__text">{el}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Filter
