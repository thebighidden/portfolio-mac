import React from 'react'
import WindowHeader from './WindowHeader'
import { photosLinks, gallery } from '#constants'

const Photos = ({ onClose }) => {
  return (
    <div id="photos">
      <WindowHeader title="Gallery" onClose={onClose} />
      <div className="flex h-96">
        <div className="sidebar">
          <h2>Albums</h2>
          <ul>
            {photosLinks.map((link) => (
              <li key={link.id}>
                <img src={link.icon} alt={link.title} />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="gallery">
          <ul>
            {gallery.map((photo) => (
              <li key={photo.id}>
                <img src={photo.img} alt={`Gallery ${photo.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Photos
