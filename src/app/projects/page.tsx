
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - My Portfolio",
  description: "A showcase of my projects.",
};

const Projects = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section id="projects" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-700 mb-4">
              A brief description of the first project.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-700 mb-4">
              A brief description of the second project.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-700 mb-4">
              A brief description of the third project.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
