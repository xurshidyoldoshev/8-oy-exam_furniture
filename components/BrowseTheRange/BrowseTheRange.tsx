"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface CategoryType {
    _id: number;
    name: string;
    image: string;
}

const BrowseTheRange = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get(`https://ecommerce-backend-fawn-eight.vercel.app/api/categories`).then((res) => {
            setCategory(res.data);
        })
    }, [])
    return (
        <div className='container pt-[56px] pb-[52px]'>
            <h2 className='font-Poppins text-[32px] font-bold leading-[48px] text-center text-[#333333]'>Browse The Range</h2>
            <p className='text-[#666666] font-Poppins text-[20px] leading-[30px] text-center mb-[62px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className='flex items-center gap-[20px] justify-center'>
                {
                    category.map(({ _id, image, name }: CategoryType) => (
                        <li key={_id}>
                            <img className='w-[381px] h-[400px] rounded-[10px] mb-[30px]' src={image} alt="img" width={381} height={480} />
                            <h4 className='font-Poppins text-[24px] font-semibold leading-[36px] text-center text-[#333333]'>{name}</h4>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BrowseTheRange