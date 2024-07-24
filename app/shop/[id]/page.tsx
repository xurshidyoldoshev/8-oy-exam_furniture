"use client"
import { FacebookIcon, LinkedinIcon, ShopRightIcon, TwitterIcon } from '@/assets/icon'
import SinglePageDescription from '@/components/SinglePageDescription/SinglePageDescription'
import { useAppContext } from '@/context'
import { Rate } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, incrementCount, decrementCount } from '@/app/GlobalRedux/Features/carts/CartsSlice'
import { RootState } from '@/app/GlobalRedux/store'

function page({ params }: any) {
    const id = params.id
    const { singleData, setSingleData } = useAppContext()
    
    useEffect(() => {
        axios.get(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${id}`).then((res) => {
            setSingleData({ ...res.data, count: 0 });
        })
    }, [id])

    const cart = useSelector((state: RootState) => state.carts.carts)
    const foundCart = cart.find((item: { _id: any }) => item._id === id)
    const dispatch = useDispatch()

    const AddToCardFunction = () => {
        dispatch(addCart({ ...singleData, count: foundCart ? foundCart.count + 1 : 1 }))
    }

    return (
        <>
            <div className='bg-[#F9F1E7]'>
                <div className='container py-[31px] flex items-center gap-[14px]'>
                    <Link className='font-Poppins text-[16px] leading-[24px] text-[#9F9F9F]' href={'/'}>Home</Link>
                    <ShopRightIcon />
                    <Link className='font-Poppins text-[16px] leading-[24px] text-[#9F9F9F]' href={'/shop'}>Shop</Link>
                    <ShopRightIcon />
                    <div className='w-[2px] h-[37px] bg-[#9F9F9F]'></div>
                    <span className='font-Poppins text-[16px] leading-[24px]'>{singleData.title}</span>
                </div>
            </div>
            <div className='container pt-[32px] pb-[55px] flex justify-between'>
                <div className='flex gap-[35px]'>
                    <div className='flex flex-col gap-[27px]'>
                        <img className='w-[76px] h-[80px] rounded-[10px]' src={singleData.image} alt="single data img" width={76} height={80} />
                        <img className='w-[76px] h-[80px] rounded-[10px]' src={singleData.image} alt="single data img" width={76} height={80} />
                        <img className='w-[76px] h-[80px] rounded-[10px]' src={singleData.image} alt="single data img" width={76} height={80} />
                        <img className='w-[76px] h-[80px] rounded-[10px]' src={singleData.image} alt="single data img" width={76} height={80} />
                    </div>
                    <div>
                        <img className='rounded-[10px]' src={singleData.image} alt="single data img" width={423} height={500} />
                    </div>
                </div>
                <div>
                    <h2 className='font-Poppins text-[42px] leading-[63px]'>{singleData.title}</h2>
                    <span className='text-[#9F9F9F] font-Poppins text-[24px] font-medium leading-[36px] mb-[10px]'>Rs. {singleData.price}</span>
                    <div className='flex items-center gap-[21px] mb-[13px]'>
                        <Rate
                            disabled
                            value={singleData?.rate}
                        />
                        <div className='h-[30px] w-[1px] bg-[#9F9F9F]'></div>
                        <span className='text-[#9F9F9F] font-Poppins text-[13px] leading-[20px]'>{singleData?.rate} Customer Review</span>
                    </div>
                    <p className='font-Poppins w-[424px] text-[16px] mb-[22px] leading-[20px]'>{singleData.description}</p>
                    <span className='text-[#9F9F9F] font-Poppins text-[14px] leading-[21px]'>Size</span>
                    <div className="radio-inputs gap-[16px] mb-[18px] mt-[12px]">
                        <label className="radio">
                            <input type="radio" name="radio" />
                            <span className="name">L</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="radio" />
                            <span className="name">XL</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="radio" />
                            <span className="name">XS</span>
                        </label>
                    </div>
                    <span className='text-[#9F9F9F] font-Poppins text-[14px] leading-[21px]'>Color</span>
                    <div className='flex items-center gap-[16px] color-radios mb-[32px]'>
                        <label className="color-radio">
                            <input className='hidden' type="radio" name="color" value="color1" />
                            <span className="color-1"></span>
                        </label>
                        <label className="color-radio">
                            <input className='hidden' type="radio" name="color" value="color2" />
                            <span className="color-2"></span>
                        </label>
                        <label className="color-radio">
                            <input className='hidden' type="radio" name="color" value="color3" />
                            <span className="color-3"></span>
                        </label>
                    </div>
                    <div className='flex items-center gap-[15px] mb-[59.5px]'>
                        <div className='py-[18px] px-[12px] flex items-center gap-[35px] border-[1px] border-[#000] rounded-[15px]'>
                            <button onClick={() => dispatch(decrementCount(singleData))} className='font-Poppins text-[16px]'>-</button>
                            <span className='font-medium font-Poppins text-[16px]'>{foundCart?.count}</span>
                            <button onClick={() => dispatch(incrementCount(singleData))} className='font-Poppins text-[16px]'>+</button>
                        </div>
                        <button
                            onClick={AddToCardFunction}
                            className='py-[17px] px-[48px] rounded-[15px] font-medium border-[1px] border-[#000]'
                        >
                            Add To Card
                        </button>
                        <button className='py-[17px] px-[48px] rounded-[15px] font-medium border-[1px] border-[#000]'>+ Compare</button>
                    </div>
                    <div className='w-[605px] h-[1px] bg-[#D9D9D9] mb-[41.5px]'></div>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='flex items-center gap-[12px]'>
                            <div className='flex items-center justify-between w-[95px]'>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>SKU</span>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>:</span>
                            </div>
                            <span className='text-[#9F9F9F] font-Poppins text-[16px]'>SS001</span>
                        </div>
                        <div className='flex items-center gap-[12px]'>
                            <div className='flex items-center justify-between w-[95px]'>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Category</span>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>:</span>
                            </div>
                            <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Sofas</span>
                        </div>
                        <div className='flex items-center gap-[12px]'>
                            <div className='flex items-center justify-between w-[95px]'>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Tags</span>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>:</span>
                            </div>
                            <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Sofa, Chair, Home, Shop</span>
                        </div>
                        <div className='flex items-center gap-[12px]'>
                            <div className='flex items-center justify-between w-[95px]'>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Share</span>
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>:</span>
                            </div>
                            <div className='flex items-center gap-[23px]'>
                                <a target='_blank' href="https://facebook.com">
                                    <FacebookIcon />
                                </a>
                                <a target='_blank' href="https://linkedin.com">
                                    <LinkedinIcon />
                                </a>
                                <a target='_blank' href="https://twitter.com">
                                    <TwitterIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#D9D9D9]'></div>
            <SinglePageDescription />
        </>
    )
}

export default page