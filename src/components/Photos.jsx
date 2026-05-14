import React, { useState, useEffect } from 'react'
import WindowHeader from './WindowHeader'
import { albums } from '#constants'

const Photos = ({ onClose, initialAlbumId }) => {
  const [activeAlbumId, setActiveAlbumId] = useState(initialAlbumId ?? albums[0].id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const activeAlbum = albums.find((a) => a.id === activeAlbumId) ?? albums[0]
  const photos = activeAlbum.photos

  const closeLightbox = () => setLightboxIndex(null)
  const nextPhoto = () => setLightboxIndex((i) => (i + 1) % photos.length)
  const prevPhoto = () => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, photos.length])

  return (
    <div id="photos">
      <WindowHeader title={`Gallery — ${activeAlbum.title}`} onClose={onClose} />
      <div className="flex h-[28rem] max-sm:h-auto max-sm:flex-1 max-sm:min-h-0">
        <div className="sidebar">
          <h2>Trips</h2>
          <ul>
            {albums.map((album) => (
              <li
                key={album.id}
                onClick={() => setActiveAlbumId(album.id)}
                className={album.id === activeAlbumId ? 'active' : ''}
              >
                <img src={album.icon} alt={album.title} />
                <div className="flex flex-col">
                  <p>{album.title}</p>
                  <span>{album.subtitle}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {photos.map((photo, i) => (
              <li key={photo.id} className="group" onClick={() => setLightboxIndex(i)}>
                <img
                  src={photo.img}
                  alt={photo.caption || `${activeAlbum.title} ${photo.id}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.classList.add('empty')
                  }}
                />
                {photo.caption && <span className="caption">{photo.caption}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>×</button>
          <button
            className="lb-prev"
            onClick={(e) => { e.stopPropagation(); prevPhoto() }}
          >‹</button>
          <img
            src={photos[lightboxIndex].img}
            alt={photos[lightboxIndex].caption || ''}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lb-next"
            onClick={(e) => { e.stopPropagation(); nextPhoto() }}
          >›</button>
          {photos[lightboxIndex].caption && (
            <p className="lb-caption">{photos[lightboxIndex].caption}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Photos
