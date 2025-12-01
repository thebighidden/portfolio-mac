import React, { createContext, useContext, useState } from 'react'
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from '#constants'

const WindowContext = createContext()

export const useWindows = () => {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindows must be used within WindowProvider')
  }
  return context
}

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState(WINDOW_CONFIG)
  const [highestZIndex, setHighestZIndex] = useState(INITIAL_Z_INDEX)

  const openWindow = (windowId, data = null) => {
    const newZIndex = highestZIndex + 1
    setHighestZIndex(newZIndex)
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        isOpen: true,
        zIndex: newZIndex,
        data,
      },
    }))
  }

  const closeWindow = (windowId) => {
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        isOpen: false,
      },
    }))
  }

  const focusWindow = (windowId) => {
    const newZIndex = highestZIndex + 1
    setHighestZIndex(newZIndex)
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        zIndex: newZIndex,
      },
    }))
  }

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, focusWindow }}>
      {children}
    </WindowContext.Provider>
  )
}
