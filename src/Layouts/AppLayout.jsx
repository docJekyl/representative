import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'

export default () => {

  return (
    <AppShell
      padding={0}
      navbar={<Navigation/>}
      header={<Header/>}
    >
      <Outlet />
    </AppShell>
  )
}
