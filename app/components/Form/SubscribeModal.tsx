'use client'
import React from 'react'
import styles from './form.module.scss'
import { FaRegHandPointLeft } from 'react-icons/fa6';
interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}


function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  if (!isOpen) return null;
  return (
    <div className={` ${styles.overlay}`} onClick={onClose}>
      <div className={`w-[60%] h-[200px] bg-white rounded px-10 py-4 `} onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between'>
          <p className={`${styles.handWritten} `}>Subscribe to my latest blog...</p>
          <button onClick={onClose} className={`${styles.handWritten} pr-8`}>x</button>
        </div>

        <div className='flex w-full pr-20'>
          <input
            type="email"
            placeholder="love@thankyou.com"
            required
            className={`flex-1 mr-2 focus:outline-none bg-transparent text-[#3c3f75]`}
          />

          <button
            type="submit"
            className={`${styles.button} flex`}
          >
            <span className='mr-2'> Let&apos;s go</span>
            <span>:)</span>
          </button>
        </div>
        <button className={`${styles.rejectButton} flex justify-center w-full`}>No thank you...</button>
      </div>
    </div>
  )
}

export default SubscribeModal