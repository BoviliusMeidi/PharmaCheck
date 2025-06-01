import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CategoryTable2({ title }) {
  const [openedCategory, setOpenedCategory] = useState("VitaminSuplement");

  const handleToggle = (category) => {
    setOpenedCategory((prev) => (prev === category ? null : category));
  };

  const categories = {
    VitaminDanSuplemen: {
      "Kesehatan Dan Imun":[   
        "Vitamin A, B & E", 
        "Vitamin D", 
        "Vitamin C", 
        "Multivitamin", 
        "Mineral"
        ],
      "Bayi dan Anak":[
        "Multivitamin Anak", 
        "Imun Booster", 
        "Anemia untuk Anak", 
        "Penambah Nafsu Makan",
        ],
      "Vitamin Pria":[
        "Kesehatan Prostata", 
        "Vitalitas & Stamina", 
        ],
      "Vitamin Wanita":[
        "Kehamilan & Menyusui", 
        "Menopause", 
        "Anemia", 
        ],
      "Tulang dan Sendi":[
        "Tulang dan Gigi", 
        "Persendian", 
        ],
      "Kecantikan":[
        "Rambut, Kulit & Kuku", 
        "Antioksidan", 
        "Vitamin E", 
        ],
      "Kesehatan Pencernaan":[
        "Probiotik", 
        "Serat", 
        "Enzim Pencernaan",
        ],
      "Diet, Sehat & Bugar":[
        "Penurunan Berat Badan", 
        "Nutrisi Lainnya", 
        "Penambah Berat & Otot", 
        "Snack Sehat",
        "Produk Minuman"
        ],
      "Produk Alami":[
        "Obat Herbal", 
        "Madu & Kurma", 
        "Habbatussauda & Zaitun",
        ],
    }, 

    IbuDanAnak: {
      "Bayi dan Anak":[   
        "Telon & Kayu Putih",
        "Perawatan Kulit Bayi",
        "Lainnya (Bayi dan Anak)",
        ],
      "Nutrisi":[   
        "Makanan dan Snack", 
        "Susu", 
        "Peralatan Makan", 
        "Susu Khusus", 
        ],
      "Kehamilan dan Menyusui":[   
        "Perawatan Ibu Hamil", 
        "Perlengkapan Menyusui", 
        "Nutrisi Bersalin", 
        ],
      "Popok dan Tisu Basah":[   
        "Popok Bayi", 
        "Tisu Basah", 
        ],
      "Kesehatan Bayi dan Anak":[   
        "Plester Bayi & Anak", 
        "Hidung Tersumbat", 
        "Dekongestan & Minyak", 
        ],
      "Lainnya Bayi dan Anak":[   
        "Perlengkapan Pembersih", 
        "Sanitizer & Antiseptik", 
        "Lainnya Ibu dan Anak", 
        ],                
    },

    KecantikanDanPerawatanDiri: {
      "Perawatan Jerawat":[
        "Perawtaan Jerawat",    
        "Acne Patch & Jel", 
        ],
      "Kosmetik & Kecantikan":[   
        "Wajah", 
        "Kuku", 
        "Mata & Bibir", 
        "Aksesoris Kecantikan",
        ],     
      "Eksim":[   
        "Eksim", 
        ],      
      "Perawatan Pria":[   
        "Perawatan Wajah Pria", 
        "Perawatan Rambut Pria", 
        "Pisau Cukur", 
        "Deodoran & Pewangi", 
        "Perawatan Tubuh",
        "Lainnya"
        ],      
      "Perawatan Diri":[   
        "Badan, Gigi, Rambut", 
        "Deodoran & Pewangi", 
        "Perawatan Tangan", 
        "Perawatan Kewanitaan", 
        "Produk Sekali Pakai",
        "Lainnya "
        ],      
      "Perlindungan Matahari":[   
        "Sunblock & Sunscreen", 
        ],      
      "Perawatan Kulit":[   
        "Perawatan Wajah", 
        "Perawatan Kulit Berjerawat", 
        "Perawatan Tubuh", 
        ],
    }, 

    KesehatanSeksual: {
      "Hormon Wanita":[   
        "Hormon Wanita", 
        ],
      "Disfungsi Ereksi":[   
        "Disfungsi Ereksi", 
        ],
      "Perawatan Kewanitaan":[   
        "Perawatan Kewanitaan", 
        ],
      "Test Pack":[   
        "Test Pack", 
        ],
      "Kondom & Pelumas":[   
        "Kondom & Pelumas", 
        ]
    },  
    Susu: {
      "Susu Dewasa":[   
        "Orang Dewasa", 
        "Lansia", 
        "Susu Khusus", 
        ],
       "Bayi & Anak":[   
        "Susu Formula Bayi", 
        "Susu Formula Anak", 
        ],
      "Susu Medis Khusus":[   
        "Susu Medis Khusus", 
        ],
      "Lainnya":[   
        "Lainnya Dari Susu", 
        ],
    },  
    PerawatanHidung: {
      "Perawatan Dewasa":[   
        "Dewasa", 
        ],
      "Anak":[   
        "Perawatan Anak", 
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
