import React from 'react'

const NavBarSection = ({change}) => {
  return (
    <div>
        <section>
            <header className="body-font bg-BgColor text-TextColor">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-TextColor mb-4 md:mb-0">
  <img src="/Images/HD_Logo.png" alt="Logo" className="w-10 h-10 p-2 bg-indigo-500 rounded-full" />
  <span className="ml-3 font-bold text-3xl text-yellow-800">Happy Dolls</span>
</a>

    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-red-500 text-red-600 cursor-pointer font-bold text-lg hover:text-xl">Home</a>
      <a className="mr-5 hover:text-sky-500 text-sky-600 cursor-pointer font-bold text-base hover:text-xl">About</a>
      <a className="mr-5 hover:text-indigo-500 text-indigo-600 cursor-pointer font-bold text-sm hover:text-xl">Our Collection</a>
      <a className="mr-5 hover:text-red-500 text-red-600 cursor-pointer font-bold text-xs hover:text-xl">ShopNow</a>
    </nav>
   <button
  onClick={change}
  className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm transition duration-300 font-bold"
>
  Dark / Light
</button>

  </div>
</header>
        </section>
    </div>
  )
}

export default NavBarSection