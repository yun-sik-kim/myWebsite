'use client'

import { useState, useEffect } from "react"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; 
import '@/app/CSS/layout.css'

export default function NavIcon() {
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
          setIsMobile(window.innerWidth < 460);
        };
        // Check on initial load
        checkScreenSize();
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);

    const toggleMenu = () => {
        setIsClicked(!isClicked);
    };

    if (!isMobile) {
        return (
            null
        )
    }

    return (
        <div className='mobile_menu'
            onClick={toggleMenu}
        >
            {isClicked 
            ? <FontAwesomeIcon icon={faXmark} style={{fontSize: '24px', color: '#F2F2F7'}} /> 
            : <>
                <FontAwesomeIcon icon={faBars} style={{fontSize: '24px', color: '#F2F2F7'}} />
                <ul>
                    <li><Link className="text" href={'/'}>About</Link></li>
                    <li><Link className="text" href={'/'}>Blog</Link></li>
                    <li><Link className="text"href={'/portfolio'}>Portfolio</Link></li>
                    <li><Link className="text"href={'https://github.com/yun-sik-kim'}>Github</Link></li>
                    <li><Link className="text"href={'https://www.linkedin.com/in/yunsik-kim/'}>LinkedIn</Link></li>
                </ul>
            </>
            }
        </div>
    )
}