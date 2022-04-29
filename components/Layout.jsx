import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children,title}){

    return (
        <div className='bg-gray-50'>
        <Head>
            <title>{title}</title>
        </Head>
        <Header />
            {children}

        <Footer/>
        </div>
    )
}