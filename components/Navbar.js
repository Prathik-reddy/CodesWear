import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill,BsFillCartCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
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
        <header className="text-gray-600 bold-font sticky top-0 bg-white z-10">
            <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center shadow-md ">
                <Link href={"/"}>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
                        <Image src="/logo1.jpg" alt="" width="150" height="60" />
                    </a>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center font-bold md:text-2xl">
                    <Link href="/tshirts" ><a className="mr-5 text-orange-500 hover:text-black">T-shirts</a></Link>
                    <Link href="/hoodies" ><a className="mr-5 text-orange-500 hover:text-black">Hoodies</a></Link>
                    <Link href="/stickers" ><a className="mr-5 text-orange-500 hover:text-black">Stickers</a></Link>
                    <Link href="/mugs" ><a className="mr-5 text-orange-500 hover:text-black">Mugs</a></Link>
                </nav>
                <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded  text-2xl mt-4 md:mt-0">
                    <Link href={"/login"}>
                        <MdAccountCircle className="text-orange-500 mx-2 hover:text-orange-600 "/>
                    </Link>
                    <AiOutlineShoppingCart className="text-orange-500 mx-2 hover:text-orange-600 " onClick={toggleCart}/>
                </button>
                <div ref={ref} className={`${Object.keys(cart).length == 0 ? "hidden":""} z-20 w-72  min-h-screen sideCart absolute top-0 right-0 bg-orange-100 px-8 py-10 text-xl`}>
                    <h2 className="font-bold text-xl text-center underline text-orange-500">Your Shopping Cart</h2>
                    <span onClick={toggleCart} className=" cursor-pointer text-2xl text-orange-500 hover:text-black absolute top-3 right-3"><AiFillCloseCircle /></span>
                    <ol className="list-decimal font-semibold ">
                        {Object.keys(cart).length == 0 &&
                            <div>
                                <p className="mx-2 font-semibold mt-3">Your cart is empty.</p>
                            </div>}
                        {Object.keys(cart).map((k) => {
                            console.log("itemcode ; ", k);
                            return <li key={k}>
                                <div className="item flex my-3">
                                    <div className="w-2/3 font-semibold ">{cart[k].name} : </div>
                                    <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=" hover:text-orange-600 cursor-pointer text-lg text-orange-500 mx-2" />{cart[k].qty}<AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=" hover:text-orange-600  cursor-pointer text-lg text-orange-500 mx-2" />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ol>
                    <h3 className="font-bold mx-2">SubTotal : ₹{total}</h3>
                    <div className="flex">
                        <Link href={"/checkout"}><button className="flex mr-2 mt-8 text-white bg-orange-500 border-0 py-1 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillCartCheckFill className="m-1" />Checkout</button></Link>
                        <button onClick={clearCart} className="flex mr-2 mt-8 text-white bg-orange-500 border-0 py-1 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillBagCheckFill className="m-1" />Clear Cart</button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar