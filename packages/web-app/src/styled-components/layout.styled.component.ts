import styled, { keyframes } from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
  padding-right: 20px;
  border-radius: 4px;
  max-width: 1440px;
  padding: 4rem;
`

export const MainContainer = styled.div`
  background-color: #f5f6f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AppContainer = styled.div`
  justify-content: center;
  background-color: #f5f6f6;
  display: flex;
`

const logosSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${logosSpin} infinite 20s linear;
  }
`
