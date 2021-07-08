import { AppProps } from 'next/app'

import { Layout } from 'containers/templates/Layout'
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
