import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - My Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function Home() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section id="about" className="my-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hello! I'm a passionate developer who loves creating amazing web
          applications. I have experience with various technologies and I'm
          always eager to learn new things.
        </p>
      </section>
    </div>
  );
}

