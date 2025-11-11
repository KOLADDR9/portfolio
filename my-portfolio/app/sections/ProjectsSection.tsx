export default function ProjectsSection() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Next.js, TypeScript, and Tailwind CSS.',
      link: 'https://example.com',
    },
    {
      title: 'Todo App',
      description: 'A simple task management app built with React and Firebase.',
      link: 'https://example.com',
    },
    {
      title: 'E-commerce Store',
      description: 'A demo online store with Next.js and Stripe integration.',
      link: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Visit Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
