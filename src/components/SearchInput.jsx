import IconSearch from './icons/IconSearch'
import IconSearchClear from './icons/IconSearchClear'

const SearchInput = () => {
  return (
    <div className="input-wrapper">
      <IconSearch />
      <input type="text" className="input" placeholder="Назва піци..." />
      <IconSearchClear />
    </div>
  )
}

export default SearchInput
