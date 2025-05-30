import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#FCF7F8] m-0">
      <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
        <Navbar/>
        <br /><br /><br /><br /><br /><br />
        <div className="flex-1 p-6 px-8 max-w-[1083px] mx-auto">
          <div className="text-black font-title text-[96px] font-normal">
            TENTANG KAMI
          </div>
          <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
            PharmaCheck adalah platform tepercaya yang menyediakan informasi terverifikasi tentang obat-obatan yang didistribusikan secara legal di Indonesia.
            Kami bertujuan untuk mendukung para profesional kesehatan dan masyarakat dengan menawarkan akses mudah ke data penting seperti
            nama obat, kegunaan, klasifikasi, dan kode resmi yang bersumber dari institusi terpercaya seperti Kementerian Kesehatan dan BPOM.
          </div>
          <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
            Meskipun berfokus pada Indonesia, PharmaCheck dirancang untuk menjadi referensi yang berguna bagi komunitas medis di seluruh dunia.
            Dengan mempromosikan informasi obat yang akurat dan legal, kami membantu meningkatkan pengambilan keputusan medis dan berkontribusi pada perawatan kesehatan yang lebih aman,
            perawatan kesehatan yang lebih aman dan terinformasi.
          </div>
        </div>
      
          <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto">
            <div className="text-black font-title text-[96px] font-normal">
              KEBENARAN DATA
            </div>
            <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
              Kami mengambil data yang sah, valid dan benar dari SatuSehat (Kementrian Kesehatan RI). Kemudian untuk menambah kebenaran data dan kelengkapannya kami bekerja sama dengan apoteker dari Rumah Sakit Hermia Podomoro, dengan bantuan para ahli medis data kami dapat teruji.
            </div>        
            <div className="flex flex-row justify-between items-center w-full max-w-[1083px] gap-8">
              <div className="flex flex-col gap-8">
                <Image 
                  src="/aboutUs/Kemenkes Logo.png" 
                  alt="Kemenkes Logo" 
                  className="object-contain mb-8"
                  width={617}
                  height={162} />
                <Image 
                  src="/aboutUs/BPOM Logo.png" 
                  alt="BPOM Logo" 
                  className="object-contain"
                  width={617}
                  height={162} />
              </div>
              <Image 
                src="/aboutUs/RS Hermina Mitra Logo.png" 
                alt="RS Hermina Logo" 
                className="object-contain"
                width={371}
                height={371} />
            </div>
          </div>
        <div className="relative bg-[#FCF7F8] pt-12">
          {/* Background wave */}
          <Image
            src="/background/wave-bottom.svg"
            alt="wave background"
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
            priority
            fill
          />

          {/* Konten tetap terbatas max-w dan di atas wave */}
          <div className="relative flex-1 px-8 max-w-[1083px] mx-auto text-black z-10">
            <div className="font-title text-[80px] font-normal mb-8">
              Layanan Keluhan Konsumen
            </div>
            <div className="text-justify font-description text-[35px] font-extrabold mb-0">
              Rumah Sakit Hermina Podomoro
            </div>
            <div className="text-justify font-description text-[35px] font-normal mb-8 leading-[1.2]">
              Blok E 3, Jl. Danau Agung 2 No.28 - 30, RT.3/RW.16, Sunter Agung, 
              Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14350. 
              Telp: (021) 6404910
            </div>
            <div className="text-justify font-description text-[35px] font-extrabold mb-0">
              Layanan Pengaduan BPOM
            </div>
            <div className="text-justify font-description text-[35px] font-normal leading-[1.2]">
              Jalan Percetakan Negara Nomor 23 Jakarta - 10560 - Indonesia.<br />
              Telp: HALO BPOM 150053<br />
              SMS: +6281 21 9999 533<br /> 
              Web: https://www.pom.go.id/pengaduan<br />
              E-Mail: halobpom@pom.go.id 
            </div>
          </div>
        </div>
        <div className="bg-[url('/background/green-wave.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">  
          <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto">
            <div className="text-black font-title text-[80px] font-normal text-center mb-8">
              MITRA KAMI
            </div>
            <div className="flex flex-row items-start gap-12 mt-8">
              <div>
                <Image 
                  src="/aboutUs/Morales.png" 
                  alt="Morales Photo" 
                  className="object-contain rounded-[20px]" 
                  width={533}
                  height={603}/>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-black font-description text-[58px] font-extrabold text-justify my-8">
                  Morales S.Farm
                </div>
                <div className="text-[32px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
                  Mitra kami adalah apoteker dari rumah sakit hermina podomoro di bidang pelayanan kesehatan yang sudah berpengalaman dan mengerti tentang obat-obatan.
                </div>
                <div className="text-[32px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
                  Dengan bantuan Morales, kami dapat menjamin dan menambahkan informasi pada data dan penjelasan obat.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto mt-12">
          <div className="text-black font-title text-[80px] font-normal text-center mb-8">
            Team Ahli PharmaCheck
          </div>
          <div className="w-[947px] text-black text-center font-description text-[32px] font-normal mb-16 leading-[1.2]">
            Kami adalah tim yang terdiri dari para ilmuwan, pemikir, dan pakar industri dari mahasiswa Universitas Tarumanagara jurusan IT. 
          </div>
          <div className="w-[1025px] flex justify-center gap-20 mt-8 flex-wrap">
            <div>
              <Image 
                src="/aboutUs/BoviliusMeidi.png" 
                alt="BoviliusMeidi" 
                className="object-contain rounded-3xl shadow"
                width={285}
                height={510} />
            </div>
            <div>
              <Image 
                src="/aboutUs/HansThobieSachio.png" 
                alt="HansThobieSachio" 
                className="object-contain mt-12 rounded-3xl shadow" 
                width={285}
                height={510}/>
            </div>
            <div>
              <Image 
                src="/aboutUs/JustineDeclan.png" 
                alt="JustineDeclan" 
                className="object-contain rounded-3xl shadow"
                width={285}
                height={510} />
            </div>
          </div>
        </div>
       </div>
      <Footer/>
    </div>
  );
}
