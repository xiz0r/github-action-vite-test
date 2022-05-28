import React from 'react'
import { Box, CssBaseline, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

interface Props {
  children: React.ReactNode
}

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

function GContainer ({ children }: Props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component='main' disableGutters={false}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default GContainer
