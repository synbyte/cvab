"use client"
import { usePathname } from "next/navigation"
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function Nav() {
    const pathname = usePathname()
    return (
        <nav className={`${raleway.className} top-0 z-50 fixed w-full py-3 shadow shadow-gray-400 bg-cyan-50/10 backdrop-blur-lg align-baseline flex`}>
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
            <li className=" text-orange-500 font-bold">
              <a id="link" href="https://treatment-court.clark.wa.gov/?id=1">
                Web Report
              </a>
            </li>
          </ul>
        </nav>
    )
}