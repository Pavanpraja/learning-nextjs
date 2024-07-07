import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
     <div className="flex justify-between px-[2rem] py-[1rem] bg-[#e2e2e231] border-b-[0.1rem] border-black">
        <ul className="flex gap-[1rem] font-semibold text-[1.3rem]">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
     </div> 
    </nav>
  )
}

export default Navbar
