import React from 'react'
import Script from 'next/script';

const about = () => {
    // console.log("hello")
  return (
    <div>
    <Script>
        {` alert('Welcome to about us') `}
    </Script>
      Hello this is about page you know...
    </div>
  )
}

export default about

export const metadata = {
    title: "About Angapp",
    description:
      "This is About Angapp that have some extra features than previous application",
  };