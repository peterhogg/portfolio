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
            className="mx-auto mb-4"
          />
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section id="about" className="my-12">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Dedicated lead software engineer with{" "}
            {new Date().getFullYear() - new Date("2016-08-01").getFullYear()}{" "}
            years of comprehensive technical expertise, specializing in the MEAN
            stack. Passionate about continual learning and improvement. Adept at
            mentoring and guiding junior team members to proficiency. I foster a
            collaborative environment focused on growth and innovation. Proficient
            in utilizing Git workflows for seamless collaboration and version
            control. I work on infrastructure to create and modify containers
            using Docker, as well as orchestrating deployments with Helm.
            Experienced in Agile methodologies, I thrive in dynamic environments,
            adapting quickly to evolving project requirements. Whether
            collaborating remotely or on-site, I am adept at fostering effective
            teamwork and communication to drive project success.
          </p>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section id="featured-project" className="my-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Featured Project</h2>
          <div className="max-w-2xl mx-auto">
            <FeaturedProjectCard {...featuredProject} />
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
