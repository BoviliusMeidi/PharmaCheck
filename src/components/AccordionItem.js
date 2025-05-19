'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-black py-2 mx-36">
            <button
                className="flex justify-between items-center w-full text-left font-header text-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='font-header text-5xl'>{title}</span>
                {isOpen ? <ChevronUp size={80} /> : <ChevronDown size={80} />}
            </button>
            {isOpen && (
                <div className="mt-2 text-sm font-description">
                    {children}
                </div>
            )}
        </div>
    )
}
