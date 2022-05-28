import { Avatar, Grid, Paper, TextField, FormControlLabel, Button, Checkbox, Typography, Link, InputAdornment } from '@mui/material'
import { MailOutlined } from '@mui/icons-material'
import { MainContainer } from '@/styled-components'
import logo from '@/assets/logo-256.png'
import { PasswordField } from '@/components'
import { useYupValidationResolver } from '@/hooks'
import { useAppDispatch, useAppSelector, useLoginMutation } from '@/redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useLocation, useNavigate } from 'react-router-dom'

interface InputTypes {
  email: string
  password: string
}

const Login = () => {
  const user = useAppSelector((state) => state.auth.user)
  const location = useLocation()
  const navigation = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required()
      .email('Must be email'),
    password: yup
      .string()
      .required()
  })
  const resolver = useYupValidationResolver(validationSchema)
  const { handleSubmit, register, formState: { errors } } = useForm<InputTypes>({ resolver })
  const dispatch = useAppDispatch()
  const handleClick = async (data: InputTypes) => {
    await login(data).unwrap()
    if ((location?.state as any)?.from) { navigation((location?.state as any)?.from) }
  }

  return (
    <MainContainer>
      <Paper elevation={1} sx={{ p: 2, width: 460 }}>
        <Grid container direction='column' sx={{ alignItems: 'center' }}>
          <Avatar alt='Greenit' src={logo} sx={{ width: 56, height: 56, m: 3 }} />
        </Grid>
        <form onSubmit={handleSubmit(handleClick)}>
          <TextField
            margin='normal' label='Email' placeholder='Enter email' autoComplete='email' fullWidth required
            InputProps={{
              endAdornment: <InputAdornment position='end'> <MailOutlined /></InputAdornment>
            }}
            {...register('email' as never)}
            error={Boolean(errors.email)}
            helperText={((errors?.email) != null) ? errors.email.message : null}
          />
          <PasswordField
            margin='normal' label='Password' placeholder='Enter password' type='password' autoComplete='new-password'
            {...register('password' as never)}
            error={Boolean(errors.password)}
            helperText={((errors?.password) != null) ? errors.password.message : null}
            fullWidth required
          />

          <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={
                <Checkbox
                  name='checkedB'
                  color='primary'
                />
              }
              label='Remember me'
            />
            <Typography>
              <Link href='/forgot-password'>
                Forgot password?
              </Link>
            </Typography>
          </Grid>

          <Button
            sx={{ my: 3 }} type='submit' variant='contained' size='large'
            fullWidth
          >
            Sign in
          </Button>
        </form>

        <Typography> Do you have an account?
          <Link href='/register'>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </MainContainer>
  )
}

export default Login
