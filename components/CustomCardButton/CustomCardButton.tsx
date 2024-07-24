import React from 'react'

interface ButtonType {
    title: string;
    img: any;
}

const CustomCardButton = ({ title, img }: ButtonType) => {
    return (
        <button className='flex items-center gap-[4px]'>
            <img src={img} alt="card img" width={16} height={16} />
            <span className='text-white font-Poppins text-[16px] font-semibold leading-[150%]'>{title}</span>
        </button>
    )
}

export default CustomCardButton