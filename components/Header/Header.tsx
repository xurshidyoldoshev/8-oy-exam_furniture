"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { AccountAlertIcon, SearchIcon, LikeIcon, BasketIcon, ModalCloseIcon } from '../../assets/icon'
import { Badge, Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store'
import { deleteCart } from '@/app/GlobalRedux/Features/carts/CartsSlice'

const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch()

    const cart = useSelector((state: RootState) => state.carts.carts)
    const handleDeleteCart = (id: string) => {
        dispatch(deleteCart(id));
    }

    console.log(cart);
    
    return (
        <header>
            <div className='container flex items-center justify-between py-[30px]'>
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt='Site Logo' width={185} height={41} priority={true} />
                </Link>
                <Navbar />
                <div className='w-[250px] flex items-center justify-between'>
                    <button>
                        <AccountAlertIcon />
                    </button>
                    <button>
                        <SearchIcon />
                    </button>
                    <button>
                        <LikeIcon />
                    </button>
                    <Badge count={cart.length} style={{ color: "white", backgroundColor: "grey" }}>
                        <button onClick={showDrawer}>
                            <BasketIcon />
                        </button>
                    </Badge>
                </div>
            </div>
            <Drawer title="Shopping Cart" onClose={onClose} open={open} style={{ height: "100%", padding: 0 }}>
                <div className='flex flex-col items-center justify-between h-full'>
                    <div className="flex flex-col w-full overflow-auto px-4 py-2">
                        {cart?.map((item: any) => (
                            <div key={item._id} className="flex items-center p-4 bg-card rounded-lg shadow-md mb-4">
                                <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted">
                                    <Image className='w-[105px] h-[105px]' src={item.image} alt='item img' width={105} height={105} priority={true} />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                                    <div className="flex items-center mt-2">
                                        <span className="text-foreground">{item.count}</span>
                                        <span className="mx-1 text-muted-foreground">X</span>
                                        <span className="text-primary font-semibold">Rs. {item.price}</span>
                                    </div>
                                </div>
                                <button onClick={() => handleDeleteCart(item._id)} className="ml-4 text-muted-foreground hover:text-destructive">
                                    <ModalCloseIcon />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='w-full py-[28px] border-t-[1px] border-t-[#D9D9D9] flex justify-around gap-1'>
                        <Link className='font-Poppins text-[12px] leading-[18px] px-[20px] py-3 border-[2px] rounded-[20px] border-black' href={'/cart'}>Cart</Link>
                        <Link className='font-Poppins text-[12px] leading-[18px] px-[30px] py-3 border-[2px] rounded-[20px] border-black' href={'/checkout'}>Checkout</Link>
                        <Link className='font-Poppins text-[12px] leading-[18px] px-[30px] py-3 border-[2px] rounded-[20px] border-black' href={'/comparision'}>Comparison</Link>
                    </div>
                </div>
            </Drawer>
        </header>
    )
}

export default Header
