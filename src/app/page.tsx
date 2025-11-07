import type { Metadata } from "next";
import Image from "next/image";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Home - My Portfolio",
  description: "Welcome to my portfolio website.",
};

const featuredProject = {
  title: "Flappy Knight",
  description: "A game made in Godot, inspired by Flappy Bird.",
  githubLink: "https://github.com/peterhogg/flappy-knight",
  liveLink: "https://flappy-knight.hoggarth.xyz/",
  liveLinkText: "Play Now",
};

export default function Home() {
  return (
    <div className="container mx-auto mt-12 px-4">
      <AnimatedSection>
        <section className="text-center my-12">
          <Image
            src="/peter.jpg"
            alt="Hero Icon"
            width={150}
            height={150}
            className="mx-auto rounded-full mb-4"
          />
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section id="about" className="my-12">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            With 9 years of experience as a Lead Software Engineer, I specialize
            in the MEAN stack, building robust and scalable applications. I have
            a passion for mentoring and a proven ability to lead teams in
            fast-paced, Agile environments. My expertise in Docker, Helm, and
            Git allows me to streamline deployments and enhance team
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
