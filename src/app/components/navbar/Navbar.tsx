"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    
    const pathname = usePathname()

   const navs = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Movies-list',
        link: '/movies-list'
    },
    {
        title: 'Contact',
        link: '/contact-us'
    },
    
   ]
    

    return ( 
        <div className="p-4 border-b fixed top-0 w-screen bg-white z-50">
            <nav>
                <ul className="flex">  
                    {
                        navs.map((item)=>(
                            <li key={item.title} className="mr-4">
                                <Link className={`${item.link === pathname && 'text-blue-600'}`} href={item.link}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>

                {/* <button 
                    onClick={handleClick}
                    className="bg-blue-500 text-white px-6 py-2 rounded">
                    Click Me!
                </button> */}
            </nav>
        </div>
     );
}
 
export default Navbar;
