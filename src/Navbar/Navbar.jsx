import "./Navbar.css";
import Button from '../Button/Button'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top matches-matcha">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            <span style={{ marginRight: "6px" }}>🍵</span><span className="brand-accent">Café</span>
          </a>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Menu</a>
            </li>

          </ul>
          <form className="d-flex search-box-wrapper" role="search">
            <input className="form-control me-2" type="search" placeholder="Search sweet treats..." aria-label="Search" />
            <Button text="contact" />

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
