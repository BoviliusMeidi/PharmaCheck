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
    </div>
  );
}
