import React, { useCallback, useState, useLayoutEffect } from 'react'
import './App.css'

import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, DarkTheme, BaseProvider, styled } from 'baseui'
import { Input } from 'baseui/input'
import useShaked from './useShaked'
import useSlider from './slider'
import { ButtonGroup } from 'baseui/button-group'
import { useImpressum } from './impressum'
import { useToggle } from './useToggle'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Button } from 'baseui/button'
import { GiLightBulb, GiTreasureMap } from 'react-icons/gi'
import { Textarea } from 'baseui/textarea'
import Map from './map'
import { IconContext } from './icons'

const engine = new Styletron()

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'column',
  maxWidth: '640px',
  margin: 'auto',
})

export function App() {
  const [isDarkTheme, modifyIsDarkTheme] = useToggle()

  useLayoutEffect(() => {
    if (!isDarkTheme)
      document.body.style.transition = 'background-color 500ms linear 0s'
    document.body.style.backgroundColor = isDarkTheme ? 'black' : 'white'
  }, [isDarkTheme])

  const shakeHandler = useCallback(() => {
    console.log('shaked')
  }, [])

  const [wasShaked, ManualShaker] = useShaked(shakeHandler)

  const [whatHappened, setWhatHappened] = useState('')

  const handleWhatHappened = useCallback(
    (e: React.FormEvent<HTMLInputElement>) =>
      setWhatHappened(e.currentTarget.value),
    []
  )

  const [whatToDo, setWhatToDo] = useState('')

  const handleWhatToDo = useCallback(
    (e: React.FormEvent<HTMLTextAreaElement>) =>
      setWhatToDo(e.currentTarget.value),
    []
  )

  const [isShowingMap, modifyIsShowingMap] = useToggle(true)

  const onDismissMap = useCallback(() => {
    modifyIsShowingMap.setFalse()
  }, [modifyIsShowingMap])

  const [Slider] = useSlider(isDarkTheme)
  const [ImpressumButton, ImpressumModal] = useImpressum()

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        <IconContext isDarkTheme={isDarkTheme} fullSize={false}>
          <Centered className="centred">
            <Map isShowing={isShowingMap} onClose={onDismissMap} />
            <ButtonGroup
              overrides={{
                Root: {
                  style: {},
                },
              }}
            >
              {ManualShaker}
              <Button onClick={modifyIsShowingMap.setTrue}>
                <GiTreasureMap />
              </Button>
              {ImpressumButton}
              <Button onClick={modifyIsDarkTheme.toggle}>
                <GiLightBulb />
              </Button>
            </ButtonGroup>
            <HeadingLevel>
              <Heading>How bad do you feel?</Heading>
              {Slider}
            </HeadingLevel>
            <HeadingLevel>
              <Heading>What did you do?</Heading>
              <Input
                value={whatHappened}
                onChange={handleWhatHappened}
                placeholder="?"
              />
            </HeadingLevel>
            <HeadingLevel>
              <Heading>What do you want to do?</Heading>
              <Textarea value={whatToDo} onChange={handleWhatToDo} />
            </HeadingLevel>
            <HeadingLevel>
              {wasShaked && <Heading>yeah baby!</Heading>}
            </HeadingLevel>
            {ImpressumModal}
          </Centered>
        </IconContext>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
