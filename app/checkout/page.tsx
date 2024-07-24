"use client"
import { ShopRightIcon } from '@/assets/icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactBgIcon from '../../public/ContactBgIcon.png'
import ShopAdvantages from '@/components/ShopAdvantages/ShopAdvantages'
import { useSelector } from 'react-redux'
import { RootState } from '../GlobalRedux/store'
import toast, { Toaster } from 'react-hot-toast'

const page = () => {
  const cart = useSelector((state: RootState) => state.carts.carts)
  const checkedCart = () => {
    toast.success('Checked !')
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='ShopPageBg'>
        <div className='container pt-[61px] pb-[97px] flex flex-col items-center justify-center'>
          <Image src={ContactBgIcon} alt='bg icon' width={77} height={77} priority={true} />
          <h2 className='font-Poppins text-[48px] font-medium leading-[72px] mb-[1px]'>Checkout</h2>
          <div className='flex items-center gap-2'>
            <Link href={'/'} className='text-[16px] font-Poppins font-semibold'>Home</Link>
            <ShopRightIcon />
            <Link href={'/checkout'} className='font-Poppins text-[16px]'>Checkout</Link>
          </div>
        </div>
      </div>
      <div className='container pb-[52px] pt-[63px]'>
        <div className="flex justify-between">
          <div className="w-[608px] pt-[35px] pb-[71px] px-[75px]">
            <h2 className="text-[36px] font-semibold font-Poppins leading-[54px] mb-[36px]">Billing details</h2>
            <form className="space-y-[36px]">
              <div className='flex justify-between'>
                <div>
                  <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="first-name">First Name</label>
                  <input className="w-[211px] rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="text" id="first-name" />
                </div>
                <div>
                  <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="last-name">Last Name</label>
                  <input className="w-[211px] rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="text" id="last-name" />
                </div>
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="company">Company Name (Optional)</label>
                <input className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="text" id="company" />
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="country">Country / Region</label>
                <select className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2 outline-none" id="country">
                  <option value="sri-lanka">Sri Lanka</option>
                </select>
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="address">Street Address</label>
                <input className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="text" id="address" placeholder="Street Address" />
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="city">Town / City</label>
                <input className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="text" id="city" placeholder="Town / City" />
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="province">Province</label>
                <select className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" id="province">
                  <option value="western-province">Western Province</option>
                </select>
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="zip">ZIP Code</label>
                <input className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="text" id="zip" placeholder="ZIP Code" />
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="phone">Phone</label>
                <input className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="text" id="phone" placeholder="Phone" />
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="email">Email Address</label>
                <input className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" type="email" id="email" placeholder="Email Address" />
              </div>
              <div>
                <label className="block text-[16px] font-Poppins font-medium mb-[22px]" htmlFor="additional-info">Additional Information</label>
                <textarea className="w-full rounded-[10px] border-[1px] border-[#9F9F9F] py-3 px-2" id="additional-info" placeholder="Additional Information"></textarea>
              </div>
            </form>
          </div>
          <div className="w-[608px] pt-[87px] pb-[86px]">
            {
              cart?.map((item) => (
                <div key={item._id} className='flex justify-between pb-[33px] border-b-[1px] border-b-[#D9D9D9]'>
                  <div className='flex flex-col'>
                    <h3 className='font-Poppins text-[24px] font-medium leading-[36p] mb-[14px]'>Product</h3>
                    <span className='font-Poppins text-[16px] text-[#9F9F9F] mb-[22px]'>{item.title} <span className='text-black'>x {item.count}</span></span>
                    <span className='font-Poppins text-[16px] mb-[22px]'>Subtotal</span>
                    <span className='font-Poppins text-[16px]'>Total</span>
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='font-Poppins text-[24px] font-medium leading-[36p] mb-[14px]'>Subtotal</h3>
                    <span className='font-Poppins text-[16px] mb-[22px]'>Rs. {item.count * item.price}</span>
                    <span className='font-Poppins text-[16px] mb-[22px]'>Rs. {item.count * item.price}</span>
                    <span className='font-Poppins text-[24px] font-bold leading-[36px] text-[#B88E2F]'>Rs. 250,000.00</span>
                  </div>
                </div>
              ))
            }
            <div className="mt-[23px]">
              <div className='flex gap-[5px] items-center mb-[11px]'>
                <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
                <label className="font-Poppins text-[16px]" htmlFor="bank-transfer">Direct Bank Transfer</label>
              </div>
              <p className='font-Poppins text-[16px] mb-[25px]'>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have cleared in our account.
              </p>
              <div className='flex gap-[5px] items-center mb-[11px]'>
                <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
                <label className="font-Poppins text-[16px]" htmlFor="bank-transfer">Direct Bank Transfer</label>
              </div>
              <div className='flex gap-[5px] items-center mb-[11px]'>
                <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
                <label className="font-Poppins text-[16px]" htmlFor="bank-transfer">Direct Bank Transfer</label>
              </div>
              <p className="font-Poppins text-[16px] mb-[39px]">
                Your personal undefined will be used to support your experience throughout the website,
                to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span>
              </p>
            </div>
            <button onClick={checkedCart} className="rounded-[15px] py-[17px] w-[318px] border-[2px] border-black text-[20px] leading-[30px]">Place order</button>
          </div>
        </div>
      </div>
      <ShopAdvantages />
    </>
  )
}

export default page