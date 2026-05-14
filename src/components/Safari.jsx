import React from 'react'
import WindowHeader from './WindowHeader'
import { blogPosts } from '#constants'

const Safari = ({ onClose }) => {
  return (
    <div id="safari">
      <WindowHeader onClose={onClose}>
        <div className="flex-1 flex justify-center">
          <div className="search">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="jsmastery.com/blog"
              className="flex-1 outline-none text-sm"
              readOnly
            />
          </div>
        </div>
      </WindowHeader>
      <div className="blog max-h-[70vh] max-sm:max-h-none max-sm:flex-1 max-sm:min-h-0 overflow-y-auto">
        <h2>Latest Articles</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.image} alt={post.title} className="col-span-2" />
              <div className="content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Safari
