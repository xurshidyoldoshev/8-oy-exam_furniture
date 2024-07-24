"use client"
import React from 'react'
import { CardLikeIcon, CompareIcon, FilterIcon, ShareIcon, ShopAppIcon, ShopAppTwoIcon, ShopRightIcon } from '@/assets/icon'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { CustomPagenation } from '@/components/CustomPagenation/CustomPagenation'
import NumberInput from '@/components/NumberInput/NumberInput'
import ShopAdvantages from '@/components/ShopAdvantages/ShopAdvantages'
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

const page = () => {
    const { products } = useAppContext()

    return (
        <>
            <div className='ShopPageBg'>
                <div className='container py-[110px]'>
                    <h2 className='font-Poppins text-[48px] font-medium leading-[72px] mb-[2px] text-center'>Shop</h2>
                    <div className='flex items-center gap-[6px] justify-center'>
                        <Link href={'/'} className='font-Poppins text-[16px] font-semibold leading-[24px]'>Home</Link>
                        <ShopRightIcon />
                        <Link href={'shop'} className='font-Poppins text-[16px] leading-[24px]'>Shop</Link>
                    </div>
                </div>
            </div>
            <div className='bg-[#F9F1E7]'>
                <div className='container py-[23px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[31px]'>
                            <div className='flex items-center gap-[23px]'>
                                <button className='flex items-center gap-[12px]'>
                                    <FilterIcon />
                                    <span className='font-Poppins text-[20px] leading-[30px]'>Filter</span>
                                </button>
                                <button>
                                    <ShopAppIcon />
                                </button>
                                <button>
                                    <ShopAppTwoIcon />
                                </button>
                            </div>
                            <div className='h-[2px] w-[37px] bg-[#9F9F9F] rotate-90'></div>
                            <p className='font-Poppins text-[16px] leading-[24px]'>Showing 1-16 of 32 results</p>
                        </div>
                        <div className='flex items-center gap-[29px]'>
                            <div className='flex items-center gap-[17px]'>
                                <span className='font-Poppins text-[20px] leading-[30px]'>Show</span>
                                <NumberInput width={55} defaultValue={16} />
                            </div>
                            <div className='flex items-center gap-[17px]'>
                                <span className='font-Poppins text-[20px] leading-[30px]'>Short by</span>
                                <NumberInput width={188} defaultValue={"Default"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-[46px] pb-[85px]'>
                <ul className='flex flex-wrap gap-[32px] mb-[70px]'>
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
                    <CustomPagenation />
                </div>
            </div>
            <ShopAdvantages />
        </>
    )
}

export default page