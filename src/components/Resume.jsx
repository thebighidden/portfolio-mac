import React, { useState } from 'react'
import WindowHeader from './WindowHeader'

const versions = {
  en: {
    label: 'English',
    file: '/files/Soufiane-Bighidene_EN.pdf',
    download: 'Soufiane-Bighidene_EN.pdf',
  },
  fr: {
    label: 'Français',
    file: '/files/Soufiane-Bighidene_FR.pdf',
    download: 'Soufiane-Bighidene_FR.pdf',
  },
}

const Resume = ({ onClose }) => {
  const [lang, setLang] = useState('en')
  const current = versions[lang]

  return (
    <div id="resume">
      <WindowHeader title="Resume.pdf" onClose={onClose} />
      <div className="p-5 bg-gray-100 flex flex-col items-center gap-4">
        <div className="lang-toggle">
          {Object.entries(versions).map(([key, v]) => (
            <button
              key={key}
              className={lang === key ? 'active' : ''}
              onClick={() => setLang(key)}
            >
              {v.label}
            </button>
          ))}
        </div>

        <iframe
          key={current.file}
          src={current.file}
          className="w-full h-[60vh] bg-white border border-gray-200 rounded-sm"
          title={`Resume ${current.label}`}
        />
        <a
          href={current.file}
          download={current.download}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download {current.label}
        </a>
      </div>
    </div>
  )
}

export default Resume
