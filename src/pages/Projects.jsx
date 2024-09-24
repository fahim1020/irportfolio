import { useEffect, useState } from "react";
import { ProjectBox } from "../components/projects/ProjectBox";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";
import NotFound from "../pages/NotFound";
import axios from "axios";

const Projects = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedData = await axios.get(
          `${API_URL}/api/get-project?id=${id}`
        );
        setData(fetchedData.data);
        // console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [id]);

  if (data.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-items-center r gap-2 m-4">
      {data.map((project) => (
        <div key={project._id}>
          <ProjectBox
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            url={project.url}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
