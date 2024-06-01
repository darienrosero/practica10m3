import React from 'react'
import logo from '../assets/images/logo.svg'
import Nav from './Nav'

const Header = () => {
    return (
        <>
            <header className=' mx-auto  '>
                <div className=' flex  justify-center items-center '>
                    <img src={logo} alt="" className='w-[170px] h-8 justify-center ' />
                    <Nav />
                </div>
            </header>
        </>
    )
}

export default Header
