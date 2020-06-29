import React from "react";

export const Project = ({
  image,
  title,
  description,
  tags,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="project-tile">
      <div
        className="project-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hover-layer"></div>
        <div className="buttons">
          <div
            className="button"
            onClick={() => window.open(githubLink, "_blank")}
          >
            Code
          </div>
          <div
            className="button"
            onClick={() => window.open(liveLink, "_blank")}
          >
            Live
          </div>
        </div>
      </div>
      <div className="project-title">{title}</div>
      <div className="project-description">{description}</div>
      <div className="tags">
        {tags.map((tag, index) => {
          return (
            <a
              href={`https://pt.wikipedia.org/wiki/${tag}`}
              target="_blank"
              className="project-tag"
            >
              {tag}
            </a>
          );
        })}
      </div>
    </div>
  );
};
