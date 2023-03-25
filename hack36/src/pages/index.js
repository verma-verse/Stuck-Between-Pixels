import Head from "next/head"
<<<<<<< HEAD
import MetaMask from './MetaMask'
=======
import Login from "../pages/auth/login"
>>>>>>> 13534db20a67a947464c93c867afdb9e47232c56

export default function Home() {
	
	return (
		<>
			<Head>
				<title>Homepage</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="py-1 text-white bg-gray-900">
				<div className="text-2xl font-bold text-center"></div>
				<div className="grid h-screen bg-blue-500 place-items-center">
				<MetaMask/>
				
</div>
			</main>
		</>
	)
}
