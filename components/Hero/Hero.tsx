import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton'

function Hero() {
    return (
        <div className='HeroBg'>
            <div className='container pt-[153px] pb-[112px] flex items-center justify-end'>
                <div className='w-[643px] pt-[62px] pb-[37px] pl-[39px] pr-[43px] bg-[#FFF3E3] rounded-[10px]'>
                    <span className='text-[#333333] font-Poppins mb-[4px] text-[16px] font-semibold leading-[24px]'>New Arrival</span>
                    <h2 className='w-[456px] font-Poppins text-[52px] font-bold leading-[65px] text-[#B88E2F] mb-[17px]'>Discover Our New Collection</h2>
                    <p className='text-[18px] font-Poppins font-medium leading-[24px] text-[#333333] mb-[46px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <CustomButton title='BUY NOW' btnPaddingY={25} btnWidth={222} />
                </div>
            </div>
        </div>
    )
}

export default Hero