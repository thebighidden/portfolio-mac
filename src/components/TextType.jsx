import React, { useState, useEffect } from 'react'

const TextType = ({
    text = [],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1000,
    className = ""
}) => {
    const [displayedText, setDisplayedText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed)

    useEffect(() => {
        let timer
        const handleType = () => {
            const i = loopNum % text.length
            const fullText = text[i]

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            )

            setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed)

            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration)
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        timer = setTimeout(handleType, typingSpeedState)
        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, loopNum, text, typingSpeed, deletingSpeed, pauseDuration, typingSpeedState])

    return (
        <h1 className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </h1>
    )
}

export default TextType
