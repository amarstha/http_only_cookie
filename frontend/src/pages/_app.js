import Head from 'next/head';
import { Provider } from 'react-redux'
import { useStore } from '../store'

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>HTTPOnly Auth</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css' 
          integrity='sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn' 
          crossorigin='anonymous' />
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js' 
          integrity='sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF' 
          crossorigin='anonymous'></script>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;
