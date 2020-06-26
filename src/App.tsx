import React, { useCallback } from 'react'
import './App.css'

import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
import { StatefulInput } from 'baseui/input'
import useShaked from './useShaked'

const engine = new Styletron()

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'column',
})

export function App() {
  const shakeHandler = useCallback(() => {
    console.log('shaked')
  }, [])

  const [wasShaked] = useShaked(shakeHandler)

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <h1>Shange the World!</h1>
          <StatefulInput />
          {wasShaked && <h1>yeah baby!</h1>}
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
