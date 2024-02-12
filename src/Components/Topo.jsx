import './Topo.css'
export const Topo = () => { 
  return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Quem Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Colaboradores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Categoria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 btn rounded-0 btn-danger" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}


