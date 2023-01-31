import { useEffect } from "react";
import LogoSVGComponent from "./LogoSVGComponent";

function Header() {

  useEffect(()=>{
    var currentPage = window.location.pathname.slice(1);
    var elementId = currentPage ? currentPage : 'home';
    document.getElementById(elementId).classList.add('active');
  },[])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <LogoSVGComponent height="40px"></LogoSVGComponent>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a id="home" className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a id="top" className="nav-link" href="/top">
                Top Articles
              </a>
            </li>
            <li className="nav-item">
              <a id="popular" className="nav-link" href="/popular">
                Popular Articles
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
