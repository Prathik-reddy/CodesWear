import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useRef } from 'react';
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, total }) => {
    const toggleCart = () => {
        // if (ref.current.classList.contains("translate-x-full")) {
        //     ref.current.classList.remove("translate-x-full");
        //     ref.current.classList.add("translate-x-0");
        // } else {
        //     ref.current.classList.add("translate-x-full");
        //     ref.current.classList.remove("translate-x-0");
        // }
        if (ref.current.classList.contains("hidden")) {
            ref.current.classList.remove("hidden");
        } else {
            ref.current.classList.add("hidden");
        }
    }
    const ref = useRef();

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center shadow-md">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src="/logo1.jpg" alt="" width="100" height="50" />
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center font-bold md:text-xl">
                    <Link href="/tshirts" ><a className="mr-5 text-orange-500 hover:text-black">T-shirts</a></Link>
                    <Link href="/hoodies" ><a className="mr-5 text-orange-500 hover:text-black">Hoodies</a></Link>
                    <Link href="/stickers" ><a className="mr-5 text-orange-500 hover:text-black">Stickers</a></Link>
                    <Link href="/mugs" ><a className="mr-5 text-orange-500 hover:text-black">Mugs</a></Link>
                </nav>
                <button onClick={toggleCart} className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-black text-black hover:text-orange-500 rounded text-base mt-4 md:mt-0"><AiOutlineShoppingCart />
                </button>
                <div ref={ref} className="hidden z-50 w-72  min-h-screen sideCart absolute top-0 right-0 bg-orange-100 px-8 py-10 ">
                    <h2 className="font-bold text-xl text-center underline text-orange-500">Your Shopping Cart</h2>
                    <span onClick={toggleCart} className=" cursor-pointer text-xl text-orange-500 hover:text-black  absolute top-3 right-3"><AiFillCloseCircle /></span>
                    <ol className="list-decimal font-semibold ">
                        {Object.keys(cart).length == 0 &&
                            <div>
                                <p className="mx-2 font-semibold mt-3">Your cart is empty.</p>
                            </div>}
                        {Object.keys(cart).map((k) => {
                            console.log("itemcode ; ",k);
                            return <li key={k}>
                                <div className="item flex my-3">
                                    <div className="w-2/3 font-semibold ">{cart[k].name} : </div>
                                    <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle onClick={() =>{removeFromCart( k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className=" hover:text-orange-600 cursor-pointer text-lg text-orange-500 mx-2" />{cart[k].qty}<AiFillPlusCircle onClick={() =>{addToCart( k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className=" hover:text-orange-600  cursor-pointer text-lg text-orange-500 mx-2" />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ol>
                    <div className="flex">
                        <button className="flex mx-2 mt-8 text-white bg-orange-500 border-0 py-1 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillBagCheckFill className="m-1" />Checkout</button>
                        <button onClick={clearCart} className="flex mr-2 mt-8 text-white bg-orange-500 border-0 py-1 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillBagCheckFill className="m-1" />Clear Cart</button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar