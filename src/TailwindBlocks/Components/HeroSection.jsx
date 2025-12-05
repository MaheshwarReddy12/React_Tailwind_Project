import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <section className="body-font bg-BgColor text-TextColor">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor">Discover the Joy of Playtime
        <br className="hidden lg:inline-block"/>with Toys That Spark Imagination
      </h1>
      <p className="mb-8 leading-relaxed">At Happy Dolls, we believe every child deserves a world of wonder. Our toys are crafted to inspire imagination, encourage learning, and bring smiles to little faces. Whether it's a cuddly companion or a creative playset, each piece is designed with love, safety, and joy in mind.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop Now</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/Images/toy_image1.png"/>
    </div>
  </div>
</section>
    </section>
  )
}

export default HeroSection