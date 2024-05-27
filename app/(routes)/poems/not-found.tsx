import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="mx-auto flex h-[calc(100dvh-52px)] max-w-96 flex-col items-center justify-center text-white">
      <h1 className="mb-4 w-full text-4xl">Well well well!</h1>
      <span>
        What do we have a here? A curious little person. Why don&apos;t we get
        in touch and discuss the reason for your snooping around eh?
      </span>
      <Link
        target="_blank"
        href="https://bit.ly/3BlS71b"
        className="mt-4 w-full underline"
      >
        Go back
      </Link>
    </div>
  )
}

export default NotFound
