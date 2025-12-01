import React from 'react'
import WindowHeader from './WindowHeader'

const Resume = ({ onClose }) => {
  return (
    <div id="resume">
      <WindowHeader title="Resume.pdf" onClose={onClose} />
      <div className="p-5 bg-gray-100">
        <iframe
          src="/files/resume.pdf"
          className="w-full h-[70vh] bg-white"
          title="Resume"
        />
      </div>
    </div>
  )
}

export default Resume
