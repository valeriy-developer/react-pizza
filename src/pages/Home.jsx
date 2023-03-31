import { database } from '../scripts/firebaseConfig'
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Item from '../components/Item'
import Sort from '../components/Sort'
import SkeletonItem from '../components/SkeletonItem'

const Home = ({ searchValue, setSearchValue }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortItems, setSortItems] = useState({
    name: 'популярністю',
    sort: 'rating',
  })
  const [activeFilter, setActiveFilter] = useState(0)

  const collectionRef = collection(database, 'items')

  useEffect(() => {
    setIsLoading(true)
    const q =
      activeFilter === 0
        ? query(collectionRef, orderBy(sortItems.sort), limit(5))
        : query(
            collectionRef,
            where('category', '==', activeFilter),
            orderBy(sortItems.sort),
            limit(5)
          )

    getDocs(q).then(res => {
      const data = res.docs.map(doc => doc.data())
      setItems(data)
      setIsLoading(false)
    })

    window.scrollTo(0, 0)
  }, [activeFilter, sortItems, searchValue])

  return (
    <>
      <section className="home-1">
        <div className="container home-1__wrapper">
          <div className="home-1__line"></div>
          <div className="home-1__menu">
            <div className="home-1__filter-wrapper">
              <Filter
                filterValue={activeFilter}
                onClickCategory={i => setActiveFilter(i)}
              />
            </div>
            <div className="home-1__sort-wrapper">
              <Sort sortValue={sortItems} onChangeSort={i => setSortItems(i)} />
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
                      return false
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
