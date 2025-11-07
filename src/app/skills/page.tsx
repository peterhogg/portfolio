import type { Metadata } from "next";
import SkillCategory from "@/components/SkillCategory";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Skills - My Portfolio",
  description: "A list of my technical skills.",
};

const skillCategories = [
  {
    title: "Web Technologies",
    skills: ["JavaScript", "Angular", "RxJS", "Bootstrap", "HTML", "CSS", "SCSS"],
  },
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Typescript", "C#"],
  },
  {
    title: "Tools",
    skills: [
      "Docker",
      "Visual Studio Code",
      "WSL2",
      "Kafka",
      "Pulsar",
      "JIRA",
      "Confluence",
      "Jenkins",
      "GitHub",
      "Grafana",
    ],
  },
  {
    title: "Frameworks and Libraries",
    skills: ["Express", "NestJS", ".NET6.0", "RxJS", "Jasmine", "Karma", "Jest", "Okta"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostGreSQL"],
  },
  {
    title: "AI",
    skills: ["ChatGPT", "Claude", "Gemini", "Copilot", "Agentic AI"],
  },
];

const Skills = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <AnimatedSection>
        <section id="skills" className="my-8">
          <h2 className="text-4xl font-bold mb-2 text-center">Technical Skills</h2>
          <p className="text-lg text-center text-gray-600 mb-8">A collection of my technical abilities and tools I use.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Skills;
