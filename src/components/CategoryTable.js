import Link from "next/link";
import CategoryAccordion from "./CategoryAccordion";

export default function CategoryTable({ title }) {
    const category = {
        "Cough, Cold & Flu": ["Cough and Flu", "Nasal", "Balms & Essential Oils", "For Baby & Child", "Herbal Treatments"],
        "Digestive Problem": ["Acid Reflux & GERD", "Diarrhea", "Constipation & Hemorrhoids", "Nausea and Vomiting", "Worm Infections"],
        "THT Problem": ["Mouth Ulcers & Herpes", "Antiseptic Mouthwash","Throat Lozenges", "Ear Drops", "Nasal Hygiene"],
        "Skin Condition": ["Acne", "Skin Infections", "Dermatitis & Eczema", "Others Skin Medicine"],
        "Bones and Joints": ["Bone and Osteoporosis", "Muscle Relaxant", "Gout & Arthritis", "Balms & Oils"],
        "Allergies": ["Allergy Remedies", "Itch Relief"],
        "Fever and Pain": ["Fever and Pain Relief", "Heat and Cold Therapy", "Infants and Children", "Herbal Treatments"],
        "Eyes Problem": ["Itchy, Dry and Red", "More Eyes Problem"],
        "Infection": ["Antibiotic", "Antivirus", "Antifungal"],
        "Fertility and More": ["Bladder and Kidney", "Women", "Men", "Contraceptive Pills", "Other Fertility"],
        "Other Medicines": ["Anti Inflammatory", "Sleep Disorders", "Blood Disorders", "Brain and Nerves", "Mental Health", "Other Medicine"],
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