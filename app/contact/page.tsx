import React from 'react'
import ContactBgIcon from '../../public/ContactBgIcon.png'
import Image from 'next/image'
import Link from 'next/link'
import { ClockIcon, LocationIcon, PhoneIcon, ShopRightIcon } from '@/assets/icon'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import ShopAdvantages from '@/components/ShopAdvantages/ShopAdvantages'

const page = () => {
    return (
        <>
            <div className='ShopPageBg'>
                <div className='container pt-[61px] pb-[97px] flex flex-col items-center justify-center'>
                    <Image src={ContactBgIcon} alt='bg icon' width={77} height={77} priority={true} />
                    <h2 className='font-Poppins text-[48px] font-medium leading-[72px] mb-[1px]'>Contact</h2>
                    <div className='flex items-center gap-2'>
                        <Link href={'/'} className='text-[16px] font-Poppins font-semibold'>Home</Link>
                        <ShopRightIcon />
                        <Link href={'/contact'} className='font-Poppins text-[16px]'>Contact</Link>
                    </div>
                </div>
            </div>
            <div className='container pt-[98px] pb-[63px]'>
                <div className='flex flex-col items-center mb-[14px]'>
                    <h2 className='font-Poppins text-[36px] font-semibold leading-[54px] mb-[7px]'>Get In Touch With Us</h2>
                    <p className='text-[#9F9F9F] font-Poppins text-[16px] w-[644px]'>
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An
                        Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>
                <div className='flex justify-between pt-8'>
                    <div className="pt-[46px] pb-[71px] space-y-[42px]">
                        <div className="flex space-x-5">
                            <LocationIcon />
                            <div>
                                <h2 className="font-medium text-[24px] font-Poppins leading-[36px]">Address</h2>
                                <p className='w-[212px] font-Poppins text-[16px]'>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <PhoneIcon />
                            <div>
                                <h2 className="font-medium text-[24px] font-Poppins leading-[36px]">Phone</h2>
                                <p className='w-[212px] font-Poppins text-[16px]'>Mobile: +(84) 546-6789</p>
                                <p className='w-[212px] font-Poppins text-[16px]'>Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <ClockIcon />
                            <div>
                                <h2 className="font-medium text-[24px] font-Poppins leading-[36px]">Working Time</h2>
                                <p className='w-[212px] font-Poppins text-[16px]'>Monday-Friday: 9:00 - 22:00</p>
                                <p className='w-[212px] font-Poppins text-[16px]'>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[46px] pb-[63px]">
                        <form className='w-[635px]'>
                            <div className="mb-[36px]">
                                <label className="block text-[16px] font-medium mb-[22px]">Your name</label>
                                <input type="text" id="name" className="w-full px-[29.75px] py-[25px] border-[1px] rounded-[10px] border-[#9F9F9F] outline-none" placeholder="Abc" />
                            </div>
                            <div className="mb-[36px]">
                                <label className="block text-[16px] font-medium mb-[22px]">Email address</label>
                                <input type="email" id="email" className="w-full px-[29.75px] py-[25px] border-[1px] rounded-[10px] border-[#9F9F9F] outline-none" placeholder="Abc@def.com" />
                            </div>
                            <div className="mb-[36px]">
                                <label className="block text-[16px] font-medium mb-[22px]">Subject</label>
                                <input type="text" id="subject" className="w-full px-[29.75px] py-[25px] border-[1px] rounded-[10px] border-[#9F9F9F] outline-none" placeholder="This is an optional" />
                            </div>
                            <div className="mb-[36px]">
                                <label className="block text-[16px] font-medium mb-[22px]">Message</label>
                                <textarea id="message" className="w-full px-[29.75px] py-[25px] border-[1px] rounded-[10px] border-[#9F9F9F] outline-none" placeholder="Hi! I'd like to ask about"></textarea>
                            </div>
                            <CustomButton title='Submit' btnPaddingY={13.75} btnWidth={237} />
                        </form>
                    </div>
                </div>
            </div>
            <ShopAdvantages />
            <div className='h-[30px]'></div>
        </>
    )
}

export default page