interface ExperienceCardProps {
  role: string;
  duration: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  duration,
  description,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2">{role}</h3>
      <p className="text-gray-700 dark:text-gray-500 mb-2">{duration}</p>
      <ul className="list-disc list-inside">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
