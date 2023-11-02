import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base'>
      <Layout className='flex items-center justify-between py-5 cursor-pointer lg:flex-col lg:py-6'>
        <span>  <Link href="https://www.linkedin.com/in/indula-perera/" className='underline underline-offset-2' target={"_blank"}> Indula Perera </Link> &copy;Copyright {new Date().getFullYear()}</span>
      
      </Layout>
    </footer>
  )
}

export default Footer
