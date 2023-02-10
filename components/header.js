import Link from "next/link";
import { useEffect, useState } from "react";
import { ImCart } from "react-icons/im";


function Header() {
    const [cart, setCart] = useState([])
    const menuItems = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/products'>Products</Link></li>
        <li><Link href='/login'>Login</Link></li>
        <li><Link href='/admin'>Admin</Link></li>
    </>


    useEffect(() => {
        const getProduct = localStorage.getItem('product')
        const product = JSON.parse(getProduct)
        if (product) {
            setCart(product)
        }
    }, [])


    return (
        <div className="navbar bg-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost uppercase text-xl ">Lets Buy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className=" navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <Link href='/cart'>
                                <ImCart className="h-5 w-5" />
                            </Link>

                            <span className="badge badge-sm indicator-item">{cart.length}</span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header;