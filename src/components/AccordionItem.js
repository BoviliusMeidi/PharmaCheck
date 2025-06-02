'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-black py-2 px-4 sm:px-12 md:mx-20 lg:mx-36">
            <button
                className="flex justify-between items-center w-full text-left font-header cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {title}
                </span>
                {isOpen
                    ? <ChevronUp className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                    : <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                }
            </button>
            {isOpen && (
                <div className="mt-2 text-sm font-description">
                    {children}
                </div>
            )}
        </div>
    )
}