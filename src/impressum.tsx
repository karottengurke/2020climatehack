import React from 'react'
import { Button } from 'baseui/button'
import { Modal, ModalHeader, ModalBody } from 'baseui/modal'
import Obfuscate from 'react-obfuscate'
import { StyledLink } from 'baseui/link'
import { useToggle } from './useToggle'

export function useImpressum() {
  const [isShowingImpressum, modifyIsShowingImpressum] = useToggle(false)
  return [
    <Button onClick={modifyIsShowingImpressum.toggle}>Impressum</Button>,
    <Modal
      onClose={modifyIsShowingImpressum.setFalse}
      closeable
      isOpen={isShowingImpressum}
      animate
      autoFocus
    >
      <ModalHeader>Impressum</ModalHeader>
      <ModalBody>
        Verantwortlich nach § 55 Abs.2 RStV
        <br />
        Johannes Goslar, Wendelinsweg 2, 61476 Kronberg
        <br />
        <Obfuscate
          element={StyledLink}
          email="climate@kronberger-spiele.de"
          headers={{
            subject: '2020 climate hack',
            body: 'Shange the world!',
          }}
        />
        <br />
        <br />
        <StyledLink href="https://game-icons.net/">
          "Game Icons"
        </StyledLink> by{' '}
        <StyledLink href="http://lorcblog.blogspot.com/">Lorc</StyledLink>,{' '}
        <StyledLink href="https://delapouite.com/">Delapouite</StyledLink> and{' '}
        <StyledLink href="https://game-icons.net/about.html#authors">
          contributors
        </StyledLink>{' '}
        is licensed under{' '}
        <StyledLink href="https://creativecommons.org/licenses/by/3.0/">
          CC BY 3.0
        </StyledLink>
      </ModalBody>
    </Modal>,
  ] as const
}
