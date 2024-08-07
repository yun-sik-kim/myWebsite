import type { Metadata } from "next";
import localFont from 'next/font/local'

import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navigation/Navbar";
import LogoutBtn from "./blog/Model/LogoutBtn";
import WriteBtn from "./blog/Model/WriteBtn";
import NavIcon from "./components/Navigation/NavIcon";
import FakeNav from "./models/FakeNav";

import "./styles/layout.css";

import { GET } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";

const myFont = localFont({ src: './../../public/fonts/PretendardVariable.woff2' })

// this is instead of <Head>
export const metadata: Metadata = {
  title: "Frontend Developer Yunsik Kim",
  description: "Frontend Developer Yunsik's website",
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon-180x180.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session = await getServerSession(GET);
  
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <Navbar>
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
        </Navbar>
        {children}
      </body>
    </html>
  );
}