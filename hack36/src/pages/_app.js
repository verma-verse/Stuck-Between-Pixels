import Layout from "@/components/Layout"
import "@/styles/globals.css"
import MetaMask from './MetaMask'



export default function App({ Component, pageProps}) {
	return (
     
		<Layout>
	  {/* <MetaMask /> */}
      <Component {...pageProps} />	
		</Layout>
	)
}
