// 'use client'

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import DesignSystem from './components/MainPage/DesignSystem';
import TypeWriter from './components/TypeWriter';

// gsap.registerPlugin(ScrollTrigger);

export default function Home(){


  return (
    <>
      {/* <DesignSystem></DesignSystem> */}
      <TypeWriter>
        Welcome || Yunsik's Archieve
      </TypeWriter>
      <TypeWriter>
        In the vast landscape of digital collections, Yunsik's Archive stands as a testament to the power of personal curation and technological preservation. This unique repository, carefully crafted and maintained by its namesake curator, offers visitors an intimate glimpse into a world where technology, art, and human experience intersect.
        At its core, Yunsik's Archive serves as more than just a digital storage space—it's a living, breathing chronicle of technological evolution and creative expression. The collection spans multiple disciplines, from meticulously documented code repositories to thoughtfully designed user interfaces, each piece carefully selected to tell its own story within the larger narrative.
        What sets this archive apart is its distinctive organizational approach. Rather than following traditional archival methods, Yunsik has developed a dynamic cataloging system that allows for organic connections between seemingly disparate elements. Visitors can traverse through various sections, discovering unexpected links between projects, inspirations, and outcomes.
        The archive also serves as an educational resource, offering insights into development processes, design decisions, and problem-solving approaches. Through detailed documentation and case studies, it provides valuable learning opportunities for both aspiring developers and seasoned professionals.
        As digital preservation becomes increasingly crucial in our fast-paced technological world, Yunsik's Archive demonstrates how personal collections can contribute to the broader dialogue about digital heritage and innovation. It stands as a bridge between past achievements and future possibilities, inviting visitors to explore, learn, and draw inspiration from its carefully curated contents.
      </TypeWriter>
    </>
  )
};

