import Link from "next/link";
import CategoryAccordion from "./CategoryAccordion";

export default function CategoryTable({ title }) {
    const category = {
        "Cough, Cold & Flu": ["Cough and Flu", "Nasal", "Balms & Essential Oils", "For Baby & Child", "Herbal Treatments"],
        "Digestive Problem": ["Test"],
        "THT Problem": ["Test"],
        "Skin Condition": ["Test"],
        "Bones and Joints": ["Test"],
        "Allergies": ["Test"],
        "Fever and Pain": ["Test"],
        "Eyes Problem": ["Test"],
        "Infection": ["Test"],
        "Fertility and More": ["Test"],
        "Other Medicines": ["Test"],
    }

    return (
        <div className="flex flex-col justify-center border items-center rounded-3xl w-full] bg-white">
            <h3 className="font-header text-3xl font-extrabold py-4">{`${title}`}</h3>
            <hr className="w-full border-t-2" />
            <div className="flex flex-col justify-center items-center w-full">
                {Object.entries(category).map(([mainCategory, subCategories]) => (
                    <CategoryAccordion key={mainCategory} title={mainCategory}>
                        <div className="font-header text-2xl flex flex-col gap-3 cursor-pointer">
                            {subCategories.map((sub, i) => (
                                <Link href={`/categories/medicine/categories/${sub}`} key={i}>{sub}</Link>
                            ))}
                        </div>
                    </CategoryAccordion>
                ))}
            </div>
        </div>
    )
}