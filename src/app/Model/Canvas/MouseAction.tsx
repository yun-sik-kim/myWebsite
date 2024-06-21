// "use client"

// import { useState } from "react";

// export default function MouseAction() {
//     const [position, setPosition] = useState({
//         x:0,
//         y:0
//     });

//     return (
//         <div
//           onPointerMove={e => {
//             setPosition({
//               x: e.clientX,
//               y: e.clientY
//             });
//           }}
//           style={{
//             position: 'relative',
//             width: '100vw',
//             height: '100vh',
//           }}
//           class='display: none'
//           >
//           <div style={{
//             position: 'absolute',
//             backgroundColor: 'white',
//             borderRadius: '50%',
//             transform: `translate(${position.x}px, ${position.y}px)`,
//             left: -10,
//             top: -10,
//             width: 20,
//             height: 20,
//           }} 
//           class="pointer-events-none"
//           />
//         </div>
//       );
// }