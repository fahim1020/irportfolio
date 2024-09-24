// src/pages/ProjectDetails.jsx
import { Button, Divider } from "keep-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const ProjectDetails = () => {
  // Check with id that data exist or not and then add
  const navigate = useNavigate();
  let location = useLocation();
  const { imageSrc, title, description, url } = location.state;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 text-black">{title}</h1>
          <Divider />
          <p className="text-gray-700 mt-4">{description}</p>
          <p className="text-gray-700 mt-4 ">
            <Link
              to={url}
              target="_blank"
              className="font-bold hover:text-green-500 duration-200"
            >
              {url}
            </Link>
          </p>
          <Button
            className="mt-4 w-[130px]"
            onClick={() => {
              navigate(-1);
            }}
          >
            <div>
              Go Back
              <lord-icon
                src="https://cdn.lordicon.com/vduvxizq.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ position: "absolute" }}
              ></lord-icon>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
