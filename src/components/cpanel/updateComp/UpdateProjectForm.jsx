import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "keep-react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";

export const UpdateProjectForm = ({ title }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [projectType, setProjectType] = useState("web-development");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [title]);

  const fetchData = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/single-project`, { title });
      setImageSrc(res.data.imageSrc);
      setDescription(res.data.description);
      setUrl(res.data.url);
      setProjectType(res.data.projectType);
    } catch (err) {
      console.error("Error fetching project data:", err);
      toast.error("Failed to fetch project details.");
    }
  };

  const handleImageChange = (e) => {
    setImageSrc(e.target.value);
  };

  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/update-project`, {
        imageSrc,
        description,
        projectType,
        url,
        title,
      });
      console.log(res);
      // Simulate update success
      toast.success("Project updated successfully!");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Project with similar details already exists!");
      } else {
        toast.error("Failed to update project.");
      }
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <h1 className="text-center text-md text-red-500 mb-4">
          You cannot change the title anymore!
        </h1>
        <div className="mb-4">
          <label
            htmlFor="imageSrc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Upload Image
          </label>
          <input
            id="imageSrc"
            type="url"
            value={imageSrc}
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter image URL"
          />
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Selected"
              className="mt-4 w-full h-64 object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="projectType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Project Type
          </label>
          <select
            id="projectType"
            className="text-black border shadow-lg p-2 rounded cursor-pointer w-full"
            value={projectType}
            onChange={handleProjectTypeChange}
          >
            <option value="web-development">Web Development</option>
            <option value="android-apps">Android Apps</option>
            <option value="desktop-application">Desktop Application</option>
            <option value="npm-package">NPM Package</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            URL
          </label>
          <input
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Project URL"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};
