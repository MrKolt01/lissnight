import './SearchInput.css'
import React, { useState } from 'react'
import { CircularProgress, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'

const SearchInput = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState<string | null>('')

  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      blurOnSelect
      // fullWidth
      size="small"
      loading={isLoading}
      loadingText={'Поиск...'}
      noOptionsText={'ничего не найдено =('}
      options={new Array(20).fill('test').map((el, idx) => String(idx * 100))}
      onChange={(event: any, newValue: string | null) => {
        setInputValue(newValue)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Тык тык..."
          margin="normal"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option, inputValue)
        const parts = parse(option, matches)
        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: !part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        )
      }}
    />
  )
}

export default SearchInput
