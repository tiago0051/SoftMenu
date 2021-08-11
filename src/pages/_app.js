import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import {light} from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
