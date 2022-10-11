import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import { Places } from '../Models/Places'

interface Props {
    places: Places[] 
}

const Search = ({ places }: Props) => {
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;

    if (!location || !startDate || !endDate || !numberOfGuests) {
        router.push('/')
    }

    return (
        <div>
            <Header placeholder = {`${location} | ${startDate} - ${endDate} | ${numberOfGuests}`}/>

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>
                        300+ Stays for - {startDate} - {endDate} - for {numberOfGuests} guests
                    </p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 
                    whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {places.map((item, index) => (
                            <InfoCard 
                                key={index}
                                img={item.img}
                                price={item.price}
                                location={item.location}
                                description={item.description}
                                title={item.title}
                                star={item.star}
                                total={item.total} 
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {
     const places = await fetch('https://www.jsonkeeper.com/b/5NPS')
     .then(res => res.json())

    return {
        props: {
            places
        }
    }
}

export default Search