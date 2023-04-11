import { useCallback, useRef, useState } from 'react'
import IconSearch from './icons/IconSearch'
import IconSearchClear from './icons/IconSearchClear'
import debounce from 'lodash.debounce'

const SearchInput = ({ setSearchValue }) => {
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const onCloseInput = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(
    debounce(str => {
      setSearchValue(str)
    }, 500),
    []
  )

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
