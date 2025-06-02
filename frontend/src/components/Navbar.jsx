import React from 'react'
import {assets} from '../assets/assets';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const LinkName = ({ to, label }) => {
        return (
            <NavLink to={to} className='flex flex-col items-center gap-1'>
                <p>{label}</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        );
    };

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets.logo} alt='logo' className='w-36' />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <LinkName to='/' label='HOME' />
                <LinkName to='/shop' label='SHOP' />
                <LinkName to='/about' label='ABOUT' />
                <LinkName to='/contact' label='CONTACT' />
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} alt='Search Icon' className='w-5 cursor-pointer' />

                <div className=''>

                </div>
            </div>
        </div>
    )
}
export default Navbar

