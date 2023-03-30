const Filter = ({ filterValue, onClickCategory }) => {
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
              onClick={() => onClickCategory(idx)}
              className={
                filterValue === idx
                  ? 'filter__li filter__li--active'
                  : 'filter__li'
              }
              key={idx}
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
