'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthHeader from "./components/headers/AuthHeader";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(""); // clear error message on input change
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(""); // clear previous error

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Email address is required.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Email validation is passed. Proceeding to your account...");
      setEmail(""); // reset email after successful submission
      router.push("/all/test");
    }
  };

  return (
    <>
      <AuthHeader />

      <div className='flex items-center space-x-4 p-6 mt-12'>
        <h1 className='text-8xl text-babyPowder text-opacity-85 font-medium'>Welcome to </h1>
        <span>
          <Image src="/assets/logos/brainify.png" width={210} height={210} alt="Brainify Logo" className='mt-4 ml-2' />
        </span>
      </div>

      <div className='flex items-start justify-between mt-8 mx-8'>
        <div className='w-8/12'>
          <p className='text-babyPowder text-opacity-85 text-justify text-xl'>
            Brainify is a gamified learning platform where educators can create and share coding lessons, quizzes, and assessments.
            Students can explore various programming topics, engage with interactive content, and earn badges and achievements for their progress.
            Brainify makes coding education enjoyable and motivating for everyone.
          </p>

          <form onSubmit={handleSubmit} className='flex items-center mt-10' noValidate>
            <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email address to get started" className={`border rounded-md px-4 py-3 text-chineseBlack w-96 focus:outline-none`} required aria-describedby="emailError" />

            <button type="submit" className='ml-8 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-babyPowder transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50' disabled={!!error}>
              Sign up
            </button>
          </form>
        </div>

        <div className='w-2/3 ml-24 relative -top-36'>
          <Image src="/assets/mockups/lesson-detail.png" width={600} height={600} alt="First Look of Brainify" className='h-auto border border-middleGrey rounded-md shadow-[0_20px_50px_rgba(0,0,0,7)]' />
        </div>
      </div>

      <div className='flex justify-center'>
        <Image src="/assets/quotes/feed-the-brain.png" width={1200} height={1000} alt="Feed The Brain" />
      </div>

      <div className='flex justify-center items-center space-x-44 mt-48'>
        <Image src="/assets/quotes/objective-1.png" width={360} height={360} alt="Enhance Engagement" />
        <Image src="/assets/quotes/objective-2.png" width={360} height={360} alt="Facilitate Access to Quality Education" />
        <Image src="/assets/quotes/objective-3.png" width={360} height={360} alt="Reward Achievement" />
      </div>
      
      <hr className='w-full max-w-8xl border-t-2 border-middleGrey mt-36' />

      <div className='flex justify-between items-center mt-28 mx-8'>
        <div className='flex items-center'>
          <span>
            <Image src="/assets/icons/social-media/discord.png" width={30} height={30} alt="Discord" />
          </span>
          <p className='text-babyPowder font-medium ml-2'>
            Have questions? Send me a message on{' '}
            <Link href="https://discord.gg/z8Q2XgeU" className='text-palatinateBlue font-semibold hover:underline'>
              Discord
            </Link>
          </p>
        </div>

        <div className='flex items-center'>
          <span>
            <Image src="/assets/icons/social-media/github.png" width={30} height={30} alt="GitHub" />
          </span>
          <p className='text-babyPowder font-medium ml-2'>
            Check out my{' '}
            <Link href="https://github.com/rainzyyyy/Brainify" className='text-palatinateBlue font-semibold hover:underline'>
              GitHub repository{' '}
            </Link>
            for more details
          </p>
        </div>
      </div>

      <footer className='bg-middleGrey w-full py-2 mt-36'>
        <div className='flex justify-center'>
          <Link href="" className='text-babyPowder font-semibold hover:underline'> {/* TODO: link to a version page */}
            V1.0
          </Link>
        </div>
      </footer>
    </>
  );
}
