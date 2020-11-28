import React from 'react';
import Link from 'next/link';
import s from './navbar.module.css';

const Navbar = () => {
    return ( 
        <div className={s.container}>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
        </div>
     );
}
 
export default Navbar;