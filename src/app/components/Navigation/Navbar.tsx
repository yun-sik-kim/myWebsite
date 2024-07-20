'use client'
import { ReactNode, CSSProperties } from "react"
import styles from './NavBar.module.css'

export default function Navbar({ children }: {children: ReactNode}) {

    return (
        <div className={styles.nav_container}>
            {children}
        </div>
    )
}