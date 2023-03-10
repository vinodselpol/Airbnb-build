
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'


function Search({searchResults}: any) {

    const router = useRouter()

    const {location, startDate, endDate, noofGuests} = router.query;


    const formattedStartDate = new Date(startDate as string).toLocaleDateString()
    const formattedEndDate = new Date(endDate as string).toLocaleDateString()


    const range =`${formattedStartDate} - ${formattedEndDate}`




    
  return (
    <div >
        
        <Header />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ stays from {range} for {noofGuests} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>

                <div className='flex flex-col'>
                {searchResults.map(({img, location, title, description, star, price, total}: any) =>(
                    <InfoCard 
                    key={img}
                    img={img}
                    location ={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                    />
                ))}


                </div>


                
            </section>
            
        </main>




        <Footer />
    </div>
  )
}

export default Search


export async function getServerSideProps(){
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res)=> res.json())
    return {
        props: {
            searchResults
        }
    }
}


