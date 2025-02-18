import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(true)

  const naviItem = [
    { id: 1, item: 'Home' },
    { id: 2, item: 'About' },
    { id: 4, item: 'Experience' },
    { id: 5, item: 'Contact Us' },
  ]

  return (
    <>
      <div className="max-w-full container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={'https://t3.ftcdn.net/jpg/07/13/35/82/360_F_713358254_pM12hayFvGkMbXwU1wERawwC2Tu3Mfpy.jpg'} alt="" className="h-14 w-14 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Varun{' '}
              <p className="font-light text-sm text-slate-600">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div>
            <ul className="hidden space-x-8 md:flex">
              {naviItem.map((v) => (
                <li key={v.id} className="hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to={v.item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {v.item}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <GiHamburgerMenu size={24} /> : <IoCloseSharp size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="bg-white">
          {!menu && (
            <ul className="md:hidden flex flex-col items-start gap-2 mt-7 h-screen">
              {naviItem.map((v) => (
                <li key={v.id} className="hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to={v.item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    onClick={() => setMenu(true)} // close menu on link click
                  >
                    {v.item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
