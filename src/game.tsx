import React from 'react'
import { Modal } from 'baseui/modal'
import { styled } from 'baseui'

const Frame = styled('iframe', {
  border: 0,
  width: '100%',
  height: '400px',
})

export const Game: React.FC<{ isOpen?: boolean; onClose?: () => void }> = (
  props
) => {
  return (
    <Modal isOpen={props.isOpen}>
      <Frame
        title="game"
        src="https://karottengurke.github.io/feuer/?nofooter=1&embed=1"
      />
    </Modal>
  )
}
