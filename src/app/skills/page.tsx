
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - My Portfolio",
  description: "A list of my technical skills.",
};

const Skills = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section id="skills" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Web Technologies</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Angular</li>
              <li>RxJS</li>
              <li>Bootstrap</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Programming Languages</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <ul className="list-disc list-inside">
              <li>Docker</li>
              <li>Visual Studio Code</li>
              <li>WSL2</li>
              <li>Kafka</li>
              <li>Pulsar</li>
              <li>JIRA</li>
              <li>Confluence</li>
              <li>Jenkins</li>
              <li>GitHub</li>
              <li>Grafana</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Frameworks and Libraries</h3>
            <ul className="list-disc list-inside">
              <li>Express</li>
              <li>NestJS</li>
              <li>.NET6.0</li>
              <li>RxJS</li>
              <li>Jasmine</li>
              <li>Karma</li>
              <li>Jest</li>
              <li>Okta</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Databases</h3>
            <ul className="list-disc list-inside">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostGreSQL</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
