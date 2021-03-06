import styles from "./styles.module.scss";

import Link from 'next/link';
import Image from 'next/image';

import logo from "../../public/logo.png"

const Header = () => {

    return (
        <header className={styles.Header}>

            <div className={styles.Header__logo}>
                <Link href="/"><a><Image src={logo} alt="Logo NexJs" width="50px" height="50px" /></a></Link>
            </div>

            <ul className={styles.Header__menu}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/prodotti"><a>Prodotti</a></Link>
                </li>
                <li>
                    <Link href="/contatti"><a>Contatti</a></Link>
                </li>
            </ul>

        </header>
    )

}

export default Header;