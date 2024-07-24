"use client"
import { DeleteIcon, ShopRightIcon } from '@/assets/icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactBgIcon from '../../public/ContactBgIcon.png'
import { RootState } from '../GlobalRedux/store'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../GlobalRedux/Features/carts/CartsSlice'
import ShopAdvantages from '@/components/ShopAdvantages/ShopAdvantages'

const page = () => {
  const cart = useSelector((state: RootState) => state.carts.carts)
  const dispatch = useDispatch()
  const handleDeleteCart = (id: string) => {
    dispatch(deleteCart(id));
  }
  return (
    <>
      <div className='ShopPageBg'>
        <div className='container pt-[61px] pb-[97px] flex flex-col items-center justify-center'>
          <Image src={ContactBgIcon} alt='bg icon' width={77} height={77} priority={true} />
          <h2 className='font-Poppins text-[48px] font-medium leading-[72px] mb-[1px]'>Cart</h2>
          <div className='flex items-center gap-2'>
            <Link href={'/'} className='text-[16px] font-Poppins font-semibold'>Home</Link>
            <ShopRightIcon />
            <Link href={'/cart'} className='font-Poppins text-[16px]'>Cart</Link>
          </div>
        </div>
      </div>
      <div className='container pt-[42px] pb-[63px]'>
        <div className='flex justify-between gap-[30px]'>
          <div className='h-[390px] overflow-y-auto'>
            <table className="min-w-[817px] overflow-y-auto text-center border-separate border-spacing-y-[55px]">
              <thead>
                <tr className="bg-[#F9F1E7]">
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Subtotal</th>
                  <th className='px-4 py-2'></th>
                </tr>
              </thead>
              <tbody>
                {
                  cart?.map((item) => (
                    <tr key={item._id}>
                      <td className="px-4 py-2">
                        <Image src={item.image} alt="Product Image" className="w-[105px] h-[105px]" width={105} height={105} />
                      </td>
                      <td className="px-4 py-2">{item.title}</td>
                      <td className="px-4 py-2">Rs. {item.price}</td>
                      <td className="px-4 py-2">{item.count}</td>
                      <td className="px-4 py-2">Rs. {item.price * item.count}</td>
                      <td className='px-4 py-2'>
                        <button onClick={() => handleDeleteCart(item._id)}>
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className='w-[343px] flex flex-col items-center pt-[15px] pb-[80px] bg-[#F9F1E7]'>
            <h3 className='font-Poppins text-[32px] font-semibold leading-[48px] mb-[61px]'>Cart Totals</h3>
            <div className='flex items-center gap-[62px] mb-[42px]'>
              <span className='font-Poppins text-[16px] font-medium'>Total</span>
              {
                cart?.slice(0, 1).map((item) => (
                  <span key={item._id} className='text-[#B88E2F] font-Poppins text-[20px] font-medium leading-3'>{item.price * item.count}</span>
                ))
              }
            </div>
            <Link href={'/checkout'} className='py-[14px] text-center w-[222px] font-Poppins text-[20px] border-[2px] border-black rounded-[15px]'>Check Out</Link>
          </div>
        </div>
      </div>
      <ShopAdvantages />
    </>
  )
}

export default page