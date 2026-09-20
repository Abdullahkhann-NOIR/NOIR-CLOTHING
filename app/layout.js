import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-inter' })

export const metadata = {
  title: 'NOIR — Everyday Essentials',
  description: 'Simple. Clean. Timeless. Minimalist luxury essentials by NOIR.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  )
}
