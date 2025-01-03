import './Nav.css'
const Nav = () => {
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbarcolor">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" id="zzz">Home</a>
            </li>
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                About Diabetes
              </a>
              <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/definition">Defintion About Diabetes</a></li>
                <li><a className="dropdown-item" href="/type1">Type 1</a></li>
                <li><a className="dropdown-item" href="/type2">Type 2</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tips">Tips About Diabetes</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" id="buttonnavbar"
              type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
    
}
export default Nav ;