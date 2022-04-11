/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from 'mongoose';

const stickers = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container bg-red p-2 py-24 mx-auto ">
          <div className="flex flex-wrap justify-evenly  ">
           {(Object.keys(products).length==0) &&
             <p>Sorry! All the stickers are currently out of stock.New stocks coming soon.Stay tuned.</p>
            }
            {Object.keys(products).map((p) => {
              return <div key={products[p]._id} className="lg:w-1/5 md:w-1/4 p-5 m-3 border rounded-md border-orange-500 w-full shadow-lg">
                <Link passHref={true} href={`/products/${products[p].slug}`}>
                  <div>
                    <a className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="h-1/4 m-auto block " src={products[p].img} />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">stickers</h3>
                      <h3 className="text-gray-900 title-font text-lg font-medium">{products[p].title}</h3>
                      <p className="mt-1">₹{products[p].price}</p>
                      <div className="mt-1">
                        {products[p].size.includes("S") && <span className="mx-1 px-1 border border-black">S</span>}
                        {products[p].size.includes("M") && <span className="mx-1 px-1 border border-black">M</span>}
                        {products[p].size.includes("L") && <span className="mx-1 px-1 border border-black">L</span>}
                        {products[p].size.includes("Xl") && <span className="mx-1 px-1 border border-black">Xl</span>}
                      </div>
                      <div className="mt-1">
                        {products[p].color.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[p].color.includes("yellow") && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[p].color.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[p].color.includes("orange") && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: "stickers" })
  let stickers = {}
  for (let item of products) {
    if (item.title in stickers) {
      if (!stickers[item.title].color.includes(item.color) && item.availableQty > 0) {
        stickers[item.title].color.push(item.color);
      }
      if (!stickers[item.title].size.includes(item.size) && item.availableQty > 0) {
        stickers[item.title].size.push(item.size);
      }
    } else {
      stickers[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        stickers[item.title].color = [item.color]
        stickers[item.title].size = [item.size]
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(stickers)) },
  }
}

export default stickers