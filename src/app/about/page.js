import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#FCF7F8] m-0">
      <Navbar />
      <br /><br /><br /><br /><br /><br />
      <div className="flex-1 p-6 px-8 max-w-[1083px] mx-auto">
        <div className="text-black font-title text-[96px] font-normal">
          ABOUT US
        </div>
        <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
          PharmaCheck is a trusted platform that provides verified information on drugs legally distributed in Indonesia.
          We aim to support healthcare professionals and the public by offering easy access to essential data such as
          drug names, uses, classifications, and official codes—sourced from reliable institutions like the Ministry of Health and BPOM.
        </div>
        <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
          Though focused on Indonesia, PharmaCheck is designed to be a useful reference for medical communities worldwide.
          By promoting accurate and legal drug information, we help improve medical decision-making and contribute to safer,
          more informed healthcare.
        </div>
      </div>
      <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto">
        <div className="text-black font-title text-[96px] font-normal">
          DATA CORRECTNESS
        </div>
        <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
          We take legal, valid and correct data from SatuSehat (Indonesian Ministry of Health). Then to add the truth of the data and its completeness we work with pharmacists from Hermia Podomoro Hospital, with the help of medical experts our data can be tested.
        </div>
        <div className="flex flex-row justify-between items-center w-full max-w-[1083px] gap-8">
          <div className="flex flex-col gap-8">
            <img src="/aboutUs/Kemenkes Logo.png" alt="Kemenkes Logo" className="w-[617px] h-[162px] mb-8" />
            <img src="/aboutUs/BPOM Logo.png" alt="BPOM Logo" className="w-[617px] h-[185px]" />
          </div>
          <img src="/aboutUs/RS Hermina Mitra Logo.png" alt="RS Hermina Logo" className="w-[371px] h-[371px]" />
        </div>
      </div>
      <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto">
        <div className="text-black font-title text-[80px] font-normal mb-8">
          Consumen Complaint Service
        </div>
        <div className="text-black text-justify font-description text-[35px] font-extrabold mb-0">
          Hermina Podomoro Hospital
        </div>
        <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
          Blok E 3, Jl. Danau Agung 2 No.28 - 30, RT.3/RW.16, Sunter Agung, 
          Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14350. 
          Telp: (021) 6404910
        </div>
        <div className="text-black text-justify font-description text-[35px] font-extrabold mb-0">
          BPOM Customer Service
        </div>
        <div className="text-[35px] font-description font-normal text-black text-justify leading-[1.2]">
          Jalan Percetakan Negara Nomor 23 Jakarta - 10560 - Indonesia.<br />
          Telp: HALO BPOM 150053<br />
          SMS: +6281 21 9999 533<br /> 
          Web: https://www.pom.go.id/pengaduan<br />
          E-Mail: halobpom@pom.go.id 
        </div>
      </div>
      <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto">
        <div className="text-black font-title text-[80px] font-normal text-center mb-8">
          OUR PARTNER
        </div>
        <div className="flex flex-row items-start gap-12 mt-8">
          <div>
            <img src="/aboutUs/Morales.png" alt="Morales Photo" className="w-[533px] h-[603px] rounded-[20px]" />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="text-black font-description text-[58px] font-extrabold text-justify my-8">
              Morales S.Farm
            </div>
            <div className="text-[32px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
              Our partner is a pharmacist from hermina podomoro hospital in the field of health services who is experienced and understands about medicine.
            </div>
            <div className="text-[32px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
              With the help of Morales we can guarantee and add information to the data and drug explanations.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto mt-12">
        <div className="text-black font-title text-[80px] font-normal text-center mb-8">
          OUR EXPERT
        </div>
        <div className="w-[947px] text-black text-center font-description text-[32px] font-normal mb-16 leading-[1.2]">
          We Are the team of scientists, thinker, and industry expert from Tarumanagara University students with IT majors. 
        </div>
        <div className="w-[1025px] flex justify-center gap-20 mt-8 flex-wrap">
          <div>
            <img src="/aboutUs/BoviliusMeidi.png" alt="BoviliusMeidi" className="w-[285px] h-[510px] rounded-lg shadow" />
          </div>
          <div>
            <img src="/aboutUs/HansThobieSachio.png" alt="HansThobieSachio" className="mt-12 w-[285px] h-[510px] rounded-lg shadow" />
          </div>
          <div>
            <img src="/aboutUs/JustineDeclan.png" alt="JustineDeclan" className="w-[285px] h-[510px] rounded-lg shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
