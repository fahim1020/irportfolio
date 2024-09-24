import { useState } from "react";
import { Divider } from "keep-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const DropDownProject = ({ textColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="relative inline-block">
      <span
        onClick={toggleDropdown}
        className={`cursor-pointer border-none  text-${textColor} text-md`}
      >
        Projects
      </span>
      {isOpen && (
        <div className="absolute mt-2 z-50 text-black w-36 bg-white shadow-lg rounded-md">
          <ul className="py-1">
            <li
              onClick={() => handleItemClick("/projects/web-development")}
              className="block px-4 py-2 cursor-pointer"
            >
              <b>Web Development</b>
            </li>
            <Divider />
            <li
              onClick={() => handleItemClick("/projects/android-apps")}
              className="block px-4 py-2 cursor-pointer"
            >
              <b>Android Apps</b>
            </li>
            <Divider />
            <li
              onClick={() => handleItemClick("/projects/desktop-application")}
              className="block px-4 py-2 cursor-pointer"
            >
              <b>Desktop Application</b>
            </li>
            <Divider />
            <li
              onClick={() => handleItemClick("/projects/npm-package")}
              className="block px-4 py-2 cursor-pointer"
            >
              <b>NPM Package</b>
            </li>
            <Divider />
          </ul>
        </div>
      )}
    </div>
  );
};
DropDownProject.propTypes = {
  textColor: PropTypes.string.isRequired,
};
