'use client'

import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export { useColorMode, useColorModeValue } from '@chakra-ui/react'

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'light' ? <LuSun /> : <LuMoon />
}

export const ColorModeButton = React.forwardRef(
function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
    <IconButton
        onClick={toggleColorMode}
        variant='ghost'
        aria-label='Toggle color mode'
        size='sm'
        ref={ref}
        {...props}
        icon={<ColorModeIcon />}
        sx={{
        '& > svg': {
            width: '1.25rem',
            height: '1.25rem',
        },
        }}
    />
    )
},
)
