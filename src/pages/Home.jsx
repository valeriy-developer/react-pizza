import { useEffect, useRef, useState } from 'react'
import Filter from '../components/Filter'
import Item from '../components/Item'
import Sort from '../components/Sort'
import SkeletonItem from '../components/SkeletonItem'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
  setTotalPages,
} from '../redux/slices/filterSlice'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { sortList } from '../components/Sort'

const Home = ({ searchValue }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const { categoryId, sort, currentPage, totalPages } = useSelector(
    state => state.filter
  )
  const sortType = sort.sortProperty
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const limit = 4

  const fetchPizzas = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `http://localhost:5001/api/pizzas?limit=${limit}&page=${currentPage}${
          searchValue ? `&search=${searchValue}` : ''
        }${categoryId > 0 ? `&filter=${categoryId}` : ''}&sort=${sortType}`
      )

      setItems(res.data.pizzas)
      dispatch(setTotalPages(res.data.totalPages))
      setLoading(false)
    } catch (e) {
      setLoading(false)
      alert('Помилка при завантаженні піц')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType,
        categoryId,
        currentPage,
      })

      navigate(`?${queryString}`)
    }

    isMounted.current = true
  }, [categoryId, sortType, currentPage])

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find(obj => obj.sortProperty === params.sortType)
      dispatch(setFilters({ ...params, sort }))
      isSearch.current = true
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

    if (!isSearch.current) {
      fetchPizzas()
    }

    isSearch.current = false
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
              onChangePage={number => dispatch(setCurrentPage(number))}
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
