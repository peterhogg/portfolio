import type { Metadata } from "next";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Home - My Portfolio",
  description: "Welcome to my portfolio website.",
};

const featuredProject = {
  title: "Map Illustrator",
  description:
    "An AI-powered tool that transforms geographic maps into stylized illustrations using Google's Gemini model via Vercel AI SDK. Built with Next.js, React, and Leaflet for interactive mapping with geocoding support.",
  liveLink: "https://map-illustrator.hoggarth.xyz",
  liveLinkText: "View Project",
  githubLink: "https://github.com/peterhogg/Map-Illustrator",
};

export default function Home() {
  return (
    <div className="container mx-auto mt-12 px-4">
      <AnimatedSection>
        <section id="about" className="my-12">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            With 9 years of experience as a Software Developer, I specialize in
            the MEAN stack, building robust and scalable applications. I have a
            passion for mentoring and a proven ability to lead teams in
            fast-paced, Agile environments. My expertise in Docker, Kubernetes,
            and Git allows me to streamline deployments and enhance team
            collaboration. I am a results-oriented leader, dedicated to driving
            project success through clear communication and a commitment to
            quality.
          </p>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section id="featured-project" className="my-12">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Featured Project
          </h2>
          <div className="max-w-2xl mx-auto">
            <FeaturedProjectCard {...featuredProject} />
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
