"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../CustomButton/CustomButton'
import { CardLikeIcon, CompareIcon, LikeIcon, ShareIcon } from '@/assets/icon'
import { useAppContext } from '@/context'
import Link from 'next/link'

interface ProductsType {
    _id: number,
    title: string,
    description: string,
    image: string,
    price: number,
    color: string
}

function OurProducts() {
    const { setProducts, products } = useAppContext()
    useEffect(() => {
        axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products').then((res) => {
            setProducts(res.data)
        })
    }, [])

    return (
        <div className='container pb-[73px]'>
            <h2 className='text-[#3A3A3A] font-Poppins text-[40px] font-bold leading-[120%] text-center mb-[32px]'>Our Products</h2>
            <ul className='flex flex-wrap gap-[32px] mb-[32px]'>
                {
                    products.map(({ _id, title, description, image, price, color }: ProductsType) => (
                        <li key={_id} className='bg-[#F4F5F7] cursor-pointer w-[285px] h-[446px] hoverEffectLi relative'>
                            <div style={{ backgroundColor: `${color}` }} className={`absolute right-5 top-5 w-[48px] h-[48px] rounded-full flex items-center justify-center`}>
                                <span className='text-white font-Poppins text-[16px] font-medium leading-[150%]'>-50%</span>
                            </div>
                            <img className='w-[285px] h-[301px] mb-[16px] border-b' src={image} alt="img" width={285} height={301} />
                            <div className='pb-[30px] px-[16px]'>
                                <h3 className='#3A3A3A font-Poppins text-[24px] font-semibold leading-[120%] mb-[8px]'>{title}</h3>
                                <p className='font-Poppins text-[16px] font-medium leading-[150%] text-[#898989] mb-[8px]'>
                                    {description.split(' ').length > 5
                                        ? description.split(' ').slice(0, 5).join(' ') + '...'
                                        : description}
                                </p>
                                <div className='flex items-center gap-[16px]'>
                                    <span className='text-[#3A3A3A] font-Poppins text-[20px] font-semibold leading-[150%]'>Rp {price}</span>
                                    <span className='text-[#B0B0B0] font-Poppins text-[16px] leading-[150%] line-through'>Rp {price + price}</span>
                                </div>
                            </div>
                            <Link href={`/shop/${_id}`} className='hoverEffectDiv w-[285px] h-[446px] bg-[#3A3A3A] bg-opacity-[0.72] flex flex-col gap-[24px] items-center justify-center translate-y-[-446px]'>
                                <CustomButton title='Add to cart' btnPaddingY={12} btnWidth={202} />
                                <div className='flex items-center justify-between w-[252px]'>
                                    <button className='flex items-center gap-[2px]'>
                                        <ShareIcon />
                                        <span className='text-white font-Poppins text-[16px] font-semibold leading-[150%]'>Share</span>
                                    </button>
                                    <button className='flex items-center gap-[2px]'>
                                        <CompareIcon />
                                        <span className='text-white font-Poppins text-[16px] font-semibold leading-[150%]'>Compare</span>
                                    </button>
                                    <button className='flex items-center gap-[2px]'>
                                        <CardLikeIcon />
                                        <span className='text-white font-Poppins text-[16px] font-semibold leading-[150%]'>Like</span>
                                    </button>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='flex items-center justify-center'>
                <CustomButton title='Show More' btnPaddingY={12} btnWidth={245} />
            </div>
        </div>
    )
}

export default OurProducts