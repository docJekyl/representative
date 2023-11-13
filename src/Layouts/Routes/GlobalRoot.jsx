import React from 'react'
import AppRoot from './AppRoot'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

export default () => {

  // Handle authentication here
  return (
    <AppRoot />
  )
}
