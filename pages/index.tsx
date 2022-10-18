import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import { CardData } from '../Models/CardData'
import { ExploreData } from '../Models/ExploreData'

interface Props {
  exploreData: ExploreData[]
  cardsData: CardData[]
}

const Home = ({ exploreData, cardsData }: Props) => {
  return (
    <div>
      <Head>
      <title>Airbnb clone</title>
      </Head>
      <Header placeholder='Start your search' />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cold-4'>
            {exploreData?.map((item, index) => (
              <SmallCard 
                key={index}
                img={item.img} 
                location={item.location} 
                distance={item.distance}
              />
            ))}
          </div> 
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((item, index) => (
              <MediumCard 
                key={index} 
                img={item.img} 
                title={item.title}/>
            ))}
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj' 
          title='The Greatest Outdoor' 
          description='Wishlists curated by Airbnb.' 
          buttonText='Get Inspired'
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = new Promise<ExploreData>((resolve) => {
    const exploreData = 
    `[{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},
    {"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},
    {"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},
    {"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},
    {"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}]`
    resolve(JSON.parse(exploreData))
  });

  const exploreData = await data;

  const cardsPromise = new Promise<CardData>((resolve) => {
    const cardData = `[
    {"img":"https://links.papareact.com/2io","title":"Outdoor getaways"},
    {"img":"https://links.papareact.com/q7j","title":"Unique stays"},
    {"img":"https://links.papareact.com/s03","title":"Entire homes"},
    {"img":"https://links.papareact.com/8ix","title":"Pet allowed"}
  ]`
  resolve(JSON.parse(cardData))
  });

  const cardsData = await cardsPromise;

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
