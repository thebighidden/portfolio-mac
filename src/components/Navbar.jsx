import React, { useState, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import { navIcons, navLinks, locations } from '#constants'
import { useWindows } from '#context/WindowContext'

const Navbar = () => {
    const [time, setTime] = useState(dayjs())
    const [activeDropdown, setActiveDropdown] = useState(null)
    const navRef = useRef(null)
    const { openWindow } = useWindows()

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(dayjs())
        }, 1000 * 60)

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            clearInterval(timer)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleDropdown = (name) => {
        if (activeDropdown === name) {
            setActiveDropdown(null)
        } else {
            setActiveDropdown(name)
        }
    }

    const handleAppleClick = () => {
        toggleDropdown('apple')
    }

    const handleNavClick = (link) => {
        if (link.name === 'Projects') {
            toggleDropdown(link.name)
        } else {
            // Open window directly for other links
            if (link.type) {
                openWindow(link.type)
            }
        }
    }

    const appleMenu = ['About This Mac', 'System Settings...', 'App Store...', 'Recent Items', 'Force Quit...', 'Sleep', 'Restart...', 'Shut Down...', 'Lock Screen']

    return (
        <nav ref={navRef}>
            <div className="nav-left">
                <div className="relative">
                    <img
                        src="/images/logo.svg"
                        alt='logo'
                        className={`w-5 h-5 object-contain px-2 box-content rounded-md ${activeDropdown === 'apple' ? 'bg-white/40' : 'hover:bg-white/40'}`}
                        onClick={handleAppleClick}
                    />
                    {activeDropdown === 'apple' && (
                        <ul className="dropdown-menu">
                            {appleMenu.map((item, index) => (
                                <li key={index} className="dropdown-item">{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <p className='font-bold hidden sm:block cursor-default'>Soufiane</p>
                <ul className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.id} className="relative">
                            <span
                                className={`nav-item ${activeDropdown === link.name ? 'bg-white/40' : ''}`}
                                onClick={() => handleNavClick(link)}
                            >
                                {link.name}
                            </span>

                            {/* Projects Dropdown */}
                            {link.name === 'Projects' && activeDropdown === 'Projects' && (
                                <ul className="dropdown-menu">
                                    <li
                                        className="dropdown-item font-semibold border-b border-gray-200 mb-1 pb-1"
                                        onClick={() => {
                                            openWindow('finder', { location: 'projects' })
                                            setActiveDropdown(null)
                                        }}
                                    >
                                        Open All Projects
                                    </li>
                                    {locations.projects.children.map((project) => (
                                        <li
                                            key={project.id}
                                            className="dropdown-item flex items-center gap-2"
                                            onClick={() => {
                                                openWindow('finder', { location: 'projects' })
                                                setActiveDropdown(null)
                                            }}
                                        >
                                            <img src={project.icon} alt="" className="w-4 h-4" />
                                            {project.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="nav-right">
                <ul className="flex items-center gap-2">
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon" alt="nav icon" />
                        </li>
                    ))}
                </ul>
                <time>{time.format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Navbar