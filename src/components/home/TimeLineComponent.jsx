import { Timeline } from "keep-react";

export const TimelineComponent = () => {
  return (
    <div className="time-line bg-white text-black w-11/12 sm:w-2/3 rounded-t-xl p-4 mx-auto mt-6">
      <Timeline className="bg-gray-100">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400">
              {" "}
              may 1,2024{" "}
            </p>
            <h1 className="text-body-3 font-medium text-metal-900">
              Step 1 Completed
            </h1>
            <p className="text-body-4 font-normal text-metal-600">
              Created a cross-platform desktop application using Electron. This
              step involved integrating web technologies with Electron to
              deliver a seamless desktop experience.
            </p>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400">
              January 1 ,2024
            </p>
            <h1 className="text-body-3 font-medium text-metal-900">
              Step 2 Completed
            </h1>
            <p className="text-body-4 font-normal text-metal-600">
              Developed a full-stack web application using the MERN stack
              (MongoDB, Express.js, React, Node.js). This step included setting
              up the backend, creating APIs, and building a dynamic and
              interactive frontend.
            </p>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400">
              August 1,2023
            </p>
            <h1 className="text-body-3 font-medium text-metal-900">
              Step 3 Completed
            </h1>
            <p className="text-body-4 font-normal text-metal-600">
              Successfully designed a responsive and visually appealing website
              using HTML, CSS, and JavaScript. This step involved creating
              wireframes, mockups, and implementing a user-friendly interface.
            </p>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
