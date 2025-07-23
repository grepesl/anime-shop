import React, {useState} from 'react'
import {assets} from '../assets/assets';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const Link_Name = ({ to, label }) => {
        return (
            <NavLink to={to} className='flex flex-col items-center gap-1'>
                <p>{label}</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        );
    };

    const Phone_Link_Name = ({ to, label }) => {
        return (
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to={to}>{label}</NavLink>
        )
    }

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets.logo} alt='logo' className='w-36' />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <Link_Name to='/' label='HOME' />
                <Link_Name to='/shop' label='SHOP' />
                <Link_Name to='/about'  label='ABOUT' />
                <Link_Name to='/contact' label='CONTACT' />
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} alt='Search' className='w-5 cursor-pointer' />

                <div className='group relative'>
                    <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='Profile' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} alt='Cart' className='w-5 min-w-5' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black  text-white aspect-square rounded-full text-[-8px]'>10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} alt='Menu' className='w-5 cursor-pointer sm:hidden' />
            </div>

            {/*Sidebar menu for small screens*/}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} alt='Dropdown' className='h-4 rotate-180' />
                        <p>Back</p>
                    </div>
                    <Phone_Link_Name to='/' label='HOME' />
                    <Phone_Link_Name to='/shop' label='SHOP' />
                    <Phone_Link_Name to='/about' label='ABOUT' />
                    <Phone_Link_Name to='/contact' label='CONTACT' />
                </div>
            </div>

        </div>
    )
}
export default Navbar

