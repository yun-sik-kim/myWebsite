'use client'
import { useState, useEffect, useRef, forwardRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './DesignSystem.module.css'
import CanvasBoat from '../Canvas/CanvasBoat';
// import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

// gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);


export default function DesignSystem() {
  const black = '#1C1C1E';
  const white = '#F2F2F7';
  const brandColour = '#007AFF';
  const accentColour = '#F9F871';

  const [showCanvas, setShowCanvas] = useState(false);

  const mockupLogoTopRef = useRef<HTMLDivElement | null>(null);
  const mockupLogoBotRef = useRef<HTMLDivElement | null>(null);
  const designSystemRef = useRef<HTMLDivElement | null>(null);
  const page2Ref = useRef<HTMLDivElement | null>(null);

  const designSystemWhiteRef = useRef<HTMLDivElement | null>(null);
  const typeScaleRef = useRef<HTMLDivElement | null>(null);
  const colourRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const componentsRef = useRef<HTMLDivElement | null>(null);
  const spacingRef = useRef<HTMLDivElement | null>(null);
  const accentsRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const page3Ref = useRef<HTMLDivElement | null>(null);
  
  useEffect(()=>{
    const mockupLogoTop = mockupLogoTopRef.current;
    const mockupLogoBot = mockupLogoBotRef.current;
    const designSystem = designSystemRef.current;
    const page2 = page2Ref.current;

    // !!! NOTE: for code simmplicity, I have sacrifised ref null check and gurenteed every ref will be not null.
    const fromViewPortHeight = designSystem!.getBoundingClientRect().bottom; // position of the container relative to the viewport.
    const fromViewPortHeightLogo = mockupLogoBot!.getBoundingClientRect().bottom; // position of the container relative to the viewport.
    const currentScrollPosition = document.documentElement.scrollTop;   // current scroll position to get the total height from the top of the document.

    const designSystemWhite = designSystemWhiteRef.current;
    const page3 = page3Ref.current;

    const typeScale = typeScaleRef.current;
    // const typeScaleChildren = typeScale ? typeScale.children : [];
    const typeScaleTitle = typeScale ? typeScale.querySelector('b') : null;
    const typeScaleBox = typeScale ? typeScale.querySelector(`.${styles.type_scale_box}`) : null;
    const typeScaleBoxChildren = typeScaleBox ? Array.from(typeScaleBox.children) : [];

    const spacing = spacingRef.current;
    const spacingChildren = spacing ? Array.from(spacing.querySelectorAll(`.${styles.spacing_container} > div`)) : [];

    const colour = colourRef.current;
    const colourTitle = colour ? colour.querySelector('b') : null;
    const colourChildren = colour ? Array.from(colour.querySelectorAll(`.${styles.colour_grid} > div`)) : [];
    
    const components = componentsRef.current;
    const bComponenet = components!.querySelector(`.${styles.text}`);
    const mainComponent = components!.querySelector(`.${styles.main_component}`);
    const sub1Component = components!.querySelector(`.${styles.sub1_component}`);
    const sub2Component = components!.querySelector(`.${styles.sub2_component}`);
    const tagComponent = components!.querySelector(`.${styles.tag_component}`);

    var tl = gsap.timeline();
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: page3,
        start: `top ${fromViewPortHeight + currentScrollPosition}`,
        end: `bottom bottom`, 
        toggleActions: 'restart pause reverse pause',
        scrub: 0.5,
        anticipatePin: 1,
        onEnterBack: () => {
          console.log("Deactivate");
          setShowCanvas(false);

        },
        onLeave: () => {
          console.log("Activate Canvas");
          setShowCanvas(true); // Show canvas when reaching the bottom
        },
      }
    });
    

    tl.
    fromTo(designSystem, 
      { clipPath: 'inset(0% 0% 0% 0%)' },
      { 
        clipPath: 'inset(0% 0% 100% 0%)',
        ease: "steps(333)",
        scrollTrigger: {
          trigger: page2,
          start: `top ${fromViewPortHeight + currentScrollPosition}`,   // first: trigger element, second: viewport
          // endTrigger: page2,
          end: `+=${designSystem!.offsetHeight}`,   //by default when bottom of the trigger element hits the top of the viewport
          // end: `top top`,
          toggleActions: 'restart pause reverse pause',
          scrub: 0.5, // Smooth scrubbing, adjust value as needed
          anticipatePin: 1,
        },
      }
    )
    .fromTo(mockupLogoTop, 
      { 
        clipPath: 'inset(0% 0% 0% 0%)',
      },
      { 
        clipPath: 'inset(0% 0% 100% 0%)',
        ease: "steps(50)",
        scrollTrigger: {
          trigger: page2,
          start: `top ${fromViewPortHeightLogo + currentScrollPosition}`,   // first: trigger element, second: viewport
          end: `+=${mockupLogoTop!.offsetHeight}`,   //by default when bottom of the trigger element hits the top of the viewport
          toggleActions: 'restart pause reverse pause',
          scrub: 0, // Smooth scrubbing, adjust value as needed
          anticipatePin: 1,
        },
      }
    )
    .to(mockupLogoTop,        // !!! onComplete, onReverseComplete is too slow compare to .to
      {
        display: 'none', ease:'back',
        scrollTrigger: {
          trigger: page2,
          start: `top 15%`,
          end: 'top top',
          toggleActions: 'restart pause reverse pause',
          scrub: 1, // Smooth scrubbing, adjust value as needed
          anticipatePin: 1,
        },
      },
    )

    tl2
    .to(mockupLogoBot, {
        x: 40,
    })  
    .to(typeScaleTitle, {
      x: -150,
      // stagger: 0.1,
      ease: 'power2.inOut',
      duration: 1.5,
    })
    .to(typeScaleBoxChildren, {
      x: -150,
      stagger: 0.1,
      ease: 'power2.inOut',
      duration: 1.0,
    }, ) 
    .to(buttonsRef.current, {
      y: 200,
      clipPath: 'inset(0% 0% 100% 0%)',
      // opacity: 0,
      duration: 2.5,
      stagger: 1,
    }, '<1.3' )  
    .to(colourRef.current, {
      x: 330,
      duration: 2.5,
      ease: 'sine.inOut',
    }, '<2.5')
    .to([spacing, spacingChildren], {
      y: -600,
      stagger: 0.1,
      ease: 'power2.inOut',
      duration: 1.8,
    }, "simultaneousMove")  // Label added here
    .to(spacing, {
        opacity: 0,
        stagger: 1.5,
        ease: 'back',
        duration: 0.7, 
    }, )
    .to(mockupLogoBot, {
        clipPath: 'inset(0% 0% 0% 100%)',
        ease: 'sine.out',
        duration: 3.5,
    }, "simultaneousMove+=1.30")  // Same label used here + Starts 1.45 seconds after
    .to([typeScale, accentsRef.current], {
      opacity: 0,
      duration: 1.2,
      ease: 'sine.inOut',
    }, "simultaneousMove+=2.05")
    .to(mockupLogoBot, {
        display: 'none',
    }, 'profileMove') 
    .to(profileRef.current, {
        x: -504,
        ease: 'sine.inOut',
        duration: 2.0, // Set a specific duration for this animation
    }, 'profileMove-=0.5',  ) // Start 0.5 seconds after the previous animation ends
    .to(profileRef.current, {
        y: -430,
        ease: 'sine.inOut',
        duration: 2.0, // Set a specific duration for this animation
    }, 'profileMove+=0.5')  // Start 0.5 seconds before the previous animation ends
    .to(designSystemWhite, {
      x: 14,
      y: 7,
      duration: 0.33,
      repeat: 1,
      yoyo: true,
      ease: "elasic.out",
    }, 'collisionMove')
    .to([colourTitle, colourChildren], {
      y: (index) => 100 + Math.random() * 300, // Random Y position between 100 and 400
      x: (index) => -300 + Math.random() * 600, // Random X position between -50 and 50
      rotation: () => Math.random() * 360, // Random rotation
      opacity: 0,
      scale: 0.5,
      stagger: 0.1,
      duration: 1.5,
      ease: 'power2.in',
    }, 'collisionMove')
    .to(bComponenet, 
      {
        y: -200,
        opacity: 0,
        ease: 'power2.in',
        stagger:1.5,
        duration: 1.5,
      },
    )
    .to([sub1Component, sub2Component, tagComponent], {
        y: -200,
        opacity: 0,
        ease: 'power2.in',
        stagger:0.5,
        duration: 1.77,
    }, 'componenetMove')
    .to(mainComponent, 
      {
        width: '1200px',
        height: '200px',
        x: -882,
        y: 321,
        duration: 2.5,
      }
    )
  }, []);  

  return (
    <>
      <div className={styles.main1}>
        {/* <div ref={curtainRef} className={styles.curtain}></div> */}
        <div className={styles.design_system_container} style={{zIndex: '55'}}>
          <MockupLogo ref={mockupLogoTopRef}/>
          <MockupLogoBack ref={mockupLogoBotRef}/>
          <div ref={designSystemRef} className={styles.design_system_dark}>
            <TypeScale color={black} background={white} />
            <Colour />
            <Buttons />
            <Components background={accentColour}>
              {''}
            </Components>
            <Spacing background={white} />
            <Accents filter='brightness(0) saturate(100%) invert(92%) sepia(13%) saturate(32%) hue-rotate(197deg) brightness(100%) contrast(103%)' />
            <Profile />
          </div>
        </div>

        <div className={styles.design_system_container} style={{zIndex: '54'}}>
          <div ref={designSystemWhiteRef} className={styles.design_system_light}>
            <TypeScale ref={typeScaleRef} color={white} background={black} />
            <Colour ref={colourRef} />
            <Buttons ref={buttonsRef} />
            <Components ref={componentsRef} background={brandColour}>
              {showCanvas ? <CanvasBoat /> : ''}
            </Components>
            <Spacing ref={spacingRef} background={black}/>
            <Accents ref={accentsRef} filter={'brightness(0) saturate(100%) invert(9%) sepia(3%) saturate(1045%) hue-rotate(200deg) brightness(97%) contrast(95%)'} />
            <Profile ref={profileRef} />
          </div>
        </div>

        {/* <div className={styles.background_circle}></div> */}
      </div>



      <div ref={page2Ref} className={styles.main2}>

      </div>

      <div ref={page3Ref} className={styles.main3}>

      </div>
    </>
  );
};

const MockupLogo= forwardRef<HTMLElement>((props, ref) => {
  return (
    <header ref={ref} className={styles.mockup_logo}>
      <Image className="app_logo" src="/ys.svg" width={64} height={64} alt="Logo" style={{background:'#F2F2F7'}}/> 
      <h4>Logo</h4>
    </header> 
  )
}) 
const MockupLogoBack= forwardRef<HTMLElement>((props, ref) => {
  return (
    <header ref={ref} className={styles.mockup_logo_back}>
      <Image className="app_logo" src="/ys.svg" width={64} height={64} alt="Logo" /> 
      <h4>Logo</h4>
    </header> 
  )
}) 

const TypeScale = forwardRef<HTMLElement, { color: string, background: string }>(
  ({ color, background }, ref) => {

    return (
      <section ref={ref ?? undefined} className={styles.type_scale}>
        <b>Type Scale</b>
        <div className={styles.type_scale_box}>
          <div className={styles.h1_box}>
            <h1>H1</h1>
            <small>SemiBold 48px 49.2%</small>
          </div>
          <div className={styles.h2_box}>
            <h2>H2</h2>
            <small>SemiBold 36px 39.4%</small>
          </div>
          <div className={styles.h3_box}>
            <h3>H3</h3>
            <small>Medium 30px 31.3%</small>
          </div>
          <div>
            <h4>Subheading 1</h4>
            <small>SemiBold 24px 24.4%</small>
          </div>
          <div>
            <h5>Subheading 2</h5>
            <small>Medium 24px 28.4%</small>
          </div>
          <div>
            <strong>Bold</strong>
            <div>
              <small>Bold 20px 24.4%</small>
            </div>
          </div>
          <div>
            <p>Paragraph</p>
            <small>Regular 20px 24.2%</small>
          </div>
          <div>
            <small style={{background: background, color: color}}>Small Text</small>
            <div><small>ExtraLight 16px 24.10%</small></div>
          </div>
        </div>
      </section>
    )
  }
);

const Colour = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref ?? undefined} className={styles.colour}>
      <b>Colour</b>
      <div className={styles.colour_grid}>
        <div className={styles.colour_item} style={{backgroundColor: '#1C1C1E', border: '1px solid #D9D9D9'}}></div>
        <div className={styles.colour_item} style={{backgroundColor: '#007AFF'}}></div>
        <div className={styles.colour_item} style={{backgroundColor: '#444655'}}></div>
        <div className={styles.colour_item} style={{backgroundColor: '#70BDA4'}}></div>
        <div className={styles.colour_item} style={{backgroundColor: '#F2F2F7'}}></div>
        <div className={styles.colour_item} style={{backgroundColor: '#F9F871'}}></div>
      </div>
    </section>
  )
}
);

const Spacing = forwardRef<HTMLElement, {background: string}>(
  ({ background }, ref) => {
    const spacingElement = [4, 6, 8, 16, 32, 48, 64];

    return (
      <section ref={ref ?? undefined} className={styles.spacing}>
        <b>Spacing</b>
        <div className={styles.spacing_container}>
          {
            spacingElement.map((spacing)=>(
                <div key={spacing} style={{display:'flex', gap:'4px'}}>
                  <div 
                  className={`space${spacing.toString()}`}
                  style={{ width:`${spacing}px`, height:'24px', background: background}}>

                  </div>
                  <small>{spacing}px</small>
                </div>
              )
            )
          }
        </div>
      </section>
    );
  }
);

const Buttons = forwardRef<HTMLElement>((props, ref) => {
    return (
      <section ref={ref ?? undefined} className={styles.buttons}>
        <b>Button/Links</b>
        <div className={styles.button_box}>
          <button className={styles.default1}><b>default 1</b></button>
          <button className={styles.default2}><b>default 2</b></button>
          <button className={styles.selected}><b>selected</b></button>
          
        </div>
        <div className={styles.link_box}>
          <a href=""><small className={styles.primary}>Primary</small></a>
          <a href=""><small className={styles.secondary}>Secondary</small></a>
        </div>
        <div className={styles.effect_box}>
          <div className={styles.elipse1}></div>
          <div className={styles.effect1}>
            <small>effect 1</small>
          </div>
          <div className={styles.elipse2}></div>
          <div className={styles.effect2}>
            <small>effect 2</small>
          </div>
        </div>
      </section>
    );
  }
);



const Accents = forwardRef<HTMLElement, {filter: string}>(
  ({ filter }, ref)=>{
    return (
      <section ref={ref ?? undefined} className={styles.accents}>
        <b>Accents</b>
        <div className={styles.accents_box}>
          <Image 
            className={styles.line_decor_bot} 
            src='/edge_black.svg' width={50} height={50} alt="decoration"
            style={{
              background:'#F2F2F7', padding: '2px',}}
          />
          <Image 
            className={styles.line_decor_bot} 
            src='/edge_white.svg' width={50} height={50} alt="decoration"
            style={{
              padding: '2px',
              background:'#007AFF',
            }}
          />
          <Image 
            className={styles.line_decor_bot} 
            src='/text_decor.svg' width={150} height={30} alt="decoration"
            style={{
              padding: '2px',
              filter: filter,
            }}
          />
        </div>
      </section>
    )
  }
);

const Profile = forwardRef<HTMLElement>((props, ref)=>{
  return (
    <section ref={ref ?? undefined} className={styles.profile}>
      <div>
        <h1>Intuitive Developer</h1>
        <p>Yunsik Kim</p>
      </div>
      <small>With a passion for detail and a deep understanding of modern technologies, I can transform complex ideas into seamless, intuitive experiences.</small>
    </section>
  );
});


const Components = forwardRef<HTMLElement, {background: string, children: ReactNode}>(
  ({ background, children }, ref) => {
    return(
      <section ref={ref ?? undefined} className={styles.components}>
        <b className={styles.text}>Components</b>
        <div className={styles.components_box}>
          <div className={styles.main_component} style={{background: background}}>
            {children}
          </div>
          <div className={styles.sub1_component}></div>
          <div className={styles.sub2_component}></div>
          <div className={styles.tag_component}></div>
        </div>
      </section>
    )
});