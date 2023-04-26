import { useRef } from 'react'
import IconSearch from './icons/IconSearch'
import IconSearchClear from './icons/IconSearchClear'

const SearchInput = ({ searchValue, setSearchValue }) => {
  const inputRef = useRef()

  const onCloseInput = () => {
    setSearchValue('')
    inputRef.current.focus()
  }

  const onChangeInput = e => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="input-wrapper">
      <div className="input__search-icon">
        <IconSearch />
      </div>
      <input
        ref={inputRef}
        value={searchValue}
        onInput={onChangeInput}
        type="text"
        className="input"
        placeholder="Пошук піци..."
      />
      {searchValue && (
        <div onClick={onCloseInput} className="input__close-icon">
          <IconSearchClear />
        </div>
      )}
    </div>
  )
}

export default SearchInput
