// 'use client'

// import Image from "next/image"

// import { useEffect, useRef, useState } from "react"
// import TextMarquee from "./components/TextMarquee/TextMarquee"
// import ScrollColorChanger from "./models/ScrollColorChanger"
// import { Charis_SIL } from 'next/font/google'
// const charis = Charis_SIL({
//     subsets: ['latin'],
//     weight: ['400', '700'],
//     style: ['normal', 'italic'],
//     display: 'swap',
// })

// export default function mainPage() {
//     const windowRef = useRef<HTMLDivElement>(null);

//     useEffect(()=>{
//         if (windowRef.current) {
//             const width = window.innerWidth;
//             const height = window.innerHeight;
//         }
//     })

//     return (
//         <div ref={windowRef}
//         className={charis.className}
//         style={
//         {width: '100vw', 
//         height: '200vh',
//         background: '#007AFF',
//         fontSize: '72px',
//         color: '#F2F2F7',
//         }}>
//             <ScrollColorChanger startColour="#70BDA4" endColour="#F9F871">
//                 <h6>Hi!</h6>
//             </ScrollColorChanger>
//             {/* <div style={{width: '100vw', height: '100vh', position: 'fixed'}}>
//                 <div style={{transform: `rotate(180deg)`,position: 'relative', top: '2%'}}>
//                     <TextMarquee text={`Intuitive developer Intuitive developer Intuitive developer`} speed={60} />
//                 </div>
//                 <div style={{transform: `rotate(90deg)`, position: 'relative', right: '45%'}}>
//                     <TextMarquee text={`Yunsik Kim Yunsik Kim Yunsik Kim Yunsik Kim`} speed={60} />
//                 </div>
//                 <div style={{transform: `rotate(270deg)`, position: 'relative', left: '44%'}}>
//                     <TextMarquee text={`Yunsik Kim Yunsik Kim Yunsik Kim Yunsik Kim`} speed={60} />
//                 </div>
//                 <div style={{position: 'relative', top: '50%'}}>
//                     <TextMarquee text={`Intuitive developer Intuitive developer Intuitive developer`} speed={60} />
//                 </div>
//             </div>
//             <div>
//                 <h1>Intuitive developer</h1>
//                 <h2>Yunsik Kim</h2>
//                 <h1>Intuitive developer</h1>
//                 <h2>Yunsik Kim</h2>
//                 <h1>Intuitive developer</h1>
//                 <h2>Yunsik Kim</h2>
//                 <h1>Intuitive developer</h1>
//                 <h2>Yunsik Kim</h2>
//                 <Image className="app_logo" src="/ys.svg" width={320} height={320} alt="Logo"/>
//             </div> */}
//         </div>
//     )
// }