'use client'
import { useState, useRef, useEffect } from 'react'

type Props = {
    timePeriod : string,
    setTimePeriod : (period: string) => void
}
export default function DropDown({timePeriod, setTimePeriod} : Props) {
    const [isOpen, setIsOpen] = useState(false)
    
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleClickOutside = (event: Event): void => {
        // Check if click was outside the dropdownRef
        if (dropdownRef.current && !dropdownRef.current.contains(event['target'] as Node)) {
            setIsOpen(false) // Close the dropdown
        }
    }

    type TimePeriod = string

    const selectDate = (period: TimePeriod) => {
        setTimePeriod(period)
        setIsOpen(false) // close the dropdown
    }


    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div ref={dropdownRef} className="relative">
            <label onClick={toggleDropdown} className={`flex items-center space-x-1 cursor-pointer text-gray-400 hover:text-gray-700 ${isOpen === true ? 'text-gray-700' : ''}`}> 
                <span className="text-base">{timePeriod}</span>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </label>
            
            {isOpen && ( // render the dropdown conditionally
                <div className="absolute mt-1 right-1 top-full min-w-max shadow rounded bg-gray-100 border border-gray-400">
                    <ul className="block text-right text-gray-900">
                        <li><p onClick={() => selectDate("Last 7 days")} className={`text-xs block px-3 py-2 hover:bg-gray-200 ${timePeriod === 'Last 7 days' ? 'selectedTimePeriod' : ''}`}>
                            Last 7 days
                        </p></li>
                        <li><p onClick={() => selectDate("Last 30 days")} className={`text-xs block px-3 py-2 hover:bg-gray-200 ${timePeriod === 'Last 30 days' ? 'selectedTimePeriod' : ''}`}>
                            Last 30 days
                        </p></li>
                        <li><p onClick={() => selectDate("Last 365 days")} className={`text-xs block px-3 py-2 hover:bg-gray-200 ${timePeriod === 'Last 365 days' ? 'selectedTimePeriod' : ''}`}>
                            Last 365 days
                        </p></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
