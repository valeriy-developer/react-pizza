import { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Item from '../components/Item'
import Sort from '../components/Sort'
import SkeletonItem from '../components/SkeletonItem'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

const Home = ({ searchValue }) => {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector(state => state.filter)
  const sortType = sort.sortProperty

  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const limit = 4

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:5001/api/pizzas?limit=${limit}&page=${currentPage}${
        searchValue ? `&search=${searchValue}` : ''
      }${categoryId > 0 ? `&filter=${categoryId}` : ''}&sort=${sortType}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(data.pizzas)
        setTotalPages(data.totalPages)
        setLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  return (
    <>
      <section className="home-1">
        <div className="container home-1__wrapper">
          <div className="home-1__line"></div>
          <div className="home-1__menu">
            <div className="home-1__filter-wrapper">
              <Filter
                value={categoryId}
                onClickCategory={id => dispatch(setCategoryId(id))}
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
                ? [...new Array(10)].map((el, idx) => {
                    return <SkeletonItem key={idx} />
                  })
                : items.map((el, id) => {
                    return <Item key={id} {...el} />
                  })}
            </div>
            <Pagination
              onChangePage={number => setCurrentPage(number)}
              totalPages={totalPages}
              limit={limit}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
