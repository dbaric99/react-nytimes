import { useEffect } from "react";
import LogoSVGComponent from "./LogoSVGComponent";
import sprite from "../../assets/images/sprite.svg";

function Header() {

  useEffect(()=>{
    var currentPage = window.location.pathname.slice(1);
    var elementId = currentPage ? currentPage : 'home';

    document.getElementById(elementId).classList.add('active');
  },[])

  return (
    <div className="header layout-spacing">
      <LogoSVGComponent className="header__logo" height="40px"></LogoSVGComponent>
      <nav className="header__navbar__wrapper">
          <ul className="header__navbar">
            <li className="header__navbar__item">
              <a id="home" className="header__navbar__link" href="/">
                Home
              </a>
            </li>
            <li className="header__navbar__item">
              <a id="top" className="header__navbar__link" href="/top">
                Top Articles
              </a>
            </li>
            <li className="header__navbar__item">
              <a id="popular" className="header__navbar__link" href="/popular">
                Popular Articles
              </a>
            </li>
          </ul>
      </nav>
      <svg className="header__theme__icon" height="20px" width="20px">
        <use href={sprite + "#dark-mode-icon"} />
      </svg>
    </div>
  );
}

export { Header };
