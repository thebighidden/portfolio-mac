import React, { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import WindowHeader from './WindowHeader'
import { albums } from '#constants'
import { useWindows } from '#context/WindowContext'

const pinIcon = L.divIcon({
  className: 'trip-pin',
  html: '<div class="pin-dot"></div><div class="pin-stem"></div>',
  iconSize: [24, 32],
  iconAnchor: [12, 30],
  popupAnchor: [0, -28],
})

const Maps = ({ onClose }) => {
  const { openWindow, closeWindow } = useWindows()
  const [activeId, setActiveId] = useState(null)

  const center = useMemo(() => {
    const lats = albums.map((a) => a.coords[0])
    const lngs = albums.map((a) => a.coords[1])
    return [
      (Math.min(...lats) + Math.max(...lats)) / 2,
      (Math.min(...lngs) + Math.max(...lngs)) / 2,
    ]
  }, [])

  const openAlbum = (albumId) => {
    closeWindow('photos')
    setTimeout(() => openWindow('photos', { albumId }), 50)
  }

  return (
    <div id="maps">
      <WindowHeader title="Maps — My Trips" onClose={onClose} />
      <div className="map-body">
        <div className="map-sidebar">
          <h2>Destinations</h2>
          <ul>
            {albums.map((album) => (
              <li
                key={album.id}
                className={album.id === activeId ? 'active' : ''}
                onMouseEnter={() => setActiveId(album.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => openAlbum(album.id)}
              >
                <img src={album.icon} alt={album.title} />
                <div>
                  <p>{album.title}</p>
                  <span>{album.subtitle} · {album.photos.length} photos</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="hint">Click a destination to open its album.</p>
        </div>

        <div className="map-canvas">
          <MapContainer center={center} zoom={4} scrollWheelZoom={true} className="leaflet-root">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {albums.map((album) => (
              <Marker
                key={album.id}
                position={album.coords}
                icon={pinIcon}
                eventHandlers={{
                  mouseover: (e) => { setActiveId(album.id); e.target.openPopup() },
                  mouseout: (e) => { setActiveId(null); e.target.closePopup() },
                  click: () => openAlbum(album.id),
                }}
              >
                <Popup closeButton={false}>
                  <div className="trip-popup">
                    <strong>{album.title}</strong>
                    <span>{album.subtitle}</span>
                    <em>Click to view photos</em>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Maps
