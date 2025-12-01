import React from 'react'

const WindowControls = ({ onClose, onMinimize, onMaximize }) => {
  return (
    <div id="window-controls">
      <div className="close" onClick={onClose} />
      <div className="minimize" onClick={onMinimize} />
      <div className="maximize" onClick={onMaximize} />
    </div>
  )
}

export default WindowControls
