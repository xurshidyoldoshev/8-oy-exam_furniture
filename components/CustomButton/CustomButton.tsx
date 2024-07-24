import React from 'react'

interface BtnType {
    title: string;
    btnWidth: number;
    btnPaddingY: number;
}

export const CustomButton: React.FC<BtnType> = ({ title, btnWidth, btnPaddingY }) => {
    return (
        <button
            style={{ width: `${btnWidth}px`, paddingTop: `${btnPaddingY}px`, paddingBottom: `${btnPaddingY}px` }}
            className={`text-center bg-[#B88E2F] border-[1px] border-[#B88E2F] text-white hover:text-[#B88E2F] hover:bg-white transition-all duration-200`}>
            <span className='text-[16px] font-Poppins font-bold leading-[24px]'>{title}</span>
        </button>
    )
}

