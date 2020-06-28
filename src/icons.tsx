import React from 'react'
import { IconContext as RIIC } from 'react-icons'

export const IconContext: React.FC<{
  isDarkTheme?: boolean
  fullSize: boolean
}> = (props) => {
  const { fullSize = false, children = undefined, isDarkTheme = true } = props
  return (
    <RIIC.Provider
      value={{
        color: isDarkTheme ? 'white' : 'black',
        ...(fullSize
          ? {
              style: {
                width: '100%',
                height: '100%',
              },
            }
          : {}),
      }}
    >
      {children}
    </RIIC.Provider>
  )
}
