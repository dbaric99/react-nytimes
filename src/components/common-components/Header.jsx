import { useEffect, useState } from "react";
import LogoSVGComponent from "./LogoSVGComponent";
import sprite from "../../assets/images/sprite.svg";

function Header() {

  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  function toggleTheme() {
    setToggleDarkMode(!toggleDarkMode);
  }

  useEffect(()=>{
    var currentPage = window.location.pathname.slice(1);
    var elementId = currentPage ? currentPage : 'home';

    document.getElementById(elementId).classList.add('active');
  },[])

  useEffect(() => {
    if(toggleDarkMode) {
      document.documentElement.style.setProperty('--main-white', '#343c44');
      document.documentElement.style.setProperty('--main-black', '#f4f3ee');

      document.documentElement.style.setProperty('--main-orange', '#2d93ad');
      document.documentElement.style.setProperty('--main-blue', '#ce8147');

      document.documentElement.style.setProperty('--background', '#000');
    } else {
      document.documentElement.style.setProperty('--main-black', '#343c44');
      document.documentElement.style.setProperty('--main-white', '#f4f3ee');

      document.documentElement.style.setProperty('--main-orange', '#ce8147');
      document.documentElement.style.setProperty('--main-blue', '#2d93ad');

      document.documentElement.style.setProperty('--background', '#fff');
    }
  }, [toggleDarkMode])

  return (
    <div className={`header layout-spacing ${toggleDarkMode ? 'dark' : ''}`}>
      <LogoSVGComponent className='header__logo' height="40px" fill={toggleDarkMode ? "#f4f3ee" : ""}></LogoSVGComponent>
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
      <svg className="header__theme__icon" height="20px" width="20px" onClick={toggleTheme}>
        <use href={sprite + (toggleDarkMode ? "#bright-mode-icon" : "#dark-mode-icon")} />
      </svg>
    </div>
  );
}

export { Header };
