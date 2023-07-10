import { useEffect, useRef } from 'react'
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
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { sortList } from '../components/Sort'
import { fetchPizzas } from '../redux/slices/pizzaSlice'
import ErrorPage from '../components/ErrorPage'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const { items, status } = useSelector(state => state.pizza)
  const { categoryId, sort, currentPage, totalPages, searchValue } =
    useSelector(state => state.filter)

  const sortType = sort.sortProperty
  const limit = 4

  const getPizzas = async () => {
    const data = await dispatch(
      fetchPizzas({
        limit,
        currentPage,
        searchValue,
        categoryId,
        sortType,
      })
    )

    dispatch(setTotalPages(data.payload.totalPages))
  }

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType,
        categoryId,
        currentPage,
        limit,
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

    getPizzas()

    isSearch.current = false
  }, [categoryId, sortType, searchValue, currentPage])

  const pizzas = items.map((el, id) => {
    return <Item key={id} {...el} />
  })

  const skeletons = [...new Array(10)].map((el, idx) => {
    return <SkeletonItem key={idx} />
  })

  const onClickCategory = id => {
    dispatch(setCategoryId(id))
    dispatch(setCurrentPage(1))
  }

  return (
    <>
      <section className="home-1">
        <div className="container home-1__wrapper">
          <div className="home-1__line"></div>
          <div className="home-1__menu">
            <div className="home-1__filter-wrapper">
              <Filter
                value={categoryId}
                onClickCategory={id => onClickCategory(id)}
              />
            </div>
            <div className="home-1__sort-wrapper">
              <Sort />
            </div>
          </div>
          <div className="home-1__content">
            <h2 className="home-1__title">Усі піци</h2>
            <div className="grid home-1__items-wrapper">
              {status === 'error' ? (
                <ErrorPage />
              ) : status === 'loading' ? (
                skeletons
              ) : (
                pizzas
              )}
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
