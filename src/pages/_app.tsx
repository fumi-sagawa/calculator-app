import { AppProps } from 'next/app'

// import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux'
import { store } from 'stores'
import { Global } from '@emotion/react'
import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
