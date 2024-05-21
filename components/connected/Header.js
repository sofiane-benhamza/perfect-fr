import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const menuLink = document.querySelector('.menu-link');
    const mainNav = document.querySelector('.main-nav');

    const toggleMenu = () => {
        mainNav.classList.toggle('d-none');
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        mainNav.classList.remove('d-none'); // Ensure menu is visible when resizing to a larger window
      }
    };

    if (menuLink) {
      menuLink.addEventListener('click', toggleMenu);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      if (menuLink) {
        menuLink.removeEventListener('click', toggleMenu);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="main-header clearfix" role="header">
      <div className="logo" onClick={() => { router.push("/") }}>
        <a href="#">
          <em>2</em> Peerfect
        </a>
      </div>
      <a href="#menu" className="menu-link">
        <i className="fa fa-bars" />
      </a>
      <nav id="menu" className="main-nav " role="navigation">
        <ul className="main-menu">
          <li>
            <a href="#section1"  onClick={()=>{router.push("../home")}}>Home</a>
          </li>
          <li>
            <a href="#section4" onClick={()=>{router.push("../courses")}}>Courses</a>
          </li>
          <li className="text-light cursor-pointer has-submenu">
            <a href="#section1">Sofiane</a>
            <ul className="sub-menu">
              <li>
                <a onClick={() => { router.push("/login") }} href="#section1">Settings</a>
              </li>
              <li>
                <a onClick={() => { router.push("/register") }} href="#section1">Disconnect</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
