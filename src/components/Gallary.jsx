import React from 'react'
import { Image } from 'primereact/image';

import img1 from '../assets/images/image-product-1.jpg'
import img2 from '../assets/images/image-product-2.jpg'
import img3 from '../assets/images/image-product-3.jpg'
import img4 from '../assets/images/image-product-4.jpg'

const Gallary = () => {
    return (
        <>
            <section className=' w-[45%] '>
                <div>
                    <Image src={img1} alt="" preview className='rounded-xl cursor-pointer hover:opacity-55' />
                </div>
                <div className='flex justify-between mt-4 '>
                    <Image src={img1} alt="" preview className='w-[70px] h-[70px] cursor-pointer hover:opacity-55 ' />
                    <Image src={img2} alt="" preview className='w-[70px] h-[70px] cursor-pointer hover:opacity-55 ' />
                    <Image src={img3} alt="" preview className='w-[70px] h-[70px] cursor-pointer hover:opacity-55 ' />
                    <Image src={img4} alt="" preview className='w-[70px] h-[70px] cursor-pointer hover:opacity-55 ' />
                </div>
            </section>
        </>
    )
}

export default Gallary
