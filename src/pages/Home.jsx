import { useState } from 'react'
import Filter from '../components/Filter'
import Item from '../components/Item'
import Sort from '../components/Sort'
import SkeletonItem from '../components/SkeletonItem'

const Home = ({ searchValue }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])

  return (
    <>
      <section className="home-1">
        <div className="container home-1__wrapper">
          <div className="home-1__line"></div>
          <div className="home-1__menu">
            <div className="home-1__filter-wrapper">
              <Filter />
            </div>
            <div className="home-1__sort-wrapper">
              <Sort />
            </div>
          </div>
          <div className="home-1__content">
            <h2 className="home-1__title">Усі піци</h2>
            <div className="grid home-1__items-wrapper">
              {isLoading
                ? [...new Array(11)].map((_, idx) => <SkeletonItem key={idx} />)
                : items
                    .filter(obj => {
                      if (
                        obj.title
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      ) {
                        return true
                      }
                    })
                    .map(el => {
                      return <Item key={el.id} {...el} />
                    })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
