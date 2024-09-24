import axios from "axios";
import { toast } from "keep-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";

const CreateProjectForm = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [projectType, setProjectType] = useState("web-development");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImageSrc(e.target.value);
  };

  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/create-project`, {
        projectType,
        imageSrc,
        title,
        description,
        url,
      });

      // Reset form fields on successful submission
      setImageSrc("");
      setTitle("");
      setDescription("");
      setUrl("");
      setProjectType("web-development");

      // Show success message to user
      toast.success(res.data);
    } catch (error) {
      // Handle specific error for duplicate project
      if (error.response && error.response.status === 409) {
        toast.error("Project with similar details already exists!");
      } else {
        // Handle other errors
        toast.error("There was an error creating the project!");
      }
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageSrc"
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
        <div className="type mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="projectType"
          >
            Project Type
          </label>
          <select
            name="projectType"
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
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
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
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
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

export default CreateProjectForm;
