import React, { useState, useRef, useCallback, useEffect } from 'react'
import WindowHeader from './WindowHeader'
import { locations } from '#constants'
import { useWindows } from '#context/WindowContext'

const POS_STORAGE_KEY = 'finder-icon-positions-v1'
const DRAG_THRESHOLD = 4

const loadPositions = () => {
  try {
    const raw = localStorage.getItem(POS_STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

const Finder = ({ onClose, initialLocation = 'projects' }) => {
  const { openWindow } = useWindows()
  const [activeLocation, setActiveLocation] = useState(initialLocation)
  const [path, setPath] = useState([])
  const [positions, setPositions] = useState(loadPositions)
  const dragState = useRef(null)
  const contentRef = useRef(null)

  const rootLocation = locations[activeLocation]

  const currentNode = path.reduce((node, id) => {
    const next = node.children?.find((c) => c.id === id)
    return next || node
  }, rootLocation)

  const goBack = () => setPath((p) => p.slice(0, -1))
  const goRoot = () => setPath([])

  useEffect(() => {
    try {
      localStorage.setItem(POS_STORAGE_KEY, JSON.stringify(positions))
    } catch {}
  }, [positions])

  const positionKey = (item) =>
    `${activeLocation}/${path.join('/')}#${item.id}`

  const openItem = (item) => {
    if (item.kind === 'folder') {
      setPath((p) => [...p, item.id])
      return
    }
    if (item.fileType === 'url' && item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
      return
    }
    if (item.fileType === 'txt') {
      openWindow('txtfile', item)
      return
    }
    if (item.fileType === 'img') {
      openWindow('imgfile', item)
      return
    }
    if (item.fileType === 'pdf') {
      openWindow('resume')
      return
    }
    if (item.fileType === 'fig' && item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    }
  }

  const onMouseMove = useCallback((e) => {
    const ds = dragState.current
    if (!ds) return
    const rect = contentRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left - ds.offsetX
    const y = e.clientY - rect.top - ds.offsetY
    const dx = e.clientX - ds.startX
    const dy = e.clientY - ds.startY
    if (!ds.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) ds.moved = true
    if (ds.moved) {
      const maxX = rect.width - 96
      const maxY = rect.height - 96
      setPositions((p) => ({
        ...p,
        [ds.key]: {
          x: Math.max(0, Math.min(maxX, x)),
          y: Math.max(0, Math.min(maxY, y)),
        },
      }))
    }
  }, [])

  const onMouseUp = useCallback(() => {
    const ds = dragState.current
    if (!ds) return
    const wasDrag = ds.moved
    dragState.current = null
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
    if (!wasDrag) ds.openItem()
  }, [onMouseMove])

  const startDrag = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    const itemRect = e.currentTarget.getBoundingClientRect()
    dragState.current = {
      key: positionKey(item),
      openItem: () => openItem(item),
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - itemRect.left,
      offsetY: e.clientY - itemRect.top,
      moved: false,
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div id="finder">
      <WindowHeader onClose={onClose}>
        <div className="finder-header">
          <button
            className="back-btn"
            onClick={goBack}
            disabled={path.length === 0}
            title="Back"
          >‹</button>
          <h2>{currentNode.name}</h2>
          {path.length > 0 && (
            <button className="root-btn" onClick={goRoot} title="Back to root">⌂</button>
          )}
        </div>
      </WindowHeader>

      <div className="flex h-96">
        <div className="sidebar">
          <h3>Favorites</h3>
          <ul>
            {Object.values(locations).map((location) => (
              <li
                key={location.id}
                className={activeLocation === location.type ? 'active' : 'not-active'}
                onClick={() => {
                  setActiveLocation(location.type)
                  setPath([])
                }}
              >
                <img src={location.icon} alt={location.name} className="w-4" />
                <span className="text-sm">{location.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {rootLocation.kind === 'list' && path.length === 0 ? (
          <div className="link-list">
            {currentNode.children?.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <img src={item.icon} alt={item.name} />
                <div className="link-body">
                  <div className="link-head">
                    <p className="link-name">{item.name}</p>
                    {item.role && <span className="link-role">{item.role}</span>}
                  </div>
                  {item.description && <p className="link-desc">{item.description}</p>}
                  {item.tags?.length > 0 && (
                    <div className="link-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="content" ref={contentRef}>
            {currentNode.children?.map((item) => {
              const savedPos = positions[positionKey(item)]
              const style = savedPos
                ? { left: savedPos.x, top: savedPos.y, position: 'absolute' }
                : undefined
              return (
                <li
                  key={item.id}
                  className={!savedPos ? (item.position || 'top-5 left-5') : ''}
                  style={style}
                  onMouseDown={(e) => startDrag(e, item)}
                >
                  <img src={item.icon} alt={item.name} draggable={false} />
                  <p>{item.name}</p>
                </li>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Finder
