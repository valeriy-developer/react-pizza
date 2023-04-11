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
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import Filter from '../components/Filter'
import Item from '../components/Item'
import Sort from '../components/Sort'
import SkeletonItem from '../components/SkeletonItem'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveFilter, setFitlers } from '../redux/slices/filterSlice.js'
import { sortList } from '../components/Sort'

const Home = ({ searchValue }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { activeFilter, sort } = useSelector(state => state.filter)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const collectionRef = collection(database, 'items')

  const onClickFilter = id => {
    dispatch(setActiveFilter(id))
  }

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = sortList.find(
        obj => obj.sortProperty === params.sortProperty
      )

      dispatch(setFitlers({ ...params, sort }))
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const q =
      activeFilter === 0
        ? query(collectionRef, orderBy(sort.sortProperty), limit(5))
        : query(
            collectionRef,
            where('category', '==', activeFilter),
            orderBy(sort.sortProperty),
            // where('title', '>=', 'по-азіатськи'),
            limit(5)
          )

    getDocs(q).then(res => {
      const data = res.docs.map(doc => doc.data())
      setItems(data)
      setIsLoading(false)
    })

    window.scrollTo(0, 0)
  }, [activeFilter, sort, searchValue])

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      activeFilter,
    })

    navigate(`?${queryString}`)
  }, [activeFilter, sort])

  return (
    <>
      <section className="home-1">
        <div className="container home-1__wrapper">
          <div className="home-1__line"></div>
          <div className="home-1__menu">
            <div className="home-1__filter-wrapper">
              <Filter
                filterValue={activeFilter}
                onClickCategory={onClickFilter}
              />
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
