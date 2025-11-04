import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects - My Portfolio",
  description: "A showcase of my projects.",
};

const projects = [
  {
    title: "Flappy Knight",
    description: "A game made in Godot, inspired by Flappy Bird.",
    githubLink: "https://github.com/peterhogg/flappy-knight",
    liveLink: "https://flappy-knight.hoggarth.xyz/",
    liveLinkText: "Play Now",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section id="projects" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
