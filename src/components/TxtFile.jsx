import React from 'react'
import WindowHeader from './WindowHeader'

const TxtFile = ({ onClose, file }) => {
  if (!file) return null
  return (
    <div id="txtfile">
      <WindowHeader title={file.name} onClose={onClose} />
      <div className="p-4 sm:p-6 bg-white max-sm:flex-1 max-sm:overflow-y-auto">
        {file.subtitle && (
          <h3 className="text-base font-semibold text-gray-900 mb-3">{file.subtitle}</h3>
        )}
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          {(file.description || []).map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TxtFile
