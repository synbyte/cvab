"use client"
import { usePathname } from "next/navigation"
import { Raleway } from 'next/font/google'
import { useEffect, useState } from "react"

const raleway = Raleway({ subsets: ['latin'] })

export default function Nav() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] =useState(false)

   useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (!event.target.closest('.dropdown-container')) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <nav className={`${raleway.className} top-0 z-40 fixed w-full py-3 shadow shadow-gray-400 bg-cyan-50/10 backdrop-blur-lg align-baseline flex`}>
          <ul className={`nav text-cyan-900 text-sm md:text-lg space-x-5`}>
            <li className="">
              <a id="link" href="/"
              className={pathname === '/' ? 'underline underline-offset-4' : ''}>
                Home
              </a>
            </li>
            <li className="">
              <a id="link" href="/support"
              className={pathname === '/support' ? 'underline underline-offset-4' : ''}>
                Groups/Resources
              </a>
            </li>
            <li className="">
              <a id="link" href="/forms"
              className={pathname === '/forms' ? 'underline underline-offset-4 ' : ''}>
                Forms
              </a>
            </li>
            <li className="text-orange-500 font-bold relative dropdown-container">
              <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Web Report</span>
              <div className={`absolute ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-md mt-2`}>
                <a href="https://treatment-court.clark.wa.gov/?id=1" className="block px-4 py-2 hover:bg-gray-100">
                  DC/DOSA
                </a>
                <a href="https://treatment-court.clark.wa.gov/?id=2" className="block px-4 py-2 hover:bg-gray-100">
                  Other
                </a>
              </div>
            </li>
          </ul>
        </nav>
    )
}