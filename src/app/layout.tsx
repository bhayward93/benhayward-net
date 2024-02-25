import './globals.css'
import type { Metadata, Viewport } from 'next'
import { fontClasses } from '../configs/fonts'
import { TopNav } from '../components/topnav/topnav'
import { SideLinks } from '../components/side-links/side-links'
import { Footer } from '../components/footer/footer'
import { config } from '../configs/siteConfig'
import { ReactNode } from 'react'

/** Metadata export. */
export const metadata: Metadata = config.metadata;

/** Viewport export. */
export const viewport: Viewport = config.viewport;

/** Root layout. */
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontClasses} bg-white`}>
        <TopNav></TopNav>
        <SideLinks className="hidden xl:flex fixed z-20 top-[20%] left-20 "></SideLinks>  
        { children }
        <Footer/>
      </body>
    </html>
  )
}
