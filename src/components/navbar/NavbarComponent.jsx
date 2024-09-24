// import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import { Link } from "react-router-dom";
import { SideBar } from "../navbar/SideBar";
import { DropDownProject } from "../navbar/DropDownProject";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-black">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <img
              src="/logo.jpg"
              alt="keep"
              width="70"
              height="30"
              className="rounded-full"
            />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 text-white"
          >
            <Link to={"/"}>Home</Link>
            <DropDownProject textColor="white" />
            <Link to={"/about"}>About</Link>
          </Navbar.Container>
          <SideBar />
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          {/* <Button size="sm" variant="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button> */}
          <Button size="sm" className="rounded-lg">
            <Link to={"/contact"}>Let&lsquo;s Talk</Link>
          </Button>
          <Navbar.Toggle className="invert" />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
