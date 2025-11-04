
interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
