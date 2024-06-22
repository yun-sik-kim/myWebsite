import LoginBtn from "./LoginBtn"
import styles from "@/app/wndlswkd/CSS/page.module.css"

export default function Login(){
    return (
        <div className={styles.grid_system}>
            <LoginBtn />
        </div>
    );
}