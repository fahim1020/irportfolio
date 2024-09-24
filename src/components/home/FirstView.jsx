import { ReactTyped } from "react-typed";
import irfahim2 from "../../assets/irfahim2.jpg";


export const FirstView = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Electron",
    "C++",
    "Competitive Programming",
    "Web Design",
    "Web Development",
    "Desktop App Development",
  ];

  return (
    <div
      className="h-screen bg-cover bg-center relative mt-2"
      style={{ backgroundImage: `url(${irfahim2})` }}
    >
      <div className="flex flex-col  items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-2xl">
          I&apos;M{" "}
          <span className="text-orange-400 text-4xl">
            <b>ISTIAK</b>
          </span>
        </h1>

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Expertise in{" "}
          <ReactTyped strings={skills} typeSpeed={100} backSpeed={50} loop />
        </h1>
      </div>
    </div>
  );
};