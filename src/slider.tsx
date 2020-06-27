import React, { useCallback } from 'react'
import {
  GiAtom,
  GiPlantsAndAnimals,
  GiBananaPeeled,
  GiGreatWarTank,
  GiAirplane,
  GiDreadnought,
} from 'react-icons/gi'
import { Slider as BaseSlider } from 'baseui/slider'
import { IconType } from 'react-icons/lib'
import { useSpring, animated, config } from 'react-spring'

const groups: { Icon: IconType; size: number }[] = [
  { Icon: GiAtom, size: 50 },
  { Icon: GiPlantsAndAnimals, size: 100 },
  { Icon: GiBananaPeeled, size: 150 },
  { Icon: GiGreatWarTank, size: 200 },
  { Icon: GiAirplane, size: 400 },
  { Icon: GiDreadnought, size: 600 },
]

const MIN = 1
const MAX = 1000
const DIV = (MAX - MIN) / groups.length

function pick(val: number) {
  const idx = Math.max(0, Math.min(Math.floor(val / DIV), groups.length - 1))
  return groups[idx]
}

export function Slider() {
  const [value, setValue] = React.useState([1])
  const handleChange = useCallback(
    ({ value }) => value[0] >= MIN && value[0] <= MAX && setValue(value),
    []
  )
  const { Icon, size: inputSize } = pick(value[0])
  const props = useSpring({
    width: inputSize,
    height: inputSize,
    size: inputSize,
    config: config.wobbly,
  })

  return (
    <>
      <BaseSlider min={MIN} max={MAX} value={value} onChange={handleChange} />
      <animated.div style={props}>
        <Icon />
      </animated.div>
    </>
  )
}

export function useSlider() {
  return [<Slider />]
}

export default useSlider
