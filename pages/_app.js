import Landing from './Landing'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (

    <div className="h-screen overflow-y-scroll ">
        

    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
