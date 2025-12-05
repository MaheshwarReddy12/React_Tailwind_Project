import React from 'react'

const ContentSection = () => {
  return (
    <section>
        <section className="body-font bg-BgColor text-TextColor">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/Images/toy_image3.png"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-TextColor">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-TextColor text-lg">Phoebe Caulfield</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">At Happy Dolls, Phoebe brings creativity and charm to every toy we design. Her passion for playful storytelling and child-friendly design makes her a beloved part of our team.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Happy Dolls is more than just a toy brand — it's a celebration of childhood wonder. Our collection features thoughtfully crafted toys that inspire creativity, spark imagination, and encourage joyful learning. From plush companions to interactive playsets, each product is designed with care, safety, and love. We believe in the power of play to shape young minds and create lasting memories. Whether you're shopping for a birthday gift or building a playroom, Happy Dolls offers something magical for every child. Join us in bringing smiles, laughter, and adventure to families everywhere through toys that truly make a difference.</p>
          <a className="text-indigo-500 inline-flex items-center cursor-pointer">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
  )
}

export default ContentSection