import React from 'react'
import { CONTACT } from '../constants/index'

const Email = () => {
  return (
    <div className='fixed bottom-0 right-10 z-10 text-neutral-400 '>
        <div className=' z-200 flex flex-col items-center justify-center list-none after:content[""]  after:block after:w-px after:h-40 after:bg-slate-300 after:my-0 after:mx-auto'>
            <a href={`mailto:${CONTACT.email}`} className='mb-10 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white' style={{writingMode: 'vertical-rl'}}>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Email