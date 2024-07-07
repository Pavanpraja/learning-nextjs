'use client';

import React from 'react'
import { submitAction } from '@/actions/form'
import { useRef } from 'react';

const contact = () => {
    let ref = useRef();

  return (
    <div>
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}} className="bg-slate-200 w-2/3 mx-auto my-12 p-[1rem] gap-[1rem] flex flex-col">
        <div className="bg-slate-200 flex gap-[1rem]">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="text-[1.3rem] bg-white" />
        </div>
        <div className="bg-slate-200 flex gap-[1rem]">
            <label htmlFor="add">Address</label>
            <input type="text" name="add" id="add" className="text-[1.3rem] bg-white" />
        </div>
        <div className="bg-slate-200 flex gap-[1rem]">
            <button className="p-[0.5rem] border-black border-[0.1rem]">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default contact
