import { FirstView } from "../components/home/FirstView";
import { HomeCarousel } from "../components/home/HomeCarousel";

import { ThanksForScrolling } from "../components/home/ThanksForScrolling";
import { TimelineComponent } from "../components/home/TimeLineComponent";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <FirstView />
      <TimelineComponent />
      <ThanksForScrolling />
    </>
  );
};

export default Home;
