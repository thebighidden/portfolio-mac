import React from 'react'
import WindowHeader from './WindowHeader'
import { socials } from '#constants'

const Contact = ({ onClose }) => {
  return (
    <div id="contact">
      <WindowHeader title="Contact" onClose={onClose} />
      <div className="p-8 space-y-5">
        <h3>Let's Connect</h3>
        <ul className="grid grid-cols-2 gap-3">
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.text} className="w-8 h-8" />
                <p>{social.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Contact
