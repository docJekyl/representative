import { BrowserRouter } from 'react-router-dom'
import GlobalRoot from "./Layouts/Routes/GlobalRoot"

export default () => {

  return (
    <BrowserRouter>
      <GlobalRoot/>
    </BrowserRouter>
  )
}