import { Navbar } from "keep-react";
import { Link } from "react-router-dom";
import { DropDownProject } from "../navbar/DropDownProject";
export const SideBar = () => {
  return (
    <Navbar.Collapse collapseType="sidebar" className="bg-[beige] text-black">
      <Navbar.Container tag="ul" className="flex flex-col gap-5 ">
        <Link to={"/"}>Home</Link>
        <DropDownProject textColor="black" />
        <Link to={"/about"}>About</Link>

        {/* Coming soon this pages  */}
        {/* <Link to={"/blogs"}>Blogs</Link>
              <Link to={"/news"}>News</Link>
              <Link to={"/resources"}>Resources</Link> */}
      </Navbar.Container>
    </Navbar.Collapse>
  );
};
