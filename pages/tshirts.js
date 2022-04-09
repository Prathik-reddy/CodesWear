//
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from 'mongoose';

const tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container bg-red p-2 py-24 mx-auto ">
          <div className="flex flex-wrap justify-evenly  ">
            {products.map((p) => {
              return <div key={p._id} className="lg:w-1/5 md:w-1/4 p-5 m-3 border rounded-md border-orange-500 w-full shadow-lg">
                <Link passHref={true} href={`/products/${p.slug}`}>
                  <div>
                    <a className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="h-1/4 m-auto block " src={p.img} />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                      <h3 className="text-gray-900 title-font text-lg font-medium">{p.title}</h3>
                      <p className="mt-1">₹{p.price}</p>
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
  let products = await Product.find({category:"tshirts"})

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }
  }
}

export default tshirts