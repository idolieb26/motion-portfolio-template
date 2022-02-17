import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='overflow-x-hidden'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
