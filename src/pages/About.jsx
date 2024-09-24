import { Link } from "react-router-dom";
import profileImage from "../assets/irfahim.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center sm:h-screen lg:h-screen  bg-gray-100 text-black h-[60rem]">
      <div className="lg:w-1/2 p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          Hello! I&apos;m <b>Istiak</b>, a Web developer based in{" "}
          <b>Bangladesh</b>.
        </p>
        <p className="text-lg mb-4">
          I specialize in <b>MERN</b>, and I&apos;m passionate about Web
          development.
        </p>
        <p className="text-lg mb-4">
          With 1 years of experience in <b>Web development</b>, I have developed
          skills in HTML, CSS, Javascript, React.js, Node.js, Tailwindcss,.
        </p>
        <p className="text-lg mb-4">In my free time, I enjoy Coding.</p>
      </div>
      <div className="lg:w-1/3 p-8">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-lg shadow-lg"
        />
        <h1 className="text-center font-bold">
          <Link to={"/cpanel"}> I&apos;m Admin</Link>
        </h1>
      </div>
    </div>
  );
};

export default About;
