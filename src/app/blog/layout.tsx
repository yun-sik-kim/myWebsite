import "@/app/styles/layout.css";
import Image from "next/image";
import Link from "next/link";

import { GET } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";
import LogoutBtn from "./Model/LogoutBtn";
import WriteBtn from "./Model/WriteBtn";
import NavIcon from "../components/Navigation/NavIcon";

export default async function Layout({ children }: {children: any}) {
    let session = await getServerSession(GET);

    return (
        <>
            <nav className='navigation'>
                <ul className='nav'>
                    <Link href={'/'} style={{display: 'flex'}}><Image className="app_logo" src="/ys.svg" width={30} height={30} alt="Logo"/></Link>
                    <div id="category">
                    <li><Link className="text" href={'/'}>About</Link></li>
                    <li><Link className="text" href={'/blog'}>Blog</Link></li>
                    <li><Link className="text"href={'/portfolio'}>Portfolio</Link></li>
                    <li><Link className="text"href={'https://github.com/yun-sik-kim'}>Github</Link></li>
                    <li><Link className="text"href={'https://www.linkedin.com/in/yunsik-kim/'}>LinkedIn</Link></li>
                    {session ? <WriteBtn/> : null}
                    {session ? <LogoutBtn /> : null}
                    </div>
                    <li><Link className="contact_text" href={'/contact'}>Reach out to me</Link></li>
                    <NavIcon />
                </ul>
            </nav>
            {children}
        </>
    )
}