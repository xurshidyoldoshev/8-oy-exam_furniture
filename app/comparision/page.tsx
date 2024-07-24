"use client"
import { ShopRightIcon } from '@/assets/icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactBgIcon from '../../public/ContactBgIcon.png'
import { Rate, Select, Space } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '../GlobalRedux/store'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import ShopAdvantages from '@/components/ShopAdvantages/ShopAdvantages'

const page = () => {
    const cart = useSelector((state: RootState) => state.carts.carts)
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <div className='ShopPageBg'>
                <div className='container pt-[61px] pb-[97px] flex flex-col items-center justify-center'>
                    <Image src={ContactBgIcon} alt='bg icon' width={77} height={77} priority={true} />
                    <h2 className='font-Poppins text-[48px] font-medium leading-[72px] mb-[1px]'>Product Comparison</h2>
                    <div className='flex items-center gap-2'>
                        <Link href={'/'} className='text-[16px] font-Poppins font-semibold'>Home</Link>
                        <ShopRightIcon />
                        <Link href={'/comparision'} className='font-Poppins text-[16px]'>Comparison</Link>
                    </div>
                </div>
            </div>
            <div className='container pt-[54px] pb-[58px] flex justify-between'>
                <div>
                    <h2 className='font-Poppins text-[28px] font-medium leading-[126.5%] w-[223px] mb-[21px]'>
                        Go to Product page for more Products
                    </h2>
                    <span className='text-[#727272] cursor-pointer font-Poppins text-[20px font-medium leading-[30px] border-b-[2px] border-b-[#727272]'>View More</span>
                </div>
                <div className='flex items-center gap-[50px]'>
                    <ul className='flex items-center gap-[47px]'>
                        {
                            cart.slice(0, 2).map((item: any) => (
                                <li key={item._id}>
                                    <Image className='w-[239px] h-[142px] rounded-[10px] mb-[18px]' src={item.image} alt='cart img' priority={true} width={239} height={142} />
                                    <h3 className='font-Poppins text-[24px] font-medium leading-[126.5%] mb-[6px]'>{item.title}</h3>
                                    <span className='font-Poppins text-[18px] font-medium leading-[27px] mb-[10px]'>Rs. {item.price}</span>
                                    <div className='flex items-center gap-[5px]'>
                                        <span className='font-Poppins text-[18px] font-medium leading-[27px]'>{item.rate}</span>
                                        <Rate
                                            disabled
                                            value={item?.rate}
                                        />
                                        <span className='h-[30px] w-[1px] bg-[#9F9F9F]'></span>
                                        <span className='text-[13px] font-Poppins leading-[20px] text-[#9F9F9F]'>204 Review</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <form>
                    <label className="block mb-[14px] font-Poppins text-[24px] font-semibold leading-[126.5%]">
                        Choose a Product:
                    </label>
                    <select
                        name="product"
                        className="w-[242px] px-[15px] py-[6px] bg-[#B88E2F] text-white border-none outline-none rounded-[6px] appearance-none"
                        defaultValue=""
                    >
                        <option
                            value=""
                            className="font-Poppins text-[14px] font-semibold leading-[126.5%]"
                        >
                            Choose a Product
                        </option>
                    </select>
                </form>
            </div>
            <div className='container pb-[112px] border-t-[1px] border-t-[#E8E8E8]'>
                <div className='grid grid-cols-4'>
                    <div className='pt-[42px] flex flex-col'>
                        <span className='font-Poppins text-[28px] font-medium leading-[126.5%] mb-[28px]'>General</span>
                        <span className='ComparisionTitles mb-[34px]'>Sales Package</span>
                        <span className='ComparisionTitles mb-[34px]'>Model Number</span>
                        <span className='ComparisionTitles mb-[34px]'>Secondary Material</span>
                        <span className='ComparisionTitles mb-[34px]'>Configuration</span>
                        <span className='ComparisionTitles mb-[34px]'>Upholstery Material</span>
                        <span className='ComparisionTitles mb-[96px]'>Upholstery Color</span>
                        <span className='font-Poppins text-[28px] font-medium leading-[126.5%] mb-[28px]'>Product </span>
                        <span className='ComparisionTitles mb-[34px]'>Filling Material</span>
                        <span className='ComparisionTitles mb-[34px]'>Finish Type</span>
                        <span className='ComparisionTitles mb-[34px]'>Adjustable Headrest</span>
                        <span className='ComparisionTitles mb-[34px] w-[203px]'>Maximum Load Capacity</span>
                        <span className='ComparisionTitles mb-[96px]'>Origin of Manufacture</span>
                        <span className='font-Poppins text-[28px] font-medium leading-[126.5%] mb-[28px]'>Dimensions</span>
                        <span className='ComparisionTitles mb-[34px]'>Width</span>
                        <span className='ComparisionTitles mb-[34px]'>Height</span>
                        <span className='ComparisionTitles mb-[34px]'>Depth</span>
                        <span className='ComparisionTitles mb-[34px]'>Weight</span>
                        <span className='ComparisionTitles mb-[34px]'>Seat Height</span>
                        <span className='ComparisionTitles mb-[96px]'>Leg Height</span>
                        <span className='font-Poppins text-[28px] font-medium leading-[126.5%] mb-[28px]'>Warranty</span>
                        <span className='ComparisionTitles mb-[63px]'>Warranty Summary</span>
                        <span className='ComparisionTitles mb-[109px] w-[241px]'>Warranty Service Type</span>
                        <span className='ComparisionTitles mb-[121px] w-[241px]'>Covered in Warranty</span>
                        <span className='ComparisionTitles mb-[159px] w-[175px]'>Not Covered in Warranty</span>
                        <span className='ComparisionTitles mb-[124px] w-[241px]'>Domestic Warranty</span>
                    </div>
                    <div className='border-x-[1px] border-x-[#E8E8E8] pt-[99.5px] flex flex-col pl-[15px]'>
                        <span className='ComparisionTitles mb-[47px]'>1 sectional sofa</span>
                        <span className='ComparisionTitles mb-[34px]'>TFCBLIGRBL6SRHS</span>
                        <span className='ComparisionTitles mb-[34px]'>Solid Wood</span>
                        <span className='ComparisionTitles mb-[34px]'>L-shaped</span>
                        <span className='ComparisionTitles mb-[34px]'>Fabric + Cotton</span>
                        <span className='ComparisionTitles mb-[152px]'>Bright Grey & Lion</span>
                        <span className='ComparisionTitles mb-[34px]'>Foam</span>
                        <span className='ComparisionTitles mb-[34px]'>Bright Grey & Lion</span>
                        <span className='ComparisionTitles mb-[34px]'>No</span>
                        <span className='ComparisionTitles mb-[59px]'>280 KG</span>
                        <span className='ComparisionTitles mb-[159px]'>India</span>
                        <span className='ComparisionTitles mb-[34px]'>265.32 cm</span>
                        <span className='ComparisionTitles mb-[34px]'>76 cm</span>
                        <span className='ComparisionTitles mb-[34px]'>167.76 cm</span>
                        <span className='ComparisionTitles mb-[34px]'>45 KG</span>
                        <span className='ComparisionTitles mb-[34px]'>41.52 cm</span>
                        <span className='ComparisionTitles mb-[163px]'>5.46 cm</span>
                        <span className='ComparisionTitles mb-[34px] w-[226px]'>1 Year Manufacturing Warranty</span>
                        <span className='ComparisionTitles mb-[35px] w-[235px]'>
                            For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture
                        </span>
                        <span className='ComparisionTitles mb-[94px] w-[241px]'>Warranty Against Manufacturing Defect</span>
                        <span className='ComparisionTitles mb-[34px] w-[241px]'>
                            The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its
                            Intended Use And Wear & Tear In The Natural Course Of Product Usage.
                        </span>
                        <span className='ComparisionTitles mb-[60px]'>1 Year</span>
                        <CustomButton title='Add To Cart' btnPaddingY={17} btnWidth={215} />
                    </div>
                    <div className='border-r-[1px] border-r-[#E8E8E8] pt-[79.5px] flex flex-col pl-[15px]'>
                        <span className='ComparisionTitles mb-[35px] w-[226px]'>1 Three Seater, 2 Single Seater</span>
                        <span className='ComparisionTitles mb-[34px]'>DTUBLIGRBL568</span>
                        <span className='ComparisionTitles mb-[34px]'>Solid Wood</span>
                        <span className='ComparisionTitles mb-[34px]'>L-shaped</span>
                        <span className='ComparisionTitles mb-[34px]'>Fabric + Cotton</span>
                        <span className='ComparisionTitles mb-[159px]'>Bright Grey & Lion</span>
                        <span className='ComparisionTitles mb-[34px]'>Matte</span>
                        <span className='ComparisionTitles mb-[34px]'>Bright Grey & Lion</span>
                        <span className='ComparisionTitles mb-[34px]'>yes</span>
                        <span className='ComparisionTitles mb-[59px]'>300 KG</span>
                        <span className='ComparisionTitles mb-[159px]'>India</span>
                        <span className='ComparisionTitles mb-[34px]'>265.32 cm</span>
                        <span className='ComparisionTitles mb-[34px]'>76 cm</span>
                        <span className='ComparisionTitles mb-[34px]'>167.76 cm</span>
                        <span className='ComparisionTitles mb-[34px]'>65 KG</span>
                        <span className='ComparisionTitles mb-[34px]'>41.52 cm</span>
                        <span className='ComparisionTitles mb-[163px]'>5.46 cm</span>
                        <span className='ComparisionTitles mb-[34px] w-[226px]'>1.2 Year Manufacturing Warranty</span>
                        <span className='ComparisionTitles mb-[35px] w-[235px]'>
                            For Warranty Claims or Any Product Related Issues Please Email at <br />support@xyz.com
                        </span>
                        <span className='ComparisionTitles mb-[43px] w-[241px]'>
                            Warranty of the product is limited to manufacturing defects only.
                        </span>
                        <span className='ComparisionTitles mb-[34px] w-[241px]'>
                            The Warranty Does Not Cover Damages Due To Usage Of
                            The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.
                        </span>
                        <span className='ComparisionTitles mb-[61px]'>3 Months</span>
                        <CustomButton title='Add To Cart' btnPaddingY={17} btnWidth={215} />
                    </div>
                    <div></div>
                </div>
            </div>
            <ShopAdvantages />
        </>
    )
}

export default page