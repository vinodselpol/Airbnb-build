
import Head from 'next/head'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

import { Exploredata, CardData } from '../typings'


export default function Home({exploreData, cardsData}: {exploreData: Exploredata[], cardsData: CardData[]}) {
  
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      {/* Header */}
      <Header />

      { /* Banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='mt-5'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>


          {/* Pull some data from server - API endpoints */}

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map((item: Exploredata)=>(
            
            <SmallCard  key={item.img} img={item.img} distance={item.distance} location={item.location} />
          ))}

          </div>

          
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          {/* Pull some data from server - API endpoints */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide  p-3 -ml-3 '>
          {cardsData?.map((item:CardData)=>(
            <MediumCard key={item.img} img={item.img} title={item.title}/>
          ))}

          </div>
          
        </section>
        <LargeCard
        img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
        title=" The Great Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired"/>

   
      </main>

      <Footer />

      

      
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res)=> res.json());

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res)=> res.json())
// https://www.jsonkeeper.com/b/4G1G


  return {
    props:{
      exploreData,
      cardsData
    }
  }
}
