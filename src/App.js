import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import ScartterChart from './ScartterChart'
import ScartterPlottyChart from './ScartterPlottyChart'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ScartterChart />
        <ScartterPlottyChart />
      </Container>
    </>
  )
}

export default App
