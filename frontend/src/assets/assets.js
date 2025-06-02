import p_img1 from './frontend_assets/p_img1.png'
import logo from './frontend_assets/logo.png'
import hero_img from './frontend_assets/hero_img.png'
import cart_icon from './frontend_assets/cart_icon.png'
import bin_icon from './frontend_assets/bin_icon.png'
import dropdown_icon from './frontend_assets/dropdown_icon.png'
import exchange_icon from './frontend_assets/exchange_icon.png'
import profile_icon from './frontend_assets/profile_icon.png'
import quality_icon from './frontend_assets/quality_icon.png'
import search_icon from './frontend_assets/search_icon.png'
import star_dull_icon from './frontend_assets/star_dull_icon.png'
import star_icon from './frontend_assets/star_icon.png'
import support_img from './frontend_assets/support_img.png'
import menu_icon from './frontend_assets/menu_icon.png'
import about_img from './frontend_assets/about_img.png'
import contact_img from './frontend_assets/contact_img.png'
import razorpay_logo from './frontend_assets/razorpay_logo.png'
import stripe_logo from './frontend_assets/stripe_logo.png'
import cross_icon from './frontend_assets/cross_icon.png'

import logo_admin from './admin_assets/logo.png'
import add_icon from './admin_assets/add_icon.png'
import order_icon from './admin_assets/order_icon.png'
import upload_area from './admin_assets/upload_area.png'
import parcel_icon from './admin_assets/parcel_icon.svg'

export const assetsAdmin = {
    logo_admin,
    add_icon,
    order_icon,
    upload_area,
    parcel_icon
}

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        id: 1,
        code: "misteryBox_m",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img1],
        category: "Women",
        // subCategory: "Topwear",
        // sizes: ["S", "M", "L"],
        created_date: "2025-05-30 00:00:00",
        edit_date: "2025-05-30 00:00:01",
        // bestseller: true
        isDeleted: false
    }
]