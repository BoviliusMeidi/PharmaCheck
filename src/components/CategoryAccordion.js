'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function CategoryAccordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mb-4 pl-4 w-full">
            <button
                className="flex justify-between items-center w-full text-left font-header text-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='cursor-pointer font-header text-3xl'>{title}</span>
                {isOpen ? <ChevronUp size={60} /> : <ChevronDown size={60} />}
            </button>
            {isOpen && (
                <div className="text-left mt-1 text-sm font-description">
                    {children}
                </div>
            )}
        </div>
    )
}
