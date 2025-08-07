import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className=" flex justify-center items-center flex-col z-10 px-4">
          <h1 className="text-2xl md:text-6xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right mx-auto">
            Hi, I'm Hassan Akhtar
          </h1>
          <h1 className="text-lg flex  xl:text-2xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent leading-right">
            (Data Scientist/Analyst{" "}
            <span className="hidden md:block pl-1">
              {" "}
              - MERN Stack Developer
            </span>
            )
          </h1>
          <div className="tex-gray-400 text-lg mb-8 w-[95%] sm:w-[80%] md:w-[70%] 2xl:w-[40%] mx-auto">
            <p>
              MERN Stack Developer | Aspiring Data Scientist & Analyst I'm a
              frontend developer at Evonicsoft skilled in React.js, JavaScript,
              Tailwind CSS, Bootstrap, HTML & CSS — building responsive,
              user-friendly interfaces. I completed a MERN Stack Bootcamp (Oct –
              Dec 2024).
            </p>
            <p className="pt-4">
              Currently exploring Data Science, focusing on Python, Pandas,
              NumPy, and ML basics, aiming to merge design with data-driven
              solutions.
            </p>
            <p className="pt-5 text-center">
              Always learning. Always building. Let’s connect!
            </p>
          </div>
          <div className="flex flex-col w-full md:flex-row justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 w-full md:w-auto flex justify-center text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="/@hassanakhtyr/resume.pdf"
              download="Resume.pdf"
              className="border w-full md:w-auto flex justify-center mt-5 md:mt-0 border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
