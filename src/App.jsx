import { BrowserRouter } from 'react-router-dom'
import GlobalRoot from "./Layouts/Routes/GlobalRoot"
import { MantineProvider } from '@mantine/core'

export default () => {

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyle
      theme={{
        headings: {
          fontFamily: 'Oswald'
        },
        fontFamily: 'Open Sans, Overpass',
      }}
    >
      <BrowserRouter>
        <GlobalRoot/>
      </BrowserRouter>
    </MantineProvider>
  )
}