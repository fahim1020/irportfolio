import { Button, Empty } from "keep-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Empty>
      <Empty.Image>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title className="text-white">Sorry, No result found!</Empty.Title>
      <Empty.Description className="text-white">
        We could not find what you were looking for. Please check the URL or go
        back to the homepage for more options.
      </Empty.Description>
      <Button variant="outline">
        <Link to={"/"}>Go to home</Link>
      </Button>
    </Empty>
  );
};

export default NotFound;
