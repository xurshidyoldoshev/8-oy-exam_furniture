import React from 'react'
import { ShopAdvantagesItem } from '../ShopAdvantagesItem/ShopAdvantagesItem'
import { CupIcon, FreeShoppingIcon, OperatorIcon, VerifyIcon } from '@/assets/icon'

const ShopAdvantages = () => {
    return (
        <div className='bg-[#FAF3EA]'>
            <div className='container py-[100px]'>
                <div className='flex items-center justify-center gap-[55.33px]'>
                    <ShopAdvantagesItem itemImg={<CupIcon />} itemText='crafted from top materials' itemTitle='High Quality' />
                    <ShopAdvantagesItem itemImg={<VerifyIcon />} itemText='Over 2 years' itemTitle='Warranty Protection' />
                    <ShopAdvantagesItem itemImg={<FreeShoppingIcon />} itemText='Order over 150 $' itemTitle='Free Shipping' />
                    <ShopAdvantagesItem itemImg={<OperatorIcon />} itemText='Dedicated support' itemTitle='24 / 7 Support' />
                </div>
            </div>
        </div>
    )
}

export default ShopAdvantages