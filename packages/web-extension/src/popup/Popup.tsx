import React, { useEffect } from 'react'
import { browser } from 'webextension-polyfill-ts'
import { AppBar, Toolbar, IconButton, Box, Fab, CssBaseline, Container, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import MenuIcon from '@mui/icons-material/Menu'
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import MoreIcon from '@mui/icons-material/MoreVert'
import styled from 'styled-components'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: grey,
    divider: grey[700],
    background: {
      default: grey[900],
      paper: grey[900]
    },
    text: {
      primary: '#fff',
      secondary: grey[500]
    }
  }
})

function Popup () {
  // const [data, setData] = React.useState([])
  // const [isLoading, setIsLoading] = React.useState(true)

  // useEffect(() => { browser.runtime.sendMessage({ type: 'get-data' }).then(handleResponse, handleError) }, [])

  // function handleResponse(message: any) {
  //   setData(message)
  //   setTimeout(() => setIsLoading(false), 1000) // fake
  // }

  // function handleError(error: any) {
  //   console.log(`Error: ${error}`)
  // }

  // const StyledFab = styled(Fab)({
  //   position: 'absolute',
  //   zIndex: -1,
  //   top: -30,
  //   left: 0,
  //   right: 0,
  //   margin: '0 auto'
  // })

  return <div>laksjdlkfja</div>

  // return (
  //   <ThemeProvider theme={darkTheme}>
  //     <Container component='main' disableGutters={false}>
  //       <CssBaseline />
  //       <Box
  //         sx={{
  //           marginTop: 0,
  //           display: 'flex',
  //           flexDirection: 'column'
  //         }}
  //       >
  //         <Typography component='h1'>
  //           The Rick and Morty
  //         </Typography>
  //       </Box>
  //       <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
  //         <Toolbar>
  //           <IconButton color='inherit' aria-label='open drawer'>
  //             <MenuIcon />
  //           </IconButton>
  //           <StyledFab color='secondary' aria-label='add'>
  //             <AddIcon />
  //           </StyledFab>
  //           <Box sx={{ flexGrow: 1 }} />
  //           <IconButton color='inherit'>
  //             <SearchIcon />
  //           </IconButton>
  //           <IconButton color='inherit'>
  //             <MoreIcon />
  //           </IconButton>
  //         </Toolbar>
  //       </AppBar>
  //     </Container>
  //   </ThemeProvider>
  // )
}

export default Popup
