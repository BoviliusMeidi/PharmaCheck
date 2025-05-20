import './about.css';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <div className="about-container">
      <Navbar />

      <div className="about-first-page">
        <div className="about-title">ABOUT US</div>
        <div className="about-text">
          PharmaCheck is a trusted platform that provides verified information on drugs legally distributed in Indonesia.
          We aim to support healthcare professionals and the public by offering easy access to essential data such as
          drug names, uses, classifications, and official codes—sourced from reliable institutions like the Ministry of Health and BPOM.
        </div>
        <div className="about-text">
          Though focused on Indonesia, PharmaCheck is designed to be a useful reference for medical communities worldwide.
          By promoting accurate and legal drug information, we help improve medical decision-making and contribute to safer,
          more informed healthcare.
        </div>
      </div>  
      <div className="about-second-page">
        <div className="about-title">DATA CORRECTNESS</div>
        <div className="about-text">
          We take legal, valid and correct data from SatuSehat (Indonesian Ministry of Health). Then to add the truth of the data and its completeness we work with pharmacists from Hermia Podomoro Hospital, with the help of medical experts our data can be tested.
        </div>
        <div className="logo-container">
          <div className="logo-column">
            <img src="/aboutUs/Kemenkes Logo.png" alt="Kemenkes Logo" className="kemenkes-icon" />
            <img src="/aboutUs/BPOM Logo.png" alt="BPOM Logo" className="bpom-icon" />
          </div>
          <img src="/aboutUs/RS Hermina Mitra Logo.png" alt="RS Hermina Logo" className="hermina-icon" />
        </div>
      </div>
      <div className="about-third-page">
        <div className="about-titles">Consumen Complaint Service</div>
        <div className="about-subtitle">
          Hermina Podomoro Hospital
        </div>
        <div className='about-text'>
          Blok E 3, Jl. Danau Agung 2 No.28 - 30, RT.3/RW.16, Sunter Agung, 
          Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14350. 
          Telp: (021) 6404910
        </div>
        <div className="about-subtitle">
          BPOM Customer Service
        </div>
        <div className='about-text'>
          Jalan Percetakan Negara Nomor 23 Jakarta - 10560 - Indonesia.<br />
          Telp: HALO BPOM 150053<br />
          SMS: +6281 21 9999 533<br /> 
          Web: https://www.pom.go.id/pengaduan<br />
          E-Mail: halobpom@pom.go.id 
        </div>
      </div>
      <div className="about-fourth-page">
        <div className="about-titles text-center">OUR PARTNER</div>
        <div className="partner-content">
          <div className="partner-image">
            <img src="/aboutUs/Morales.png" alt="Morales Photo" className="morales-photo" />
          </div>
          <div className="partner-text">
            <div className="about-name">Morales S.Farm</div>
            <div className="about-texts">
              Our partner is a pharmacist from hermina podomoro hospital in the field of health services who is experienced and understands about medicine.
            </div>
            <div className="about-texts">
              With the help of Morales we can guarantee and add information to the data and drug explanations.
            </div>
          </div>
        </div>
      </div>
      <div className="about-fifth-page">
        <div className="about-titles text-center">OUR EXPERT</div>
        <div className="about-expert-text">
              We Are the team of scientists, thinker, and industry expert from Tarumanagara University students with IT majors. 
        </div>
        <div className="about-image-row">
          <div className="about-image-Bovi">
            <img src="/aboutUs/BoviliusMeidi.png" alt="BoviliusMeidi" />
          </div>
          <div className="about-image-Hans">
            <img src="/aboutUs/HansThobieSachio.png" alt="HansThobieSachio" />
          </div>
          <div className="about-image-Dec">
            <img src="/aboutUs/JustineDeclan.png" alt="JustineDeclan" />
          </div>
        </div>
      </div>
    </div>
  );
}
