// 'use client'

// import React, { useState, useEffect } from 'react';
// import ScrollColorChanger from './models/ScrollColorChanger';

// import styles from './CSS/styles.module.css'

// export default function Home() {
//     const [windowHeight, setWindowHeight] = useState(0);
//     const [scrollY, setScrollY] = useState(0);
//     const [currentSection, setCurrentSection] = useState(0);

//     const sections = ['Home', 'About Me', 'Experiences', 'Projects', 'Contact'];

//     useEffect(() => {
//         function handleResize() {
//         setWindowHeight(window.innerHeight);
//     }

//     function handleScroll() {
//         setScrollY(window.scrollY);
//     }

//     function calculateSection() {
//         const newSection = Math.round((scrollY / windowHeight) * 100) / 100;
//         setCurrentSection(newSection);
//     }

//     // Initial setup
//     handleResize();
//     handleScroll();
//     calculateSection();
//     console.log(currentSection)

//     // Add event listeners
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup
//     return () => {
//         window.removeEventListener('resize', handleResize);
//         window.removeEventListener('scroll', handleScroll);
//     };
//     }, [windowHeight, scrollY]);


//     return (
//         <div style={{ height: `${sections.length * 100}vh` }}>
//             <ScrollColorChanger startColour='#007AFF' endColour='#F9F871' percentage={scrollY / windowHeight}>
//                 <h1>Hi</h1>
//                 <h1>Hi</h1>
//                 <h1>Hi</h1>
//                 <h1>Hi</h1>
//                 <h1>Hi</h1>
//                 <h1>Hi</h1>
//             </ScrollColorChanger>
//         </div>
//     );
// }