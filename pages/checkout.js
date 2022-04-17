import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useState } from 'react';

const Checkout = ({ cart, clearCart, addToCart, removeFromCart, total }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [pin, setpin] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("")
  const [disabled, setDisabled] = useState(true)

  const handleChange =async (e) => {

    if (e.target.name == "name") {
      setname(e.target.value);
    }
    if (e.target.name == "email") {
      setemail(e.target.value);
    }
    if (e.target.name == "address") {
      setaddress(e.target.value);
    }
    if (e.target.name == "phone") {
      setphone(e.target.value);
    }

    if (e.target.name == "pincode") {
      setpin(e.target.value);
      if(e.target.value.length==6){
        let pinCode = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pinJson = await pinCode.json();
        if(Object.keys(pinJson).includes(e.target.value)){
          setstate(pinJson[e.target.value][1])
          setcity(pinJson[e.target.value][0])
        }else{
          setstate("");
          setcity("");
        }
      }
      else{
        setstate("");
        setcity("");
      }
    }

    if (e.target.name == "state") {
      setstate(e.target.value);
    }
    if (e.target.name == "city") {
      setcity(e.target.value);
    }

    if(name.length>3 && email.length>3 && phone.length>3 && address.length>3 && state.length>3 && pin.length>3 && city.length>3 ){
      setDisabled(false);
    }else{
      setDisabled(true);
    }

  }


  return (
    <div className="container m-auto ">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-bold text-xl ">1.Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-md text-gray-600">Name</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-md text-gray-600">Email</label>
            <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-md text-gray-600">Address</label>
          <textarea onChange={handleChange} value={address} cols="30" rows="2" type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="phone"  className="leading-7 text-md text-gray-600">Phone</label>
            <input onChange={handleChange} value={phone} type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">

          <div className="mb-4">
            <label htmlFor="pincode" className="leading-7 text-md text-gray-600">Pincode</label>
            <input onChange={handleChange} value={pin} type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-md text-gray-600">State</label>
            <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-md text-gray-600">City</label>
            <input onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <h2 className="font-bold text-xl ">2.Review Cart Items and Pay</h2>
      <div className="sideCart bg-orange-50 rounded p-6 m-3 text-xl">
        <ol className={`list-decimal ${Object.keys(cart).length != 0 ? "p-5" : ""}  font-semibold`}>
          {Object.keys(cart).length == 0 &&
            <div>
              <p className="font-semibold mt-3">Your cart is empty.</p>
            </div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-3">
                <div className="font-semibold ">{cart[k].name} : </div>
                <div className="w-1/3 font-semibold flex items-center justify-center "><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=" hover:text-orange-600 cursor-pointer text-lg text-orange-500 mx-2" />{cart[k].qty}<AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=" hover:text-orange-600  cursor-pointer text-lg text-orange-500 mx-2" />
                </div>
              </div>
            </li>
          })}
        </ol>
        <h3 className="font-bold mb-8">SubTotal : ₹{total}</h3>

      </div>
      <div className="mx-3">
        <button disabled={disabled} className=" bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 text-black  rounded w-32 text-xl  mx-auto">Pay ₹{total}</button>
      </div>
    </div>
  )
}

export default Checkout