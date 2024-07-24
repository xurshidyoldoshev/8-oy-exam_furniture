import React from 'react'
import SinglePageDescriptionImg from '../../public/SinglePageDescriptionImg.png'
import SinglePageDescriptionImgTwo from '../../public/SinglePageDescriptionImgTwo.png'
import Image from 'next/image'
import { CustomButton } from '../CustomButton/CustomButton'
import Link from 'next/link'
import { CardLikeIcon, CompareIcon, ShareIcon } from '@/assets/icon'
import { useAppContext } from '@/context'

interface ProductsType {
    _id: number,
    title: string,
    description: string,
    image: string,
    price: number,
    color: string
}

const SinglePageDescription = () => {
    const { products } = useAppContext()
    return (
        <div className='container pt-[48px] pb-[61px]'>
            <div className='flex items-center w-[649px] justify-between ml-auto mx-auto mb-[37px]'>
                <h2 className='font-Poppins text-[24px] font-medium leading-[36px]'>Description</h2>
                <h2 className='font-Poppins text-[24px] font-medium leading-[36px] text-[#9F9F9F]'>Additional Information</h2>
                <h2 className='font-Poppins text-[24px] font-medium leading-[36px] text-[#9F9F9F]'>Reviews [5]</h2>
            </div>
            <p className='text-[#9F9F9F] text-[16px] mb-[30px] font-Poppins'>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker
                takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className='text-[#9F9F9F] text-[16px] font-Poppins mb-[36px]'>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar
                as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio
                which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue
                knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap
                enables easy and stylish travel.
            </p>
            <div className='flex items-center justify-between'>
                <div className='w-[605px] h-[348] rounded-[10px] bg-[#F9F1E7]'>
                    <Image src={SinglePageDescriptionImg} alt='Single page img' width={605} height={348} priority={true} />
                </div>
                <Image src={SinglePageDescriptionImgTwo} alt='Single page img' width={605} height={348} priority={true} />
            </div>
            <div className='pb-[104px] pt-[55px]'>
                <h2 className='font-Poppins text-[36px] font-medium leading-[54px] text-center mb-[26px]'>Our Products</h2>
                <ul className='flex flex-wrap gap-[32px] mb-[44px]'>
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
                                <Link href={`${_id}`} className='hoverEffectDiv w-[285px] h-[446px] bg-[#3A3A3A] bg-opacity-[0.72] flex flex-col gap-[24px] items-center justify-center translate-y-[-446px]'>
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
        </div>
    )
}

export default SinglePageDescription