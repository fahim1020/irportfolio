import axios from "axios";
import autoPlay from "embla-carousel-autoplay";
import { Carousel } from "keep-react";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
export const HomeCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/all-projects`);
        //  console.log(response.data);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    getAllImages();
  }, []);

  return (
    <Carousel
      options={{ loop: true }}
      plugins={[autoPlay()]}
      className="text-white mt-3"
    >
      <Carousel.Slides>
        {images.map((project, index) => (
          <Carousel.Item
            key={index}
            className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[2.16]"
          >
            <img
              className="rounded-xl max-h-[15rem] min-h-[15rem] sm:max-h-[30rem] sm:min-h-[30rem]"
              src={project.imageSrc}
              alt={project.title}
            />
          </Carousel.Item>
        ))}
      </Carousel.Slides>
      <Carousel.Control className="invert justify-center">
        <Carousel.Buttons>
          <Carousel.PrevButton />
          <Carousel.NextButton />
        </Carousel.Buttons>
        {/* <Carousel.Indicators /> */}
      </Carousel.Control>
    </Carousel>
  );
};
