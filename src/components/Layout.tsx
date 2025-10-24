import React from 'react'
import { IChildren } from "../components/interfaces"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children} : IChildren) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Navbar/>
        {children}
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default Layout