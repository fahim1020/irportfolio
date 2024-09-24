import { Button, Card } from "keep-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ProjectBox = ({ imageSrc, title, description, url }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`./${title}`, {
      state: {
        title: title,
        description: description,
        imageSrc: imageSrc,
        url: url,
      },
    });
  };
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <Card className="w-[350px] ">
      <Card.Header className="max-h-[250px] min-h-[250px]  overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </Card.Header>
      <Card.Content className="space-y-3">
        <Card.Title>{truncateText(title, 20)}</Card.Title>
        <Card.Description>{truncateText(description, 25)}</Card.Description>
        <Button size="sm" color="primary" onClick={handleNavigation}>
          Learn More
        </Button>
      </Card.Content>
    </Card>
  );
};
// Define prop types for validation
ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
