import app from 'next/app'
import { AuthProvider } from '../contexts/AuthContext';
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import {light} from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={light}>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
