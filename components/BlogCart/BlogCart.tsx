import Image from 'next/image'
import React from 'react'

interface CartType {
    CartSrc: any,
    CartText: string,
    CartDate: string,

}

export const BlogCart: React.FC<CartType> = ({ CartSrc, CartText, CartDate }) => {
    return (
        <div className='flex items-center justify-between w-[211px]'>
            <Image src={CartSrc} alt='cart img' width={80} height={80} priority={true} />
            <div>
                <p className='w-[119px] font-Poppins text-[14px] leading-[21px] mb-[5px]'>{CartText}</p>
                <span className='font-Poppins text-[12px] leading-[18px] text-[#9F9F9F]'>{CartDate}</span>
            </div>
        </div>
    )
}

