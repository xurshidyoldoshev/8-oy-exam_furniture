import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-[1px] border-t-[#cccbcb]'>
      <div className='container pt-[48px] pb-[38px]'>
        <div className='flex justify-between'>
          <div>
            <h3 className='font-Poppins text-[24px] font-bold leading-[36px] mb-[50px]'>Funiro</h3>
            <div className='flex flex-col'>
              <span className='text-[#9F9F9F] font-Poppins text-[16px] leading-[24px]'>400 University Drive Suite 200 Coral</span>
              <span className='text-[#9F9F9F] font-Poppins text-[16px] leading-[24px]'>Gables,</span>
              <span className='text-[#9F9F9F] font-Poppins text-[16px] leading-[24px]'>FL 33134 USA</span>
            </div>
          </div>
          <div className='flex'>
            <ul className='space-y-[46px] mr-[144px]'>
              <li className='mb-[55px] text-[#9F9F9F] font-Poppins text-[16px] font-medium leading-[24px]'>Links</li>
              <li className='font-Poppins text-[16px] font-semibold leading-[24px] cursor-pointer'>
                <Link href={'/'}>Home</Link>
              </li>
              <li className='font-Poppins text-[16px] font-semibold leading-[24px] cursor-pointer'>
                <Link href={'/shop'}>Shop</Link>
              </li>
              <li className='font-Poppins text-[16px] font-semibold leading-[24px] cursor-pointer'>
                <Link href={'/about'}>About</Link>
              </li>
              <li className='font-Poppins text-[16px] font-semibold leading-[24px] cursor-pointer'>
                <Link href={'/contact'}>Contact</Link>
              </li>
            </ul>
            <ul className='space-y-[46px] mr-[72px]'>
              <li className='mb-[55px] text-[#9F9F9F] font-Poppins text-[16px] font-medium leading-[24px]'>Help</li>
              <li className='font-Poppins text-[16px] font-semibold leading-[24px] cursor-pointer'>Payment Options</li>
              <li className='font-Poppins text-[16px] font-semibold leading-[24px] cursor-pointer'>Returns</li>
              <li className='font-Poppins text-[16px] font-semibold leading-[24px] cursor-pointer'>Privacy Policies</li>
            </ul>
            <ul>
              <li className='mb-[53px] text-[#9F9F9F] font-Poppins text-[16px] font-medium leading-[24px]'>Newsletter</li>
              <li className='flex gap-3'>
                <input
                  type="text"
                  placeholder='Enter Your Email Address'
                  className='py-[3px] pr-[27px] pl-[3px] placeholder:text-[#9F9F9F] font-Poppins text-[14px] leading-[21px] outline-none border-b-[1px] border-b-[#000]'
                />
                <button className='custom-btn btn-14 font-Poppins text-[14px] font-medium leading-[21px] p-[3px] border-b-black border-b-[1px] hover:text-white'>SUBSCRIBE</button>
              </li>
            </ul>
          </div>
        </div>
        <div className='h-[1px] bg-[#D9D9D9] mb-[35.5px] mt-[47.5px]'></div>
        <div>
          <p className='text-black font-Poppins text-[16px] leading-[24px]'>2023 furino. All rights reverved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer