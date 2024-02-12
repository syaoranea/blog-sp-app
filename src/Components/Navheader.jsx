import './Navheader.css'
import imgagemEscolhida from '../assets/img/logo-light.png'
export const Navheader = () => { 
  return (
    <header id="header" class="fixed-top">
  <div class="header-inner">

    <nav class="navbar navbar-default">
      <div class="navbar-inner">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">

            <li class="dropdown dropdown-hover active">
              <a  class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home
                <span class="caret-2"><i class="fas fa-chevron-down"></i></span>
              </a>
            </li>

            <li class="dropdown dropdown-hover">
              <a  class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Galeria
                <span class="caret-2"><i class="fas fa-chevron-down"></i></span>
              </a>
            </li>

            <li class="dropdown dropdown-hover">
              <a  class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Eventos
                <span class="caret-2"><i class="fas fa-chevron-down"></i></span>
              </a>
            </li>

            <li class="dropdown dropdown-hover">
              <a  class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Noticias
                <span class="caret-2"><i class="fas fa-chevron-down"></i></span>
              </a>
            </li>

            <li class="dropdown dropdown-hover dropdown-menu-right">
              <a  class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contato
                <span class="caret-2"><i class="fas fa-chevron-down"></i></span>
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