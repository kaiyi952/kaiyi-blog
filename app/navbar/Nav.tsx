'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from "./nav.module.scss";
import Link from 'next/link';
import SearchBar from './searchbar';
import Image from 'next/image';
import anime, { AnimeInstance } from 'animejs';

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
      easing: "linear",
      value: 1,
      direction: "alternate",
      update(anim) {
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
    <div className={`flex justify-between py-4 px-8 items-center ${styles.handWritten} z-50`}>
      <div className='flex items-center'>
        <Link href="/" style={{ color: '#2733f5' }} ref={leftElemRef}>KAI952</Link>
        <Image
          style={{ left: `${left}px` }}
          onClick={handleAnimatedImageClick}
          ref={imageRef}
          src="/skate-icon.png"
          width={60}
          height={60}
          alt="Picture of the author"
          className='ml-2'
        />
      </div>
      <div>
        <Link href="/blog" style={{ color: '#2733f5' }} className='mr-4' ref={rightElemRef}>Blog</Link>
        <Link href="/" className='ml-8 hidden md:inline-block' style={{ color: '#2733f5' }}>Log in</Link>
      </div>

    </div>
  )
}

export default Nav