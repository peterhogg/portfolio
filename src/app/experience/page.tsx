
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience - My Portfolio",
  description: "A summary of my professional experience.",
};

const Experience = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section id="experience" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Lead Software Engineer</h3>
            <p className="text-gray-700 mb-2">Lead Software Engineer (April 2023 - Present)</p>
            <ul className="list-disc list-inside">
              <li>Developed full stack applications with Angular 16, NestJS, and MongoDB</li>
              <li>Technical lead for multiple initiatives, and lead a team towards solutions</li>
              <li>Modified kubernetes settings and deployments with helm charts.</li>
              <li>Mentored junior employees, bringing them up to speed on the project and conducted code reviews.</li>
              <li>Used Grafana logs to debug production environments</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Senior Full Stack Developer</h3>
            <p className="text-gray-700 mb-2">Senior Full Stack Developer (September 2021 - Present)</p>
            <ul className="list-disc list-inside">
              <li>Produced multiple features and improvements to a MEAN stack application.</li>
              <li>Created NodeJS microservices to consume Kafka messages</li>
              <li>Worked along-side architect to plan out high performant, and scalable solutions</li>
              <li>Administered code reviews, working together with colleagues to ensure high quality code and best practices were followed.</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
            <p className="text-gray-700 mb-2">August 2019 - September 2021</p>
            <ul className="list-disc list-inside">
              <li>Developed functionality for a MEAN stack application</li>
              <li>Utilized Angular for creation of components, and services using built-in tools such as the router, Reactive Forms, and the HttpClient</li>
              <li>Created NestJS APIs using MongoDB for data persistence</li>
              <li>Used GraphQL to query and react to data changes by leveraging the RxJS library</li>
              <li>Contributions spanning the entire software development lifecycle</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Developer</h3>
            <p className="text-gray-700 mb-2">Developer (April 2016 – August 2019)</p>
            <ul className="list-disc list-inside">
              <li>Created javascript web applications using Angular 6 and Firebase</li>
              <li>Created a data warehouse integrated it with Google Cloud Functions to pull in data from multiple sources</li>
              <li>Set up hosting, and deployment strategies for multiple sites and applications</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
