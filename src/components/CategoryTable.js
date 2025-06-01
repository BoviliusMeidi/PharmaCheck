import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CategoryTable({ title }) {
  const [openedCategory, setOpenedCategory] = useState("ByDisease");

  const handleToggle = (category) => {
    setOpenedCategory((prev) => (prev === category ? null : category));
  };

  const categories = {
    BerdasarkanPenyakit: {
      "Batuk, Pilek & Flu": [   
        "- Batuk dan Flu", 
        "- Perawatan Hidung", 
        "- Balsem & Minyak Esensial", 
        "- Untuk Bayi & Anak", 
        "- Pengobatan Herbal"
      ],
      "Masalah Pencernaan": [
        "- Asam Lambung & GERD", 
        "- Diare", 
        "- Sembelit & Wasir", 
        "- Mual dan Muntah",
        "- Infeksi Cacing"
      ],
      "Masalah THT": [
        "- Sariawan & Herpes", 
        "- Obat Kumur Antiseptik", 
        "- Pelega Tenggorokan", 
        "- Obat Tetes Telinga", 
        "- Kebersihan Hidung"
      ],
      "Kondisi Kulit": [
        "- Jerawat", 
        "- Infeksi Kulit", 
        "- Dermatitis & Eksim", 
        "- Obat Kulit Lainnya"
      ],
      "Tulang dan Sendi": [
        "- Tulang & Osteoporosis", 
        "- Relaksan Otot", 
        "- Asam Urat & Radang Sendi", 
        "- Balsem & Minyak"
      ],
      "Alergi": [
        "- Obat Alergi", 
        "- Pereda Gatal"
      ],
      "Demam dan Nyeri": [
        "- Obat Demam & Nyeri", 
        "- Terapi Panas & Dingin", 
        "- Bayi & Anak", 
        "- Pengobatan Herbal"
      ],
      "Masalah Mata": [
        "- Gatal, Kering & Merah", 
        "- Masalah Mata Lainnya"
      ],
      "Infeksi": [
        "- Antibiotik", 
        "- Antivirus", 
        "- Antijamur"
      ],
      "Kesuburan dan Lainnya": [
        "- Kandung Kemih & Ginjal", 
        "- Wanita", 
        "- Pria", 
        "- Pil Kontrasepsi", 
        "- Kesuburan Lainnya"
      ],
      "Obat Lainnya": [
        "- Anti Inflamasi", 
        "- Gangguan Tidur", 
        "- Gangguan Darah", 
        "- Otak & Saraf", 
        "-  Kesehatan Mental", 
        "- Obat Lainnya"
      ]
    }, 

    KesehatanJantung: {
      "Obat Jantung": [   
        "- Hipertensi", 
        "- Penyakit Jantung", 
        "- Kolesterol", 
      ],
      "Monitoring dan Pengelolaan": [   
        "- Alat Monitoring", 
        "- Lanset, Jarum, & Swab",
      ],
      "Vitamin dan Suplemen": [   
        "- Vitamin dan Herbal", 
        "- Makanan dan Nutrisi", 
      ],
    },

    ObatRutin: {
      "Asma": [   
        "- Obat Asma", 
      ],
      "Penyakit Jantung": [  
        "- Obat Jantung", 
      ],
      "Diabetes": [   
        "- Obat Diabetes", 
      ],
    },

    Diabetes: {
      "Obat Diabetes": [   
        "- Obat Diabetes",
      ],
      "Suplemen": [   
        "- Vitamin dan Herbal", 
        "- Nutrisi Diabetes", 
        "- Gula Diabetes"
      ],
      "Insulin": [   
        "- Insulin",
      ],
    },

    OnkologiDanImun: {
      "Obat Kanker": [   
        "- Obat Kanker", 
      ],
      "Obat Imunosupresan": [   
        "- Obat Imunosupresan", 
      ],
    },

    Asma: {
      "Obat Asma": [   
        "- Obat Asma", 
      ],
      "Inhaler": [   
        "- Inhaler", 
      ],
      "Perawatan Asma": [   
        "- Perangkat & Aksesoris",
        "- Kaleng Oksigen" 
      ],
    }

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
              className="cursor-pointer px-6 py-3 w-full flex justify-between items-center"
            >
              <div className="font-header text-2xl px-4 py-2 hover:bg-gray-100 rounded-2xl transition-colors duration-200">
                {mainCategoryGroup}
              </div>
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
                        <Link href={`/categories/medicine/categories/${item}`} key={i} className="hover:text-primary hover:underline transition-colors duration-200">
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
