import React from 'react'
import './App.css'

import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
import { StatefulInput } from 'baseui/input'
const engine = new Styletron()

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'column',
})

export function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <h1>Shange the World!</h1>
          <StatefulInput />
          <h2>yeah!</h2>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
