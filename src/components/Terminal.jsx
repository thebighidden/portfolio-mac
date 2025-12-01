import React from 'react'
import WindowHeader from './WindowHeader'
import { techStack } from '#constants'

const Terminal = ({ onClose }) => {
  return (
    <div id="terminal">
      <WindowHeader title="Skills" onClose={onClose} />
      <div className="techstack">
        <div className="label">
          <span className="text-[#00A154]">➜</span>
          <span className="text-blue-500 ms-2">~</span>
          <span className="ms-2">cat skills.txt</span>
        </div>
        <div className="content">
          {techStack.map((stack, index) => (
            <li key={index} className="flex items-start">
              <svg className="check" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <h3>{stack.category}</h3>
              <ul>
                {stack.items.map((item, i) => (
                  <li key={i} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </div>
        <div className="footnote">
          <p>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Always learning and exploring new technologies</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terminal
