import AlphabetButton from "./AlphabetButton";

export default function AZTable({ title }) {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    return (
            <div className="flex flex-col justify-center border items-center rounded-3xl w-full] bg-white">
                <h3 className="font-header text-3xl font-extrabold py-4">{`A-Z ${title}`}</h3>
                <hr className="w-full border-t-2" />
                <div className="grid grid-cols-3 gap-4 p-4">
                    {alphabet.map((letter) => (
                        <AlphabetButton key={letter} text={letter} />
                    ))}
                </div>
            </div>
    )
}