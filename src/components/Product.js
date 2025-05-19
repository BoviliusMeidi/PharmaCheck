import Image from "next/image"
import Link from "next/link"
import { capitalizeWords } from "@/lib/utils"

export default function Product({ data }) {
    return (
        <Link href={`/product/${data.medicine_name}`}>
            <div className="flex flex-col justify-center items-center border rounded-3xl gap-4 p-6 bg-white">
                <Image src={data.image_url || '/Medicine.png'} width={data.image_url ? 150 : 80} height={data.image_url ? 150 : 80} alt="Gambar Obat" />
                <h2 className="font-header text-3xl font-extrabold">{capitalizeWords(data.medicine_name)}</h2>
            </div>
        </Link>
    )
}