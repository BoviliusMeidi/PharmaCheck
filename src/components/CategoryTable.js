import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CategoryTable({ title }) {
  const [openedCategory, setOpenedCategory] = useState("ByDisease");

  const handleToggle = (category) => {
    setOpenedCategory((prev) => (prev === category ? null : category));
  };

  const categories = {
    ByDisease: {
      "Cough, Cold & Flu":[   
        "Cough and Flu", 
        "Nasal", 
        "Balms & Essential Oils", 
        "For Baby & Child", 
        "Herbal Treatments"
        ],
      "Digestive Problem":[
        "Acid Reflux & GERD", 
        "Diarrhea", 
        "Constipation & Hemorrhoids", 
        "Nausea and Vomiting",
        "Worm Infections"
        ],
      "THT Problem":[
        "Mouth Ulcers & Herpes", 
        "Antiseptic Mouthwash", 
        "Throat Lozenges", 
        "Ear Drops", 
        "Nasal Hygiene"
        ],
      "Skin Condition":[
        "Acne", 
        "Skin Infections", 
        "Dermatitis & Eczema", 
        "Others Skin Medicine"
        ],
      "Bones and Joints":[
        "Bone and Osteoporosis", 
        "Muscle Relaxant", 
        "Gout & Arthritis", 
        "Balms & Oils"
        ],
      "Allergies":[
        "Allergy Remedies", 
        "Itch Relief"
        ],
      "Fever and Pain":[
        "Fever and Pain Relief", 
        "Heat and Cold Therapy", 
        "Infants and Children", 
        "Herbal Treatments"
        ],
      "Eyes Problem":[
        "Itchy, Dry and Red", 
        "More Eyes Problem"
        ],
      "Infection":[
        "Antibiotic", 
        "Antivirus", 
        "Antifungal"
        ],
      "Fertility and More":[
        "Bladder and Kidney", 
        "Women", 
        "Men", 
        "Contraceptive Pills", 
        "Other Fertility"
        ],
      "Other Medicines":[
        "Anti Inflammatory", 
        "Sleep Disorders", 
        "Blood Disorders", 
        "Brain and Nerves", 
        "Mental Health", 
        "Other Medicine"
        ],
    },  
  };

  return (
    <div className="flex flex-col justify-center border items-center rounded-3xl w-full bg-white">
      <h3 className="font-header text-3xl font-extrabold py-4">{`${title}`}</h3>
      <hr className="w-full border-t-2" />

      <div className="flex flex-col justify-center items-center w-full">
        {Object.entries(categories).map(([mainCategoryGroup, subCategoryGroups]) => (
          <div key={mainCategoryGroup} className="w-full">
            <div
              onClick={() => handleToggle(mainCategoryGroup)}
              className="cursor-pointer font-header text-2xl px-6 py-3 w-full flex justify-between items-center hover:bg-gray-100"
            >
              {mainCategoryGroup}
              {openedCategory === mainCategoryGroup ? (
                <ChevronUp className="text-2xl" />
              ) : (
                <ChevronDown className="text-2xl" />
              )}
            </div>

            {openedCategory === mainCategoryGroup && (
              <div className="w-full px-8 pb-4">
                {Object.entries(subCategoryGroups).map(([subTitle, items]) => (
                  <div key={subTitle} className="mb-2">
                    <h4 className="text-xl font-semibold mb-2">{subTitle}</h4>
                    <div className="flex flex-col gap-1 text-black">
                      {items.map((item, i) => (
                        <Link href={`/categories/medicine/categories/${item}`} key={i}>
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
