import React from 'react'
import { Avatar, Grid, Paper, TextField, Button, InputAdornment } from '@mui/material'
import { MainContainer } from '@/styled-components'
import logo from '@/assets/logo-256.png'
import { PasswordField } from '@/components'
import { MailOutlined } from '@mui/icons-material'
const Login = () => {
  return (
    <MainContainer>
      <Paper elevation={1} sx={{ p: 2, width: 460 }}>
        <Grid container sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Avatar alt='Greenit' src={logo} sx={{ width: 56, height: 56, m: 3 }} />
        </Grid>
        <TextField margin='normal' label='Name' placeholder='Enter name' fullWidth required />
        <TextField
          margin='normal' label='Email' placeholder='Enter email' fullWidth required
          InputProps={{
            endAdornment: <InputAdornment position='end'> <MailOutlined /></InputAdornment>
          }}
        />
        <PasswordField margin='normal' label='Password' placeholder='Enter password' type='password' fullWidth required />
        <PasswordField margin='normal' label='Confirm Password' placeholder='Enter password' type='password' fullWidth required />
        <Button sx={{ my: 3 }} type='submit' variant='contained' size='large' fullWidth>Sign Up</Button>
      </Paper>
    </MainContainer>
  )
}

export default Login
