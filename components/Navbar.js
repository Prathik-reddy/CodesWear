import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Link href = "/">
                        <Image src="/logo.png" alt="" width="100" height="50" />
                    </Link>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center font-bold md:text-xl">
                   <Link href="/tshirts" ><a className="mr-5 text-orange-500 hover:text-black">T-shirts</a></Link>
                   <Link href="/hoodies" ><a className="mr-5 text-orange-500 hover:text-black">Hoodies</a></Link>
                   <Link href="/stickers" ><a className="mr-5 text-orange-500 hover:text-black">Stickers</a></Link>
                   <Link href="/mugs" ><a className="mr-5 text-orange-500 hover:text-black">Mugs</a></Link>
                </nav>
                <button className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-black text-black hover:text-orange-500 rounded text-base mt-4 md:mt-0"><AiOutlineShoppingCart/>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar