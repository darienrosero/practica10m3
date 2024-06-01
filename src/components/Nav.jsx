import React from 'react'
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';

import avatar from '../assets/images/image-avatar.png'
import car from '../assets/images/icon-cart.svg'


const Nav = () => {

    const items = [
        {
            label: 'Collections'
        },
        {
            label: 'Men'
        },
        {
            label: 'Women'
        },
        {
            label: 'About'
        },
        {
            label: 'Contact'
        }
    ];

    const end = (
        <div className="flex my-1 gap-8 place-items-center">
            <Avatar image={car} size="" shape="square" className='cursor-pointer' />
            <Avatar image={avatar} size="xlarge" shape="circle" className='cursor-pointer ' />
        </div>
    );

    return (
        <>

            <Menubar model={items} end={end} className='bg-White font-font-kumbh w-[900px]'/>

        </>
    )
}

export default Nav
