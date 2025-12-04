import React, { useState, useEffect, useRef } from 'react'

const TextPressure = ({
    text = "Hello!",
    fontFamily = "Inter",
    className = "",
    minWeight = 100,
    maxWeight = 900,
    range = 100,
    textColor = "#000000",
    strokeColor = "#ff0000",
    stroke = false
}) => {
    const containerRef = useRef(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [containerRect, setContainerRect] = useState({ left: 0, top: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        const updateContainerRect = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                setContainerRect({ left: rect.left, top: rect.top })
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', updateContainerRect)
        updateContainerRect()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', updateContainerRect)
        }
    }, [])

    const chars = text.split('')

    return (
        <div
            ref={containerRef}
            className={`flex relative ${className}`}
            style={{ fontFamily }}
        >
            {chars.map((char, i) => (
                <Char
                    key={i}
                    char={char}
                    mousePos={mousePos}
                    containerRect={containerRect}
                    index={i}
                    total={chars.length}
                    minWeight={minWeight}
                    maxWeight={maxWeight}
                    range={range}
                    textColor={textColor}
                    strokeColor={strokeColor}
                    stroke={stroke}
                />
            ))}
        </div>
    )
}

const Char = ({ char, mousePos, containerRect, index, total, minWeight, maxWeight, range, textColor, strokeColor, stroke }) => {
    const charRef = useRef(null)
    const [weight, setWeight] = useState(minWeight)

    useEffect(() => {
        if (!charRef.current) return

        const rect = charRef.current.getBoundingClientRect()
        const charX = rect.left + rect.width / 2
        const charY = rect.top + rect.height / 2

        const dist = Math.sqrt(
            Math.pow(mousePos.x - charX, 2) +
            Math.pow(mousePos.y - charY, 2)
        )

        // Calculate weight based on distance
        // If distance is 0, weight is maxWeight
        // If distance is >= range, weight is minWeight
        let newWeight = minWeight
        if (dist < range) {
            const factor = 1 - (dist / range)
            newWeight = minWeight + (maxWeight - minWeight) * factor
        }

        setWeight(newWeight)
    }, [mousePos, minWeight, maxWeight, range])

    return (
        <span
            ref={charRef}
            style={{
                fontWeight: weight,
                fontVariationSettings: `'wght' ${weight}`,
                transition: 'font-weight 0.1s ease-out, font-variation-settings 0.1s ease-out',
                display: 'inline-block',
                minWidth: char === ' ' ? '0.5em' : 'auto', // Handle spaces
                color: textColor,
                WebkitTextStroke: stroke ? `1px ${strokeColor}` : 'none'
            }}
        >
            {char}
        </span>
    )
}

export default TextPressure
