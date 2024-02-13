import './Navheader.css'
import imgagemEscolhida from '../assets/img/loguin.png'
export const Navheader = () => { 
  return (
    <header id="header" className="fixed-top">
  <div className="header-inner">
  <div id="logo">
      <a href="index.html" className="logo-dark"><img src={imgagemEscolhida} alt="logo"/></a>
      <a href="index.html" className="logo-light"><img src={imgagemEscolhida} alt="logo"/></a>
    </div>

    <nav className="navbar navbar-default">
      <div className="navbar-inner">

        <div className="navbar-header">
          <button type="button" classNameName="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">

            <li className="dropdown dropdown-hover active">
              <a  className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home
                <span className="caret-2"></span>
              </a>
            </li>

            <li className="dropdown dropdown-hover">
              <a  className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Galeria
                <span className="caret-2"></span>
              </a>
            </li>

            <li className="dropdown dropdown-hover">
              <a  className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Eventos
                <span className="caret-2"></span>
              </a>
            </li>

            <li className="dropdown dropdown-hover">
              <a  className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Noticias
                <span className="caret-2"></span>
              </a>
            </li>

            <li className="dropdown dropdown-hover dropdown-menu-right">
              <a  className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contato
                <span className="caret-2"></span>
              </a>
            </li>
          

          </ul> 
        </div> 

      </div> 
    </nav>
   

  </div>
</header>
  )
}