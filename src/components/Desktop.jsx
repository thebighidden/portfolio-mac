import React, { useState, useEffect, useRef, useCallback } from 'react'
import TextPressure from './TextPressure'
import { useWindows } from '#context/WindowContext'

const STORAGE_KEY = 'desktop-icon-positions-v1'
const DRAG_THRESHOLD = 4

const defaultPositions = () => {
  const right = Math.max(window.innerWidth - 130, 100)
  return {
    projects: { x: right, y: 40 },
    resume:   { x: right, y: 170 },
  }
}

const loadPositions = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultPositions()
    return { ...defaultPositions(), ...JSON.parse(raw) }
  } catch {
    return defaultPositions()
  }
}

const Desktop = () => {
  const { openWindow } = useWindows()
  const [positions, setPositions] = useState(loadPositions)
  const dragState = useRef(null)

  const items = [
    {
      id: 'projects',
      label: 'Projects',
      sublabel: '',
      icon: '/images/folder.png',
      onOpen: () => openWindow('finder', { location: 'projects' }),
    },
    {
      id: 'resume',
      label: 'Resume.pdf',
      sublabel: '',
      icon: '/images/pdf.png',
      onOpen: () => openWindow('resume'),
    },
  ]

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
    } catch {}
  }, [positions])

  const onMouseMove = useCallback((e) => {
    const ds = dragState.current
    if (!ds) return
    const x = e.clientX - ds.offsetX
    const y = e.clientY - ds.offsetY
    const dx = e.clientX - ds.startX
    const dy = e.clientY - ds.startY
    if (!ds.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) ds.moved = true
    if (ds.moved) {
      setPositions((p) => ({
        ...p,
        [ds.id]: {
          x: Math.max(0, Math.min(window.innerWidth - 96, x)),
          y: Math.max(28, Math.min(window.innerHeight - 96, y)),
        },
      }))
    }
  }, [])

  const onMouseUp = useCallback((e) => {
    const ds = dragState.current
    if (!ds) return
    const wasDrag = ds.moved
    dragState.current = null
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
    if (!wasDrag) ds.onOpen()
  }, [onMouseMove])

  const startDrag = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    dragState.current = {
      id: item.id,
      onOpen: item.onOpen,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      moved: false,
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div id="home" className="relative h-full w-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-0 pointer-events-none">
        <div className="pointer-events-auto mb-4">
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
        <p className="text-2xl font-light tracking-widest uppercase opacity-90 drop-shadow-lg">
          Full Stack Engineer
        </p>
      </div>

      <ul className="desktop-icons">
        {items.map((item) => {
          const pos = positions[item.id]
          return (
            <li
              key={item.id}
              className="desktop-icon"
              style={{ left: pos.x, top: pos.y }}
              onMouseDown={(e) => startDrag(e, item)}
            >
              <img src={item.icon} alt={item.label} draggable={false} />
              <p>{item.label}</p>
              {item.sublabel && <span>{item.sublabel}</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Desktop
