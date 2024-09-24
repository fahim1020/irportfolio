import { Envelope, Lock } from "phosphor-react";
import { useState } from "react";
import { Button, Icon, Input, Label, toast } from "keep-react";
import { API_URL } from "../../../config";
import axios from "axios";

export const Delete = () => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDeleteProject = async (e) => {
    e.preventDefault();
    if(title==="" || password===""){
      toast.error("Please fill all the fields!");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/api/delete-project`, {
        title,
        password,
      });
      toast.success(res.data.message || "Project deleted successfully!");
    } catch (error) {
      // console.error("There was an error deleting the project!", error);
      if (error.response) {
        toast.error(error.response.data || "Error occurred!");
      } else if (error.request) {
        toast.info("No response from server!");
      } else {
        toast.error("Error in setting up the request!");
      }
    }
    setTitle("");
    setPassword("");
  };

  return (
    <div className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md bg-gray-800">
      <form onSubmit={handleDeleteProject}>
        <fieldset className="space-y-1">
          <Label htmlFor="title" className="text-white">
            Title
          </Label>
          <div className="relative">
            <Input
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter project title"
              className="ps-11 placeholder:text-black"
            />
            <Icon>
              <Envelope size={19} color="#AFBACA" />
            </Icon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              className="ps-11 placeholder:text-black"
            />
            <Icon>
              <Lock size={19} color="#AFBACA" />
            </Icon>
          </div>
        </fieldset>
        <Button
          size="sm"
          color="secondary"
          type="submit"
          className="my-2 bg-red-500 hover:bg-red-700 duration-200"
        >
          Delete
        </Button>
  
      </form>
    </div>
  );
};
