import Image from "next/image"
import Link from "next/link"
import { capitalizeWords } from "@/lib/utils"

export default function Category({ data }) {
    console.log(data)
    return (
        <Link href={`/categories/medicine/categories/${data.name}`}>
            <div className="flex flex-col justify-center items-center border rounded-3xl gap-4 p-6 bg-white">
                <Image src={data.image || '/Medicine.png'} width={data.image ? 150 : 80} height={data.image ? 150 : 80} alt="Gambar Obat" />
                <h2 className="font-header text-3xl font-extrabold">{capitalizeWords(data.name)}</h2>
            </div>
        </Link>
    )
}