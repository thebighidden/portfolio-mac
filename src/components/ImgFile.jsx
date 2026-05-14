import React from 'react'
import WindowHeader from './WindowHeader'

const ImgFile = ({ onClose, file }) => {
  if (!file) return null
  return (
    <div id="imgfile">
      <WindowHeader onClose={onClose}>
        <p className="flex-1 text-center">{file.name}</p>
      </WindowHeader>
      <div className="preview">
        <img src={file.imageUrl} alt={file.name} />
      </div>
    </div>
  )
}

export default ImgFile
