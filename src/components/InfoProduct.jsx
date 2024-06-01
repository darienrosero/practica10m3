import React from 'react'
import { Button } from 'primereact/button';

const InfoProduct = () => {
    return (
        <>
            <section className=' bg-slate-500 w-[45%] md:w-32 lg:w-48 '>
                <p className='font-font-kumbh text-Darkgrayishblue'>
                    Sneaker Company
                </p>
                <h1 className='font-font-kumbh text-[40px] font-bold  '>
                    Fall Limited Edition Sneakers
                </h1>
                <p className='font-font-kumbh text-Darkgrayishblue' >
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className='flex pt-10 items-center'>
                    <p className='font-font-kumbh font-bold mr-3 text-[20px] '> $125.00 </p>
                    <p className='font-font-kumbh font-bold text- bg-Verydarkblue text-White rounded-md text-[13px] '> 50% </p>
                </div>
                <p className='font-font-kumbh text-Darkgrayishblue text-[12px] line-through '> $250.00 </p>
                <div className='flex justify-between w-[300px] mt-8 '>
                    <div className='flex w-[120px] justify-around bg-[#f4f4fd] rounded-md h-8 '>
                        <Button className='text-[#ff7e22] bg-transparent w-[20px] flex justify-center p-4 '>-</Button>
                        <p className='w-[20px] flex justify-center p-1'>0</p>
                        <Button className='text-[#ff7e22] bg-transparent w-[20px] flex justify-center p-4 '>+</Button>
                    </div>
                    <Button className='flex justify-center bg-[#ff7e22] font-font-kumbh w-[165px] ' >Add to cart </Button>
                </div>
            </section>
        </>
    )
}

export default InfoProduct
