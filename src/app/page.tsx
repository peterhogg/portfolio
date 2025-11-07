import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home - My Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function Home() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section className="text-center my-8">
        <Image
          src="/peter.jpg"
          alt="Hero Icon"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
      </section>
      <section id="about" className="my-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
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
    </div>
  );
}
