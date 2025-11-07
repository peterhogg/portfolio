interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  liveLinkText?: string;
}

const FeaturedProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  liveLink,
  liveLinkText,
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <div className="flex justify-end items-center gap-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            {liveLinkText ?? "Live Demo"}
          </a>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
