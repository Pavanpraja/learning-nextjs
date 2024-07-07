"use client"

import Image from "next/image";

export default function Home() {

  const handleClick = async() =>{
    let data ={
      name: "Pavan",
      role: "Coder"
    }
    let a = await fetch("/api/add", {method: "POST", headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
    let res = await a.json()
    console.log(res)
  }

  return (
    <>
    <div className="container size-80 bg-[#ebebeb] rounded-xl relative">
      <Image fill={true} className="mx-auto object-cover rounded-xl" quality={100} preload={true} src="https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=220" alt="culture image" />
    </div>
      <button className="flex items-center justify-center" onClick={handleClick}>Click me</button>
    </>
  );
}
