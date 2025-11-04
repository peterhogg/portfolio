
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Flappy Knight</h3>
            <p className="text-gray-700 mb-4">
              A game made in Godot, inspired by Flappy Bird.
            </p>
            <div className="flex justify-between">
              <a href="https://github.com/peterhogg/flappy-knight" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub
              </a>
              <a href="https://flappy-knight.hoggarth.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Play Game
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
