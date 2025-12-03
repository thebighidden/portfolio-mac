import React from 'react'
import TextPressure from './TextPressure'

const Desktop = () => {
  return (
    <div id="home" className="relative h-full w-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-0 pointer-events-none">
        <div className="pointer-events-auto mb-4">
          {/* <TextPressure
            text="Soufiane Bighidene"
            className="text-7xl tracking-tighter drop-shadow-2xl cursor-default"
            minWeight={100}
            maxWeight={900}
            range={300}
          /> */}
          <TextPressure
            text="Soufiane Bighidene"
            flex={true}
            className="text-7xl tracking-tighter drop-shadow-2xl cursor-default"

            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <p className="text-2xl font-light tracking-widest uppercase opacity-90 drop-shadow-lg">Full Stack Engineer</p>
      </div>

      {/* <ul>
        <li className="top-5 right-5 group cursor-pointer">
          <img src="/images/folder.png" alt="folder" className="size-16" />
          <p>Projects</p>
        </li>
        <li className="top-32 right-5 group cursor-pointer">
          <img src="/images/folder.png" alt="folder" className="size-16" />
          <p>Documents</p>
        </li>
      </ul> */}
    </div>
  )
}

export default Desktop
