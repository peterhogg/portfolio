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
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
          >
            {liveLinkText ?? "Live Demo"}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
