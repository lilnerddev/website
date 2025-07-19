
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "C#",
    "C/C++",
    "Python",
    "JavaScript",
  ];

  const backendSkills = [".NET", "MAUI", "Qt", "Flutter", "React"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text max-w-sm mx-auto text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A computer engineer with a passion for building smart, efficient, and occasionally quirky tech solutions. I thrive at the intersection of logic and creativity, where clean code meets clever problem-solving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer & Systems Engineering </strong> - Rennselaer Polytechnic Institute
                  (2015-2019)
                </li>
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Operating Systems, Embedded Systems, Object-Oriented Programming, Database Systems, Machine Learning
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Computer Engineer (2019 - Present){" "}
                  </h4>
                  <p>
                    Developed innovative solutions for complex applications, collaborating with interdisciplinary teams to guide projects from concept to commercialization.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Computer Engineer Intern (2018){" "}
                  </h4>
                  <p>
                    Improved the user experience of an internal software application by streamlining workflows and adding quality-of-life features used across teams and client projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};