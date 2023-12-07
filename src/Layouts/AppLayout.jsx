import React from 'react'
import { AppShell, Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

export default () => {

  return (
    <AppShell
      padding={0}
      // navbar={<Navigation/>}
      // header={<Header/>}
      // footer={<Footer></Footer>}
    >
      <Container>
        <Outlet />
      </Container>
    </AppShell>
  )
}
