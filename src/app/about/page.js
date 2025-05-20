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
            <img src="/Kemenkes Logo.png" alt="Kemenkes Logo" className="kemenkes-icon" />
            <img src="/BPOM Logo.png" alt="BPOM Logo" className="bpom-icon" />
          </div>
          <img src="/RS Hermina Mitra Logo.png" alt="RS Hermina Logo" className="hermina-icon" />
        </div>
      </div>
    </div>
  );
}
