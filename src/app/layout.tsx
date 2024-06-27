import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./CSS/globals.css";
import Image from "next/image";
import Link from "next/link";

import { GET } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";
import LogoutBtn from "./Model/LogoutBtn";
import WriteBtn from "./Model/WriteBtn";

const myFont = localFont({ src: './../../public/fonts/PretendardVariable.woff2' })

export const metadata: Metadata = {
  title: "Frontend Developer Yunsik Kim",
  description: "Frontend Developer Yunsik's website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session = await getServerSession(GET);
  // !!! DELETE after test!!!
  if (session) {  
    console.log(session)
  }
  
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <nav className='navigation'>
          <ul className='nav'>
            <div id="category">
              <li><Link href={'/'}><Image className="app_logo" src="/ys.svg" width={30} height={30} alt="Logo"/></Link></li>
              <li><Link className="text" href={'/'}>blog</Link></li>
              <li><Link className="text"href={'/portfolio'}>portfolio</Link></li>
            </div>
            <div>
              {session ? <WriteBtn/> : null}
              {session ? <LogoutBtn /> : null}
            </div>
            <li><Link className="contact_text" href={'/contact'}>Reach out to me</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}