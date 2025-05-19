import './navbar.css'; 

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="PharmaCheck Logo" className="logo-img"/>
      </div>

      <nav className="nav-pills">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link active">About</a>
        <a href="#" className="nav-link">Verify</a>
        <a href="#" className="nav-link">Categories</a>
      </nav>

      <div className="lang-switch">
        <button className="lang-btn active">
          <img src="/USA Flag.png" alt="US Flag" className="flag-icon" />
          ENG
        </button>
        <button className="lang-btn">
          <img src="/Indonesia Flag.png" alt="ID Flag" className="flag-icon" />
          IND
        </button>
      </div>
    </header>
  );
}
