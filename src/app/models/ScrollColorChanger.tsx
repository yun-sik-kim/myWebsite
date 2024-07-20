'use client'
import { useState, useEffect, ReactNode } from "react";
import styles from '@/app/CSS/styles.module.css'

interface ScrollColorChangerProps {
    startColour: string;
    endColour: string;
    percentage: number;
    children: ReactNode;
  }

export default function ScrollColorChanger({ startColour, endColour, percentage, children }: ScrollColorChangerProps) {

    const [scrollPercentage, setScrollPercentage] = useState(percentage);

    useEffect(() => {
        setScrollPercentage(percentage);
    }, [percentage]);

    const containerStyle = {
        backgroundImage: `linear-gradient(to top, ${startColour} 0%, ${endColour} ${scrollPercentage * 100}%)`,
        // minHeight: '100vh',
        // transition: 'background 0.3s ease',
    };

    const textStyle = {
        backgroundImage: 'inherit',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <div className={styles.test} style={containerStyle}>
            <div style={textStyle}>
                {children}
            </div>
        </div>
    );
}