import { useCallback, useContext, useRef, useState } from 'react'
import IconSearch from './icons/IconSearch'
import IconSearchClear from './icons/IconSearchClear'
import { SearchContext } from '../App'
import debounce from 'lodash.debounce'

const SearchInput = () => {
  const [value, setValue] = useState('')
  const { setInputValue } = useContext(SearchContext)
  const inputRef = useRef()

  const updateSearchValue = useCallback(
    debounce(str => {
      setInputValue(str)
    }, 600),
    []
  )

  const onCloseInput = () => {
    setInputValue('')
    setValue('')
    inputRef.current.focus()
  }

  const onChangeInput = e => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className="input-wrapper">
      <div className="input__search-icon">
        <IconSearch />
      </div>
      <input
        ref={inputRef}
        value={value}
        onInput={onChangeInput}
        type="text"
        className="input"
        placeholder="Пошук піци..."
      />
      {value && (
        <div onClick={onCloseInput} className="input__close-icon">
          <IconSearchClear />
        </div>
      )}
    </div>
  )
}

export default SearchInput
