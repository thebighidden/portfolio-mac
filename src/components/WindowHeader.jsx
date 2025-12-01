import React from 'react'
import WindowControls from './WindowControls'

const WindowHeader = ({ title, onClose, children }) => {
  return (
    <div id="window-header">
      <WindowControls onClose={onClose} />
      {children || <h2 className="flex-1 text-center">{title}</h2>}
      <div className="w-14" />
    </div>
  )
}

export default WindowHeader
