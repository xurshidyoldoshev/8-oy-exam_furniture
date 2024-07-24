"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { SwiperIcon } from '@/assets/icon';

export const CustomSwiper = () => {
    return (
        <>
            <Swiper
                className='swiperContainer'
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={-280}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1
                    }
                }
                pagination={{ el: '.swiperPagination', clickable: true }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide className='flex justify-center items-center'>
                    <div className='flex items-end w-[404px] h-[582px] px-[24px] py-[24px] swiperBg'>
                        <div className='py-[32px] pl-[32px] pr-[17px] bg-white bg-opacity-72'>
                            <div className='flex items-center gap-[8px] mb-[8px]'>
                                <span className='text-[#616161] font-Poppins text-[16px] font-medium leading-[150%]'>01</span>
                                <span className='w-[27px] h-[1px] bg-[#616161]'></span>
                                <span className='font-Poppins text-[#616161] text-[16px] font-medium leading-[150%]'>Bed Room</span>
                            </div>
                            <h4 className='text-[#3A3A3A] font-Poppins text-[28px] font-semibold leading-[120%]'>Inner Peace</h4>
                        </div>
                        <div>
                            <button className='w-[48px] h-[48px] bg-[#B88E2F] flex items-center justify-center'>
                                <SwiperIcon />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center flex-col'>
                    <div className='flex items-end w-[404px] h-[582px] px-[24px] py-[24px] swiperBgTwo'>
                        <div className='py-[32px] pl-[32px] pr-[17px] bg-white bg-opacity-72'>
                            <div className='flex items-center gap-[8px] mb-[8px]'>
                                <span className='text-[#616161] font-Poppins text-[16px] font-medium leading-[150%]'>02</span>
                                <span className='w-[27px] h-[1px] bg-[#616161]'></span>
                                <span className='font-Poppins text-[#616161] text-[16px] font-medium leading-[150%]'>Living Room</span>
                            </div>
                            <h4 className='text-[#3A3A3A] font-Poppins text-[28px] font-semibold leading-[120%]'>Comfortable Room</h4>
                        </div>
                        <div>
                            <button className='w-[48px] h-[48px] bg-[#B88E2F] flex items-center justify-center'>
                                <SwiperIcon />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center flex-col'>
                    <div className='flex items-end w-[404px] h-[582px] px-[24px] py-[24px] swiperBgThree'>
                        <div className='py-[32px] pl-[32px] pr-[17px] bg-white bg-opacity-72'>
                            <div className='flex items-center gap-[8px] mb-[8px]'>
                                <span className='text-[#616161] font-Poppins text-[16px] font-medium leading-[150%]'>03</span>
                                <span className='w-[27px] h-[1px] bg-[#616161]'></span>
                                <span className='font-Poppins text-[#616161] text-[16px] font-medium leading-[150%]'>Dining Room</span>
                            </div>
                            <h4 className='text-[#3A3A3A] font-Poppins text-[28px] font-semibold leading-[120%]'>Clean Room</h4>
                        </div>
                        <div>
                            <button className='w-[48px] h-[48px] bg-[#B88E2F] flex items-center justify-center'>
                                <SwiperIcon />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="sliderController">
                    <div className='swiper-button-prev slider-arrow'></div>
                    <div className='swiper-button-next slider-arrow'></div>
                    <div className='swiperPagination'></div>
                </div>
            </Swiper>
        </>
    );
}
