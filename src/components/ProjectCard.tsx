interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  liveLinkText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  liveLink,
  liveLinkText,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {liveLinkText ?? "Live Demo"}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
