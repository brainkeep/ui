import React from 'react'
import TextField from '@material-ui/core/TextField'
import './InputFiled.css'

const InputField = ({ input, changeInputText, executeCommandBegin, setCommandInvalid, setCommandValid }) => {

  const valid_commands = new Set(['add'])

  const handleInputChange = () => event => {
    if (!input.command_valid) {
      setCommandValid()
      changeInputText(event.target.value)
    }
    else
      changeInputText(event.target.value)
  }

  const handleKeyPress = () => event => {
    if (event.key === 'Enter') {
      if (valid_commands.has(input.input_text)) {
        executeCommandBegin()
      }
      else {
        setCommandInvalid()
      }
    }
  }

  return (
    <div className="InputField">
      <TextField
        id="standard-search"
        type="search"
        margin="normal"
        fullWidth={true}
        autoFocus={true}
        disabled={input.executing}
        error={!input.command_valid}
        onChange={handleInputChange()}
        onKeyPress={handleKeyPress()}
      />
    </div>
  )
}

export default InputField