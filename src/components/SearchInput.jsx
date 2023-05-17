import { useCallback, useRef, useState } from 'react'
import IconSearch from './icons/IconSearch'
import IconSearchClear from './icons/IconSearchClear'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../redux/slices/filterSlice'

const SearchInput = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const updateSearchValue = useCallback(
    debounce(str => {
      dispatch(setSearchValue(str))
    }, 600),
    []
  )

  const onCloseInput = () => {
    dispatch(setSearchValue(''))
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
