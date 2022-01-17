import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className="nav-link active" aria-current="page" href="#">
               <Link to="/"> Home</Link>
              </li>
              <li className="nav-link" href="#">
              <Link to="/about"> About</Link>
              </li>
              <li className="nav-link" href="#">
              <Link to="/contact"> Contact</Link>
              </li>
              <li className="nav-link" href="#" style={{right: '10px',  position: 'absolute'}}>
              <Link to="/user/add">Add <i className="fas fa-plus"></i></Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
