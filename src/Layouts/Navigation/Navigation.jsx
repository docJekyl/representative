import { Button, Navbar, Stack } from '@mantine/core'
import React from 'react'

export default () => {

  return (
    <Navbar
      width={{ sm: 200, lg: 250 }}  
    >
      <Navbar.Section grow>
        <Stack p='xl' spacing={20}>
          Section 1 nav
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack p='xl'>
          <Button onClick={() => console.log('pressed Ex button')} style={{backgroundColor: '#102e58'}}>Ex button</Button>
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}
