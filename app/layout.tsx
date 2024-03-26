import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <nav className='fixed top-0  fixed w-full py-3 shadow-md shadow-gray-900 bg-cyan-800 rounded-b-2xl border-b-2 border-cyan-500'><ul className='nav text-cyan-100 text-lg space-x-5'><li className='transition hover:-translate-y-0.5'><a  id='link'href="/">Home</a></li ><li className='transition hover:-translate-y-0.5'><a id='link' href="/forms">Forms</a></li><li className='transition hover:-translate-y-0.5 text-orange-300'><a id='link' href="https://treatment-court.clark.wa.gov/?id=1">Web Report</a></li></ul> </nav>
        <div className=''>{children}</div></body>
    </html>
  )
}
