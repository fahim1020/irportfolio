import { Envelope } from "phosphor-react";
import { Button, Icon, Input, toast } from "keep-react";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../config";
import { isValidEmail } from "../../../../functions/isValidEmail";
export const InputFieldForChange = ({ Type }) => {
  const [enter, setEnter] = useState("");
  const [newEnter, setNewEnter] = useState("");

  const handleEnterChange = (e) => {
    setEnter(e.target.value);
  };

  const handleNewEnterChange = (e) => {
    setNewEnter(e.target.value);
  };

  const handleSubmitForChange = async () => {
    if (enter === "" || newEnter === "") {
      toast.info("Input fields are required");
      return;
    }

    try {
      let dataToSend;

      if (Type === "Password") {
        dataToSend = {
          password: enter,
          newPassword: newEnter,
        };
      } else if (Type === "Email") {
        if (!isValidEmail(enter) || !isValidEmail(newEnter)) {
          toast.error("Invalid email format");
          return;
        }
        dataToSend = {
          email: enter,
          newEmail: newEnter,
        };
      }

      const res = await axios.post(
        `${API_URL}/api/change-security`,
        dataToSend
      );

      if (res.status === 200) {
        toast.success(`Successfully changed ${Type}`);
        setEnter("");
        setNewEnter("");
      } else {
        // Assuming the backend sends an error message for incorrect email or password
        toast.error(res.data.error || `Current ${Type} is not correct`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error(`Failed to change ${Type}`);
    }
  };

  return (
    <div className="p-4 mx-auto bg-gray-400 w-full md:w-1/2 flex items-center rounded-lg shadow-md flex-col">
      <fieldset className="relative max-w-md my-2 w-full">
        <Input
          placeholder={`Enter ${Type}`}
          className="ps-11 w-full placeholder:text-black"
          value={enter}
          onChange={handleEnterChange}
        />
        <Icon className="absolute top-1/2 transform -translate-y-1/2">
          <Envelope size={19} color="#AFBACA" />
        </Icon>
      </fieldset>
      <fieldset className="relative max-w-md my-2 w-full">
        <Input
          placeholder={`New ${Type}`}
          className="ps-11 w-full placeholder:text-black"
          value={newEnter}
          onChange={handleNewEnterChange}
        />
        <Icon className="absolute top-1/2 transform -translate-y-1/2">
          <Envelope size={19} color="#AFBACA" />
        </Icon>
      </fieldset>
      <Button color="primary" variant="outline" onClick={handleSubmitForChange}>
        Change {Type}
      </Button>
    </div>
  );
};

InputFieldForChange.propTypes = {
  Type: PropTypes.oneOf(["Password", "Email"]).isRequired,
};


