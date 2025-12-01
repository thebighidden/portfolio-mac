import React, { useState } from 'react'
import { dockApps } from '#constants'

const Dock = ({ onAppClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const getScale = (index) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(hoveredIndex - index)
    if (distance === 0) return 1.6
    if (distance === 1) return 1.3
    if (distance === 2) return 1.1
    return 1
  }

  return (
    <div id="dock">
      <div className="dock-container">
        {dockApps.map((app, index) => (
          <div
            key={app.id}
            className="dock-icon group relative transition-all duration-300 ease-out"
            style={{
              transform: `scale(${getScale(index)}) translateY(${hoveredIndex === index ? '-10px' : '0'})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => app.canOpen && onAppClick(app.id)}
          >
            <img
              src={`/images/${app.icon}`}
              alt={app.name}
              className="w-full h-full pointer-events-none"
            />
            <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {app.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dock
