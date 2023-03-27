import { database } from '../scripts/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Item from '../components/Item'
import Sort from '../components/Sort'
import SkeletonItem from '../components/SkeletonItem'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const collectionRef = collection(database, 'items')
    getDocs(collectionRef).then(res => {
      const data = res.docs.map(doc => doc.data())
      setItems(data)
      setIsLoading(false)
    })
  }, [])

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
                : items.map(el => {
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
