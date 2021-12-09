import '@/styles/notion.css'
import 'rc-dropdown/assets/index.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import 'animate.css'
import { GlobalContextProvider } from '@/lib/global'

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalContextProvider>
        <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp
