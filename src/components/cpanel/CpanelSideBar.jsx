import { ArchiveTray, Gear, SignIn, SquaresFour, Trash } from "phosphor-react";
import { Sidebar } from "keep-react";
// All components
import { Create } from "./createComp/Create";
import { Delete } from "./deleteComp/Delete";
import { Update } from "./updateComp/Update";
import { Settings } from "./settings/Settings";
import {  useState } from "react";
import { Messages } from "../Messages";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { COOKIE_NAME } from "../../config.js";

export const CpanelSideBar = () => {
  // Component management state
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const navigate = useNavigate();
  const renderComponent = () => {
    switch (selectedComponent) {
      case "create":
        return <Create />;
      case "delete":
        return <Delete />;
      case "update":
        return <Update />;
      case "settings":
        return <Settings />;
      case "messages":
        return <Messages />;
      default:
        return <Create />;
    }
  };

  const handleLogout = () => {
    Cookies.remove(COOKIE_NAME);

    navigate("./login");
  };

  return (
    <div className="flex">
      <Sidebar className="max-w-max p-4 cursor-pointer">
        <Sidebar.Item onClick={() => setSelectedComponent("create")}>
          <SquaresFour size={24} />
        </Sidebar.Item>
        <Sidebar.Item onClick={() => setSelectedComponent("update")}>
          <ArchiveTray size={24} />
        </Sidebar.Item>
        <Sidebar.Item onClick={() => setSelectedComponent("delete")}>
          <Trash size={24} />
        </Sidebar.Item>
        {/* <Sidebar.Item onClick={() => setSelectedComponent("messages")}>
          <Chat size={24} />
        </Sidebar.Item> */}
        <Sidebar.Item onClick={() => setSelectedComponent("settings")}>
          <Gear size={24} />
        </Sidebar.Item>

        <Sidebar.Item onClick={handleLogout}>
          <SignIn size={24} />
        </Sidebar.Item>
      </Sidebar>
      <div className="flex-1 p-4">{renderComponent()}</div>
    </div>
  );
};
