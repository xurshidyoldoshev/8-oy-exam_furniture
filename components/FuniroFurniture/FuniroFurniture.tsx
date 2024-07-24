import Image from 'next/image'
import React from 'react'

function FuniroFurniture() {
    return (
        <div className='container pb-[50px] pt-[67px] text-center'>
            <h3 className='font-Poppins text-[#616161] text-[20px] font-semibold leading-[150%] mb-[8px]'>Share your setup with</h3>
            <h1 className='text-[#3A3A3A] font-Poppins text-[40px] font-bold leading-[120%]'>#FuniroFurniture</h1>
            <div>
                <Image className='relative top-[-25px]' src={'/FuniroFurnitureBg.png'} alt='Funiro Img' width={1280} height={721}/>
            </div>
        </div>
    )
}

export default FuniroFurniture