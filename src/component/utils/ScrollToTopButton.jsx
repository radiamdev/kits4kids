'use client'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const ScrollToTopButton = ({ style }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Add a scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll)

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        // Get the current scroll position
        const scrolling = window.scrollY

        // Show the button when scrolling down beyond a certain point (e.g., 300 pixels)
        if (scrolling > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        // Smoothly scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div>
            {isVisible && (
                <button
                    className={`tf__scroll_btn ${style}`}
                    onClick={scrollToTop}
                >
                    <IoIosArrowBack />
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton
