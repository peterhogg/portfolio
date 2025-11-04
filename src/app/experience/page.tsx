import type { Metadata } from "next";
import ExperienceCard from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "Work Experience - My Portfolio",
  description: "A summary of my professional experience.",
};

const experiences = [
  {
    role: "Lead Software Engineer",
    duration: "April 2023 - Present",
    description: [
      "Developed full stack applications with Angular 16, NestJS, and MongoDB",
      "Technical lead for multiple initiatives, and lead a team towards solutions",
      "Modified kubernetes settings and deployments with helm charts.",
      "Mentored junior employees, bringing them up to speed on the project and conducted code reviews.",
      "Used Grafana logs to debug production environments",
    ],
  },
  {
    role: "Senior Full Stack Developer",
    duration: "September 2021 - April 2023",
    description: [
      "Produced multiple features and improvements to a MEAN stack application.",
      "Created NodeJS microservices to consume Kafka messages",
      "Worked along-side architect to plan out high performant, and scalable solutions",
      "Administered code reviews, working together with colleagues to ensure high quality code and best practices were followed.",
    ],
  },
  {
    role: "Full Stack Developer",
    duration: "August 2019 - September 2021",
    description: [
      "Developed functionality for a MEAN stack application",
      "Utilized Angular for creation of components, and services using built-in tools such as the router, Reactive Forms, and the HttpClient",
      "Created NestJS APIs using MongoDB for data persistence",
      "Used GraphQL to query and react to data changes by leveraging the RxJS library",
      "Contributions spanning the entire software development lifecycle",
    ],
  },
  {
    role: "Developer",
    duration: "April 2016 – August 2019",
    description: [
      "Created javascript web applications using Angular 6 and Firebase",
      "Created a data warehouse integrated it with Google Cloud Functions to pull in data from multiple sources",
      "Set up hosting, and deployment strategies for multiple sites and applications",
    ],
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section id="experience" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
