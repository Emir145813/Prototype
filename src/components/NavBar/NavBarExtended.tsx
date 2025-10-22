"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBarExtended() {

  const pathname = usePathname()
  const navitems =[
    {
      id : 1,
      name : "Home",
      href : "/"
    },
    {
      id : 2,
      name : "Call US",
      href : "/callus"
    },
    {
      id : 3,
      name : "About US",
      href : "/aboutus"
    }
  ]

  return (
    <div className='hidden md:inline'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className='flex'>
            {
              navitems.map((item)=> (
                <NavigationMenuLink key={item.id} asChild>
                  <Link className={pathname === item.href ? "bg-green-400 font-bold rounded-4xl" : "text-white"} href={item.href}>{item.name}</Link>
                </NavigationMenuLink>
              ))
            }
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavBarExtended