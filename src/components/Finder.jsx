import React, { useState } from 'react'
import WindowHeader from './WindowHeader'
import { locations } from '#constants'

const Finder = ({ onClose, initialLocation = 'work' }) => {
  const [activeLocation, setActiveLocation] = useState(initialLocation)
  const currentLocation = locations[activeLocation]

  return (
    <div id="finder">
      <WindowHeader title={currentLocation.name} onClose={onClose} />
      <div className="flex h-96">
        <div className="sidebar">
          <h3>Favorites</h3>
          <ul>
            {Object.values(locations).map((location) => (
              <li
                key={location.id}
                className={activeLocation === location.type ? 'active' : 'not-active'}
                onClick={() => setActiveLocation(location.type)}
              >
                <img src={location.icon} alt={location.name} className="w-4" />
                <span className="text-sm">{location.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          {currentLocation.children?.map((item) => (
            <li key={item.id} className={item.position || 'top-5 left-5'}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Finder
