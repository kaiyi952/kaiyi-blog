import React from 'react'
import styles from "./nav.module.scss";
import Link from 'next/link';
import SearchBar from './searchbar';
import Image from 'next/image';

function Nav() {
    return (
        <div className={`flex justify-between py-4 px-8 items-center ${styles.handWritten}`}>
            <div className='flex items-center'>
                <Link href="/" style={{ color: '#2733f5' }}>KAI952</Link>
                <Image
                    src="/skate-icon.png"
                    width={60}
                    height={60}
                    alt="Picture of the author"
                    className='ml-2'
                />
            </div>
            <div>
                <Link href="/blog" style={{ color: '#2733f5' }} className='mr-4'>Blog</Link>
                <Link href="/" className='ml-8 hidden md:inline-block' style={{ color: '#2733f5' }}>Log in</Link>
            </div>

        </div>
    )
}

export default Nav