import Link from 'next/link'
import React from 'react'

interface NavListType {
    id: number;
    title: string;
    path: string;
    isActive: boolean;
}

const Navbar = () => {
    const NavList = [
        { id: 1, title: "Home", path: "/", isActive: true },
        { id: 2, title: "Shop", path: "/shop", isActive: false },
        { id: 3, title: "About", path: "/about", isActive: false },
        { id: 4, title: "Contact", path: "/contact", isActive: false }
    ]
    return (
        <nav>
            <ul className='w-[430px] flex items-center justify-between'>
                {NavList.map((item: NavListType) => (
                    <Link key={item.id} href={item.path} className='font-medium font-Poppins text-[16px] leading-[24px]'>{item.title}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar