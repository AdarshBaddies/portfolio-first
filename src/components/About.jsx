import Reveal from "../components/Reveal";

function About() {
  return (
    <Reveal delay={0.5}>
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" id="about">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600 text-lg">
          I'm a Computer Science graduate from Kerala 👨‍🎓.  
          I love building web apps, exploring new tech, and learning React + Tailwind.  
          Currently building my portfolio and leveling up my frontend skills!
        </p>

        {/* Skills section */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">HTML</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">CSS</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">JavaScript</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">React</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">Git</span>
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default About;
