
import { Navbar} from "flowbite-react";
import { NavLink } from "react-router-dom";
export function NavbarCompo() {
  const menuList=[
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/about",
      title: "About"
    },
    {
      path: "/product",
      title: "Product"
    },
    {
      path: "/service",
      title: "Service"
    },
  ]

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {
          menuList.map((menu, index) => (
            <NavLink to={menu.path} key={index} className={({isActive}) => (
              isActive ? "text-blue-600" : "text-black"
            )}>
              {menu.title}
            </NavLink>
          ))
        }
        {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
