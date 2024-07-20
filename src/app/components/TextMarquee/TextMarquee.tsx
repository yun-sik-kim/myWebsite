'use client'
import React, { useEffect, useRef, useState } from 'react';


// : React.FC<TextMarqueeProps>
// export default function TextMarquee({ text, speed = 50, degree }: { text: string, speed?: number, degree: number }) {
export default function TextMarquee({ text, speed = 50 }: { text: string, speed?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [animationDuration, setAnimationDuration] = useState(0);

    useEffect(() => {
        if (containerRef.current && textRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const textWidth = textRef.current.offsetWidth;
            const duration = textWidth / speed;
            setAnimationDuration(duration);
        }
    }, [text, speed]);

    return (
        <div
        ref={containerRef}
        style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            // background: '#F2F2F7',
            // color: '#007AFF',
        }}
        >
            <div
                style={{
                display: 'inline-block',
                animation: `marquee ${animationDuration}s linear infinite`,
                }}
            >
                <span ref={textRef}>{text}</span>
                <span style={{ marginLeft: '50px' }}>{text}</span>
            </div>
            <style jsx>{`
                @keyframes marquee {
                0% {
                    transform: translate(0, 0);
                }
                100% {
                    transform: translate(-50%, 0);
                }
                }
            `}</style>
        </div>
    );
};