import Link from "next/link";
import classes from "./header.module.css";
import {useEffect, useState} from "react";

export default function Header(){
    const [showNav, setShowNav] = useState(false);

    function toggleNavBar() {
        setShowNav((prevShowNav) => !prevShowNav);
    }

    useEffect(() => {
        function handleOutsideClick(event) {
            if (showNav && !event.target.closest(`.${classes.header}`)) {
                setShowNav(false);
            }
        }
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showNav]);

        return (
        <header className={classes.header}>
            <h1><Link href="/" className={classes.logo}>Betours</Link></h1>
            <div onClick={toggleNavBar} className={classes.burger}>&#9776;</div>

            {/*Mobile Navigation*/}
            <nav onClick={toggleNavBar} className={`${classes.nav} ${showNav ? classes.show : ""}`}>
                <ul>
                    <li><Link href="/events">All Events</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </nav>
            {/*Desktop Navigation*/}
            <nav className={classes.desktopNav}>
                <Link href="/events">All Events</Link>
                <Link href="/about">About</Link>
                <Link href="/">Contact</Link>
            </nav>
        </header>
    )
}
