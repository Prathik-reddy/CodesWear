import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodesWear.com - Wear the code</title>
        <meta name="description" content="CodesWear.com - Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-4 ">This is me</div>
      <div className="mx-4 bg-blue-300">this is u</div>
      <div className="bg-green-500">this is a good news</div>
    </div>
  )
}
