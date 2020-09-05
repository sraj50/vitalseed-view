import '../styles/popup.css'
import "../styles/index.css"
import "../styles/layout.css"
import "../styles/Navigation.css"
import Layout from './components/layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
