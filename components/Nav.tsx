"use client"
import { usePathname } from "next/navigation"
import { Raleway } from 'next/font/google'
import { useEffect, useState } from "react"
import { useCopilotReadable } from "@copilotkit/react-core"
import { formData } from "@/app/data/formData";
import { supportData } from "@/app/data/supportData";
import { docketData } from "@/app/data/docketData";

const raleway = Raleway({ subsets: ['latin'] })



export default function Nav() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] =useState(false)


    useCopilotReadable({
      description:"Therapeutic Courts Forms and Documents",
      value: formData,
    })
    useCopilotReadable({
      description:"Support groups and resources",
      value: supportData,
    })
    useCopilotReadable({
      description:"Information on court dockets and zoom links",
      value: docketData,
    })

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
          <ul className={`nav text-cyan-900 text-sm md:text-lg space-x-2 md:space-x-8`}>
            <li className="">
              <a id="link" href="/"
              className={pathname === '/' ? 'underline decoration-1 decoration-wavy transition-all underline-offset-4' : ''}>
                Home
              </a>
            </li>
            <li className="">
              <a id="link" href="/support"
              className={pathname === '/support' ? 'underline decoration-1 decoration-wavy transition-all underline-offset-4' : ''}>
                Groups/Resources
              </a>
            </li>
            <li className="">
              <a id="link" href="/forms"
              className={pathname === '/forms' ? 'underline decoration-1 decoration-wavy transition-all underline-offset-4 ' : ''}>
                Forms
              </a>
            </li>
            <li className="text-orange-500 font-bold relative dropdown-container">
              <span className="cursor-pointer text-shadow-md truncate bg-orange-500/20 border-2 border-orange-500 hover:bg-orange-500/30 transition-all rounded-full p-1" onClick={() => setIsOpen(!isOpen)}>Web Report</span>
              <div className={`absolute right-1 ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-md mt-2`}>
                <a id="drop" href="https://treatment-court.clark.wa.gov/?id=1" className="drop block px-4 py-2 hover:bg-gray-100 font-medium">
                  DC/DOSA/FTC
                </a>
                <a href="https://treatment-court.clark.wa.gov/?id=2" className="drop block px-4 py-2 hover:bg-gray-100 font-medium">
                  Other
                </a>
              </div>
            </li>
          </ul>
        </nav>
    )
}