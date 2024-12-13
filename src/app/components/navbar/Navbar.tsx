"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    
    const pathname = usePathname()

    

    return ( 
        <header className="p-4 bg-transparent py-5 px-[170px] text-[24px] text-white z-50">
            <nav className="flex justify-between">
                <span className="text-white">Home</span>

                <span className="border-l-2 px-5 flex border-red-700 text-gray-500 items-center">
                    Search
                    <svg className="ml-14 w-8 h-8 text-red-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                </span>

                <ul className="flex gap-[100px]">  
                    <li>New Releases</li>
                    <li>
                        <Link href="/popular">
                            Popular
                        </Link>
                    </li>
                    <li>Genres</li>
                </ul>

                <button className="bg-red-700 px-3 py-1 rounded-md transition hover:bg-red-600">Login</button>
            </nav>
        </header>
     );
}
 
export default Navbar;
