import { usePathname } from "next/navigation";
import Router, { useRouter } from "next/router"
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <header className="main-header clearfix" role="header">
      <div className="logo" onClick={() => { router.push("./") }}>
        <a href="#">
          <em>2</em> Peerfect
        </a>
      </div>
      <a href="#menu" className="menu-link">
        <i className="fa fa-bars" />
      </a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          {path != "/register" && path != "/login" &&
            <>
              <li>
                <a href="#section1">Home</a>
              </li>
              <li>
                <a href="#section2">About Us</a>
              </li>
              <li>
                <a href="#section4">Courses</a>
              </li>
              <li>
                <a href="#section6">Contact</a>
              </li>
            </>
          }
          <li className="text-light cursor-pointer">
            <li className="has-submenu">
            <a href="#section1">Connect</a>
            <ul className="sub-menu">
              <li>
                <a onClick={() => { router.push("./login") }} href="#section1">Login</a>
              </li>
              <li>
                <a onClick={() => { router.push("./register") }} href="#section1">Sign ip</a>
              </li>
            </ul>
          </li>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header

