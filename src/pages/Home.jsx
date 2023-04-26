import { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Item from '../components/Item'
import Sort from '../components/Sort'
import SkeletonItem from '../components/SkeletonItem'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({
    name: 'популярністю',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:5001/api/pizzas?${
        categoryId > 0 ? `filter=${categoryId}` : ''
      }&sort=${sortType.sortProperty}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType])

  return (
    <>
      <section className="home-1">
        <div className="container home-1__wrapper">
          <div className="home-1__line"></div>
          <div className="home-1__menu">
            <div className="home-1__filter-wrapper">
              <Filter
                value={categoryId}
                onClickCategory={id => setCategoryId(id)}
              />
            </div>
            <div className="home-1__sort-wrapper">
              <Sort type={sortType} onClickSort={id => setSortType(id)} />
            </div>
          </div>
          <div className="home-1__content">
            <h2 className="home-1__title">Усі піци</h2>
            <div className="grid home-1__items-wrapper">
              {isLoading
                ? [...new Array(10)].map((el, idx) => {
                    return <SkeletonItem key={idx} />
                  })
                : items.map((el, id) => {
                    return <Item key={id} {...el} />
                  })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
