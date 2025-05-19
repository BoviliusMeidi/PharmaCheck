'use client'

import { useRouter } from "next/navigation"

export default function AlphabetButton({ text }) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/categories/medicine/a-z/${text.toLowerCase()}`)
    }
    return (
        <button
            onClick={handleClick}
            className="cursor-pointer font-header font-extrabold bg-aqua px-4 py-2 text-4xl rounded-2xl text-center flex items-center justify-center">
            {text}
        </button>
    )
}