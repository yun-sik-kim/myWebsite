"use client"
import { CSSProperties, ReactNode } from "react"
import { motion } from "framer-motion"

interface TypeWriterProps {
    children: ReactNode;
    style?: CSSProperties;  // Allow any valid CSS properties
    className?: string;     // Allow CSS classes
  }

export default function TypeWriter({ children, style, className }: TypeWriterProps) {
    return (
        <motion.div style={style} className={className}>
            {children}
        </motion.div>
    )
}