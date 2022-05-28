import React from 'react'
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material'

const PasswordField = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div ref={ref}>
      <TextField
        {...{ ...props, type: showPassword ? 'text' : 'password' }} InputProps={{
          endAdornment: <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
            </IconButton>
          </InputAdornment>
        }}
      />
    </div>
  )
})

export default PasswordField
