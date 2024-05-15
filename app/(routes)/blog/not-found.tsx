import Link from 'next/link'
import React from 'react'

function NotFound() {
  return <div className='text-white max-w-96 h-[calc(100dvh-52px)] flex flex-col mx-auto items-center justify-center'>
    <h1 className='text-4xl w-full mb-4'>Well well well!</h1>
    <span>What do we have a here? A curious little person. Why don&apos;t we get in touch and discuss the reason for your snooping around eh?</span>
    <Link target='_blank' href="https://bit.ly/3BlS71b" className='mt-4 underline w-full'>Go back</Link>
  </div>
}

export default NotFound
