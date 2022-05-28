import { useDispatch } from 'react-redux'
import { amountAdded, useAppDispatch, useAppSelector, useGetUserQuery } from '@/redux'
import logo from '@/assets/logo.svg'
import { Logo, MainContainer } from '@/styled-components'
import { useAsync, useFetchAndLoad } from '@/hooks'
import { useState } from 'react'
import { getUsers } from '@/services'
import { User } from '@/models'

const UserComponent = () => {
  const email = useAppSelector((state) => state.auth.user?.email)
  const { data, isLoading } = useGetUserQuery(email)

  return (
    <div>
      {isLoading
        ? 'LOADING'
        : (<div>
          {JSON.stringify(data)}
        </div>)}
    </div>
  )
}

export const Home = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const handleClick = async () => {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(5))
  }

  return (
    <MainContainer>
      <Logo src={logo} alt='logo' />
      <p>Hello Vite + React!</p>
      <p>
        <button type='button' onClick={handleClick}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        {' | '}
        <a
          className='App-link'
          href='https://vitejs.dev/guide/features.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Vite Docs
        </a>
      </p>

      <UserComponent />
    </MainContainer>
  )
}

export default Home
