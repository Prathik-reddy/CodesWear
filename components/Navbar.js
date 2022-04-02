import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import { AiOutlineShoppingCart, AiFillCloseCircle ,AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs';
import { useRef } from 'react';
const Navbar = () => {
    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.add("translate-x-0");
        } else {
            ref.current.classList.add("translate-x-full");
            ref.current.classList.remove("translate-x-0");
        }
    }
    const ref = useRef();

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center shadow-md">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Link href="/">
                        <Image src="/logo.png" alt="" width="100" height="50" />
                    </Link>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center font-bold md:text-xl">
                    <Link href="/tshirts" ><a className="mr-5 text-orange-500 hover:text-black">T-shirts</a></Link>
                    <Link href="/hoodies" ><a className="mr-5 text-orange-500 hover:text-black">Hoodies</a></Link>
                    <Link href="/stickers" ><a className="mr-5 text-orange-500 hover:text-black">Stickers</a></Link>
                    <Link href="/mugs" ><a className="mr-5 text-orange-500 hover:text-black">Mugs</a></Link>
                </nav>
                <button onClick={toggleCart} className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-black text-black hover:text-orange-500 rounded text-base mt-4 md:mt-0"><AiOutlineShoppingCart />
                </button>
                <div ref={ref} className="z-50 w-72 h-full sideCart absolute top-0 right-0 bg-orange-100 px-8 py-10 transition-transform translate-x-full transform">
                    <h2 className="font-bold text-xl text-center underline text-orange-500">Your Shopping Cart</h2>
                    <span onClick={toggleCart} className=" cursor-pointer text-xl text-orange-500 hover:text-black  absolute top-3 right-3"><AiFillCloseCircle/></span>
                    <ol className="list-decimal font-semibold ">
                        <li>
                            <div className="item flex my-3">
                                <div className="w-2/3 font-semibold ">Tshirt-Wear the code : </div>
                                <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle className="cursor-pointer text-lg text-orange-500 mx-2" />1<AiFillPlusCircle className="cursor-pointer text-lg text-orange-500 mx-2"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item flex my-3">
                                <div className="w-2/3 font-semibold ">Tshirt-Wear the code : </div>
                                <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle className="cursor-pointer text-lg text-orange-500 mx-2" />1<AiFillPlusCircle className="cursor-pointer text-lg text-orange-500 mx-2"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item flex my-3">
                                <div className="w-2/3 font-semibold ">Tshirt-Wear the code : </div>
                                <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle className="cursor-pointer text-lg text-orange-500 mx-2" />1<AiFillPlusCircle className="cursor-pointer text-lg text-orange-500 mx-2"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item flex my-3">
                                <div className="w-2/3 font-semibold ">Tshirt-Wear the code : </div>
                                <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle className="cursor-pointer text-lg text-orange-500 mx-2" />1<AiFillPlusCircle className="cursor-pointer text-lg text-orange-500 mx-2"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item flex my-3">
                                <div className="w-2/3 font-semibold ">Tshirt-Wear the code : </div>
                                <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle className="cursor-pointer text-lg text-orange-500 mx-2" />1<AiFillPlusCircle className="cursor-pointer text-lg text-orange-500 mx-2"/>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <button className="flex mx-auto mt-10 text-white bg-orange-500 border-0 py-1 px-5 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>Checkout</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar