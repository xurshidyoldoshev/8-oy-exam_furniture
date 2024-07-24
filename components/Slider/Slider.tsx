import React from 'react'
import Swiper from 'swiper'
import { CustomSwiper } from '../CustomSwiper/CustomSwiper'
import { CustomButton } from '../CustomButton/CustomButton'

const Slider = () => {
    return (
        <div className='bg-[#FCF8F3]'>
            <div className='container py-[44px] flex items-center justify-between'>
                <div className=''>
                    <h2 className='text-[#3A3A3A] w-[422px] font-Poppins text-[40px] font-bold leading-[120%] mb-[7px]'>
                        50+ Beautiful rooms
                        inspiration
                    </h2>
                    <p className='text-[#616161] w-[368px] font-Poppins text-[16px] font-medium leading-[150%] mb-[25px]'>
                        Our designer already made a lot of beautiful prototipe of rooms that inspire you
                    </p>
                    <CustomButton title='Explore More' btnPaddingY={12} btnWidth={176} />
                </div>
                <CustomSwiper />
            </div>
        </div>
    )
}

export default Slider