interface Props {
  value: number
  onClickCategory: (id: number) => void
}

const Filter = ({ value, onClickCategory }: Props) => {
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
        {categories.map((el: string, idx: number) => {
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
