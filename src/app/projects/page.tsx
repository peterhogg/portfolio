import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

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
  {
    title: ".NET Microservices",
    description: "A collection of microservices built with .NET, following a microservice architecture.",
    githubLink: "https://github.com/peterhogg/dotnet-microservices",
  },
  {
    title: "Emailr",
    description: "A simple service to send emails, built with Node.js and Express.",
    githubLink: "https://github.com/peterhogg/emailr",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <AnimatedSection>
        <section id="projects" className="my-8">
          <h2 className="text-4xl font-bold mb-2 text-center">Projects</h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            A showcase of my personal work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
