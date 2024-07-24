import React from 'react'

interface itemType {
    itemImg: any,
    itemText: string,
    itemTitle: string,

}

export const ShopAdvantagesItem: React.FC<itemType> = ({ itemImg, itemText, itemTitle }) => {
    return (
        <div className='flex gap-[13px]'>
            <div className='w-[60px] h-[60px]'>
                {itemImg}
            </div>
            <div>
                <h3 className='font-Poppins text-[25px] font-semibold leading-[150%] mb-[2px] text-[#242424]'>{itemTitle}</h3>
                <p className='text-[#898989] font-Poppins text-[20px] font-medium leading-[150%] w-[267px] whitespace-nowrap'>{itemText}</p>
            </div>
        </div>
    )
}

