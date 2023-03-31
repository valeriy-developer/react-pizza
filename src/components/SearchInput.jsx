import IconSearch from './icons/IconSearch'
import IconSearchClear from './icons/IconSearchClear'

const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <div className="input-wrapper">
      <div className="input__search-icon">
        <IconSearch />
      </div>
      <input
        value={searchValue}
        onInput={e => setSearchValue(e.target.value)}
        type="text"
        className="input"
        placeholder="Пошук піци..."
      />
      {searchValue && (
        <div onClick={() => setSearchValue('')} className="input__close-icon">
          <IconSearchClear />
        </div>
      )}
    </div>
  )
}

export default SearchInput
