import { useContext, useRef } from 'react'
import IconSearch from './icons/IconSearch'
import IconSearchClear from './icons/IconSearchClear'
import { SearchContext } from '../App'

const SearchInput = () => {
  const { inputValue, setInputValue } = useContext(SearchContext)

  const inputRef = useRef()

  const onCloseInput = () => {
    setInputValue('')
    inputRef.current.focus()
  }

  const onChangeInput = e => {
    setInputValue(e.target.value)
  }

  return (
    <div className="input-wrapper">
      <div className="input__search-icon">
        <IconSearch />
      </div>
      <input
        ref={inputRef}
        value={inputValue}
        onInput={onChangeInput}
        type="text"
        className="input"
        placeholder="Пошук піци..."
      />
      {inputValue && (
        <div onClick={onCloseInput} className="input__close-icon">
          <IconSearchClear />
        </div>
      )}
    </div>
  )
}

export default SearchInput
