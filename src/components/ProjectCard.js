import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
        <div className="proj-imgbx" title={title}>
          <img src={imgUrl} alt={`Project: ${title}`} loading="lazy" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
