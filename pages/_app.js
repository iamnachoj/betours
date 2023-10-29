import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        {/*a potential navigation bar*/}
        <Component {...pageProps} />
        {/*a potential footer*/}
      </>
  )
}

export default MyApp
