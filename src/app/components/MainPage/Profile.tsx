'use client'
import { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from './DesignSystem.module.css'

const Profile = forwardRef<HTMLElement, {}>((props, ref) => {
    const duration = 0.25;
    const stagger = 0.025;
    
    return (
        <section ref={ref} className={styles.profile}>
            <div>
                <motion.h1
                    initial='initial'
                    whileHover='hovered'
                    style={{
                        position: 'relative',
                        display: 'block',
                        overflow: 'hidden',
                        whiteSpace: 'pre'
                    }}
                >
                    <div>
                        {       
                            'Intuitive Developer'.split("").map((char, i) => {
                                return (
                                    <motion.span 
                                        key={i}
                                        style={{
                                            display: 'inline-block'
                                        }}
                                        variants={{ 
                                            initial: { y: 0 },
                                            hovered: { y: '-110%' }
                                        }}
                                        transition={{
                                            duration: duration,
                                            ease: 'easeInOut',
                                            delay: stagger * i,
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                )
                            })
                        }
                    </div>
                    <div style={{position: 'absolute', inset: 0,}}>
                        {
                            'Intuitive Developer'.split("").map((char, i) => {
                                return (
                                    <motion.span 
                                        key={i}
                                        style={{
                                            display: 'inline-block'
                                        }}
                                        variants={{ 
                                            initial: { y: '100%' },
                                            hovered: { y: 0 }
                                        }}
                                        transition={{
                                            duration: duration,
                                            ease: 'easeInOut',
                                            delay: stagger * i,
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                )
                            })
                        }
                    </div>
                </motion.h1>

                <motion.div
                    initial='initial'
                    whileHover='hovered'
                    style={{
                        position: 'relative',
                        display: 'block',
                        overflow: 'hidden',
                        whiteSpace: 'pre'
                    }}
                >
                    <div>
                        {       
                            'Yunsik Kim'.split("").map((char, i) => {
                                return (
                                    <motion.p 
                                        key={i}
                                        style={{
                                            display: 'inline-block'
                                        }}
                                        variants={{ 
                                            initial: { y: 0 },
                                            hovered: { y: '-110%' }
                                        }}
                                        transition={{
                                            duration: duration,
                                            ease: 'easeInOut',
                                            delay: stagger * i,
                                        }}
                                    >
                                        {char}
                                    </motion.p>
                                )
                            })
                        }
                    </div>
                    <div style={{position: 'absolute', inset: 0,}}>
                        {
                            'Yunsik Kim'.split("").map((char, i) => {
                                return (
                                    <motion.p 
                                        key={i}
                                        style={{
                                            display: 'inline-block'
                                        }}
                                        variants={{ 
                                            initial: { y: '100%' },
                                            hovered: { y: 0 }
                                        }}
                                        transition={{
                                            duration: duration,
                                            ease: 'easeInOut',
                                            delay: stagger * i,
                                        }}
                                    >
                                        {char}
                                    </motion.p>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </div>
            <small>With a passion for detail and a deep understanding of modern technologies, I can transform complex ideas into seamless, intuitive experiences.</small>
        </section>
    );
});

Profile.displayName = 'Profile';

export default Profile;