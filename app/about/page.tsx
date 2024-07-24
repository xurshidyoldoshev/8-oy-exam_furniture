"use client"
import { BlogSearchIcon, DataIcon, PersonIcon, PinIcon, ShopRightIcon } from '@/assets/icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactBgIcon from '../../public/ContactBgIcon.png'
import BlogImg from '../../public/BlogImg.png'
import BlogImgTwo from '../../public/BlogImgTwo.png'
import BlogImgThree from '../../public/BlogImgThree.png'
import { CustomPagenation } from '@/components/CustomPagenation/CustomPagenation'
import { BlogCart } from '@/components/BlogCart/BlogCart'
import BlogPageCartImg from '../../public/BlogPageCartImg.png'
import BlogPageCartImgTwo from '../../public/BlogPageCartImgTwo.png'
import BlogPageCartImgThree from '../../public/BlogPageCartImgThee.png'
import BlogPageCartImgFour from '../../public/BlogPageCartImgFour.png'
import BlogPageCartImgFive from '../../public/BlogPageCartImgFive.png'
import ShopAdvantages from '@/components/ShopAdvantages/ShopAdvantages'

const page = () => {
    return (
        <>
            <div className='ShopPageBg'>
                <div className='container pt-[61px] pb-[97px] flex flex-col items-center justify-center'>
                    <Image src={ContactBgIcon} alt='bg icon' width={77} height={77} priority={true} />
                    <h2 className='font-Poppins text-[48px] font-medium leading-[72px] mb-[1px]'>Blog</h2>
                    <div className='flex items-center gap-2'>
                        <Link href={'/'} className='text-[16px] font-Poppins font-semibold'>Home</Link>
                        <ShopRightIcon />
                        <Link href={'/blog'} className='font-Poppins text-[16px]'>Blog</Link>
                    </div>
                </div>
            </div>
            <div className='container pt-[106px] pb-[58px]'>
                <div className='flex justify-between mb-[17px]'>
                    <div>
                        <Image src={BlogImg} alt="bg img" width={817} height={500} priority={true} />
                    </div>
                    <div>
                        <label className='flex items-center mb-[43px]'>
                            <input className='w-[311px] py-[20px] px-[25px] border-[2px] border-[#9F9F9F] rounded-[10px]' type="text" />
                            <div className='translate-x-[-130%]'>
                                <BlogSearchIcon />
                            </div>
                        </label>
                        <div className="">
                            <h2 className="font-Poppins text-[24px] font-medium leading-[36px] mb-[33px]">Categories</h2>
                            <ul className="space-y-[41px]">
                                <li className="flex justify-between">
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">Crafts</span>
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">2</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">Design</span>
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">8</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">Handmade</span>
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">7</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">Interior</span>
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">1</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">Wood</span>
                                    <span className="font-Poppins text-[16px] text-[#9F9F9F]">6</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[35px]'>
                    <div className='flex items-center gap-[7px]'>
                        <PersonIcon />
                        <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Admin</span>
                    </div>
                    <div className='flex items-center gap-[7px]'>
                        <DataIcon />
                        <span className='text-[#9F9F9F] font-Poppins text-[16px]'>14 Oct 2022</span>
                    </div>
                    <div className='flex items-center gap-[7px]'>
                        < PinIcon />
                        <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Wood</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[820px]'>
                        <h2 className='mb-[12px] font-Poppins text-[30px] font-medium leading-[45px]'>Going all-in with millennial design</h2>
                        <p className='text-[#9F9F9F] font-Poppins text-[15px] leading-[150%] mb-[30px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                            aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper
                            dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                        </p>
                        <h4 className='pb-[11.5px] border-b-[1px] border-b-black inline-block font-Poppins text-[16px] mb-[54px]'>Read more</h4>
                        <Image src={BlogImgTwo} alt="bg img" width={817} height={500} priority={true} />
                        <div className='flex items-center gap-[35px] mt-[17px] mb-[54px]'>
                            <div className='flex items-center gap-[7px]'>
                                <PersonIcon />
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Admin</span>
                            </div>
                            <div className='flex items-center gap-[7px]'>
                                <DataIcon />
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>14 Oct 2022</span>
                            </div>
                            <div className='flex items-center gap-[7px]'>
                                < PinIcon />
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Wood</span>
                            </div>
                        </div>
                        <h2 className='mb-[12px] font-Poppins text-[30px] font-medium leading-[45px]'>Exploring new ways of decorating</h2>
                        <p className='text-[#9F9F9F] font-Poppins text-[15px] leading-[150%] mb-[30px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                            aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper
                            dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                        </p>
                        <h4 className='pb-[11.5px] border-b-[1px] border-b-black inline-block font-Poppins text-[16px] mb-[54px]'>Read more</h4>
                        <Image src={BlogImgThree} alt="bg img" width={817} height={500} priority={true} />
                        <div className='flex items-center gap-[35px] mt-[17px] mb-[54px]'>
                            <div className='flex items-center gap-[7px]'>
                                <PersonIcon />
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Admin</span>
                            </div>
                            <div className='flex items-center gap-[7px]'>
                                <DataIcon />
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>14 Oct 2022</span>
                            </div>
                            <div className='flex items-center gap-[7px]'>
                                < PinIcon />
                                <span className='text-[#9F9F9F] font-Poppins text-[16px]'>Wood</span>
                            </div>
                        </div>
                        <h2 className='mb-[12px] font-Poppins text-[30px] font-medium leading-[45px]'>Handmade pieces that took time to make</h2>
                        <p className='text-[#9F9F9F] font-Poppins text-[15px] leading-[150%] mb-[30px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                            aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper
                            dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                        </p>
                        <h4 className='pb-[11.5px] border-b-[1px] border-b-black inline-block font-Poppins text-[16px] mb-[54px]'>Read more</h4>
                    </div>
                    <div className='w-[252px]'>
                        <h3 className='font-Poppins text-[24px] font-medium leading-[36px] mb-[26px]'>Recent Posts</h3>
                        <div className='space-y-[39px]'>
                            <BlogCart CartSrc={BlogPageCartImg} CartDate='03 Aug 2022' CartText='Going all-in with millennial design' />
                            <BlogCart CartSrc={BlogPageCartImgTwo} CartDate='03 Aug 2022' CartText='Exploring new ways of decorating' />
                            <BlogCart CartSrc={BlogPageCartImgThree} CartDate='03 Aug 2022' CartText='Handmade pieces that took time to make' />
                            <BlogCart CartSrc={BlogPageCartImgFour} CartDate='03 Aug 2022' CartText='Modern home in Milan' />
                            <BlogCart CartSrc={BlogPageCartImgFive} CartDate='03 Aug 2022' CartText='Colorful office redesign' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <CustomPagenation />
                </div>
            </div>
            <ShopAdvantages />
            <div className='h-[22px]'></div>
        </>
    )
}

export default page