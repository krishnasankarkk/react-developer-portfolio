// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='flex flex-row items-center justify-between p-4'>
      <div className='flex flex-row gap-1 font-bold text-2xl cursor-pointer relative w-[18rem]'>
        <span className="letter">k</span>
        <span className="letter">r</span>
        <span className="letter">i</span>
        <span className="letter">s</span>
        <span className="letter">h</span>
        <span className="letter">n</span>
        <span className="letter">a</span>
        <span className="letter">s</span>
        <span className="letter">a</span>
        <span className="letter">n</span>
        <span className="letter">k</span>
        <span className="letter">a</span>
        <span className="letter">r</span>
        <span className="letter">.</span>
        <span className="letter">d</span>
        <span className="letter">e</span>
        <span className="letter">v</span>
        <div className="cursor absolute left-2 bottom-0 h-1 w-4 bg-light"></div>
      </div>
      <div className="flex flex-col gap-2 items-end cursor-pointer">
        <div className="w-8 h-1 bg-light rounded-full"></div>
        <div className="w-4 h-1 bg-light rounded-full"></div>
      </div>
    </div>
  )
}

export default App
