'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DesignSystem from './components/MainPage/DesignSystem';

gsap.registerPlugin(ScrollTrigger);

export default function Home(){


  return (
    <>
      <DesignSystem></DesignSystem>
    </>
  )
};

