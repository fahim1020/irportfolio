import  { useState } from "react";
import {MailChange} from "../changeOptions/MailChange";
import {PassChange} from "../changeOptions/PassChange";

export const ChangeOptions = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "mail":
        return <MailChange />;
      case "pass":
        return <PassChange />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 justify-center flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setActiveComponent("mail")}
        >
          Change Mail
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setActiveComponent("pass")}
        >
          Change Password
        </button>
      </div>
      <div className="w-full">{renderComponent()}</div>
    </div>
  );
};
