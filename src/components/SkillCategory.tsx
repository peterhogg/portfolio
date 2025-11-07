
interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
