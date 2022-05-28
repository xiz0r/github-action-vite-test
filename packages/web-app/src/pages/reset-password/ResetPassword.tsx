import React from 'react'
import { Avatar, Grid, Paper, TextField, Button, InputAdornment, Typography, Link } from '@mui/material'
import { MainContainer } from '@/styled-components'
import logo from '@/assets/logo-256.png'
import { MailOutlined } from '@mui/icons-material'
const ResetPassword = () => {
  return (
    <MainContainer>
      <Paper elevation={1} sx={{ p: 2, width: 460 }}>
        <Grid container sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Avatar alt='Greenit' src={logo} sx={{ width: 56, height: 56, m: 3 }} />
        </Grid>
        <Typography variant='h6'>
          Reset your password
        </Typography>
        <TextField
          margin='normal' label='Email' placeholder='Enter email' fullWidth required
          InputProps={{
            endAdornment: <InputAdornment position='end'> <MailOutlined /></InputAdornment>
          }}
        />
        <Button sx={{ my: 3 }} type='submit' variant='contained' size='large' fullWidth>Send Reset Password</Button>
        <Typography> <Link href='/login'>
          Go back to login
        </Link>
        </Typography>
      </Paper>
    </MainContainer>
  )
}

export default ResetPassword
