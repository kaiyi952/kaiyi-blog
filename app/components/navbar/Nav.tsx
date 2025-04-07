'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from "./nav.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import anime, { AnimeInstance } from 'animejs';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton
} from '@clerk/nextjs'

function Nav() {
  const animeController = useRef<AnimeInstance | null>(null);
  const currentLeft = useRef({ value: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const leftElemRef = useRef<HTMLAnchorElement>(null);
  const rightElemRef = useRef<HTMLAnchorElement>(null);
  const bounds = useRef({ l: 0, r: 0, distance: 0, selfWidth: 0 });
  const [left, setLeft] = useState(0);

  function updateBounds() {
    if (!leftElemRef.current || !rightElemRef.current) return;
    if (!imageRef.current) return;

    const leftMostRect = leftElemRef.current.getBoundingClientRect();
    const rightMostRect = rightElemRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    bounds.current.l = leftMostRect.right;
    bounds.current.r = rightMostRect.left;
    bounds.current.selfWidth = imageRect.width;
    bounds.current.distance = bounds.current.r - bounds.current.l - bounds.current.selfWidth - 8;
  }

  useLayoutEffect(() => {
    updateBounds();
  });

  useEffect(() => {
    animeController.current = anime({
      targets: currentLeft.current,
      autoplay: false,
      easing: "easeInOutSine",
      value: 1,
      direction: "alternate",
      update() {
        const val = currentLeft.current.value;
        if (!imageRef.current) return;
        setLeft(bounds.current.l + val * bounds.current.distance);
      },
    });
    // Should never happen. Just to shut ts up.
    if (!imageRef.current) {
      console.error("WTF?");
      return;
    }

    const rect = imageRef.current.getBoundingClientRect();
    updateBounds();
    imageRef.current.style.position = 'absolute';
    imageRef.current.style.left = `${rect.left}px`;
    imageRef.current.style.top = `${rect.top}px`;
  }, []);

  function handleAnimatedImageClick() {
    console.log("click");
    if (!animeController.current) {
      return;
    }
    console.log(animeController.current.direction);
    animeController.current.play();
  }

  return (
    <div className={`flex justify-between py-4 px-8 items-center ${styles.handWritten} z-50 `}>
      <div className='flex items-center'>
        <Link href="/" style={{ color: '#2733f5' }} ref={leftElemRef}>KAI952</Link>
        <Image
          style={{ left: `${left}px` }}
          onClick={handleAnimatedImageClick}
          ref={imageRef}
          src="/skate-icon.PNG"
          width={60}
          height={60}
          alt="Picture of the author"
          className='ml-2 w-12 sm:w-16'
        />
      </div>
      <div>
        <Link href={`/blog?tag=tech`} style={{ color: '#2733f5' }} className='mr-2 md:mr-6' ref={rightElemRef}>blog</Link>
        <SignedOut>
          <SignInButton mode='modal' >
            <button style={{ color: '#2733f5' }}>Login</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton redirectUrl='/'>
            <button style={{ color: '#2733f5' }}>
              Logout
            </button>
          </SignOutButton>
        </SignedIn>
      </div>

    </div>
  )
}

export default Nav