'use client'
import React, { useState } from 'react'
import styles from './form.module.scss'
interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = async () => {
    if (!email) {
      setMessage("Please enter an email");
      return;
    }
    const res = await fetch("/api/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Subscription successful!");
      setEmail("");
    } else {
      setMessage(`${data.message}`);
      setEmail("");
    }
  }

  if (!isOpen) return null;
  return (
    <div className={` ${styles.overlay}`} onClick={onClose}>
      <div className={`w-[60%] h-auto bg-white rounded md:px-10 md:py-4 px-4 py-2`} onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between'>
          <p className={`${styles.handWritten}`}>Subscribe to my latest blog...</p>
        </div>

        <div className='md:flex md:flex-row flex flex-col w-full md:pr-20 pr-0'>
          <input
            type="email"
            value={email}
            placeholder="love@thankyou.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`h-[26px] md:h-[38px] md:text-[32px] text-[20px] flex-1 mr-2 self-center focus:outline-none bg-transparent text-[#3c3f75]`}
          />

          <button
            type="button"
            className={`${styles.button} flex`}
            onClick={subscribe}
          >
            <span className='mr-2'> Let&apos;s go</span>
            <span>:)</span>
          </button>
        </div>
        <button className={`${styles.rejectButton} flex justify-center w-full`} onClick={onClose}>No thank you...</button>
        {message && (
          <p className={`${styles.handWritten} flex justify-center self-center w-full`}>{message}</p>
        )}
      </div>
    </div>
  )
}

export default SubscribeModal