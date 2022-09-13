import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Feed from '../components/feed'
import Widgets from '../components/widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import React from 'react'
import { GetServerSideProps } from 'next'
import toast, { Toaster } from 'react-hot-toast';

interface Props{
  tweets: Tweet[]
}

const Home = ({tweets} : Props) => {

  console.log(tweets)
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Gwitter</title>
      </Head>
      <Toaster />

      <main className="grid grid-cols-9">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed tweets={tweets}/>

        {/* Widgets */}
        <Widgets />
      </main>
      
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets(); 

  return {
    props: {
      tweets,

    }
  }
}
