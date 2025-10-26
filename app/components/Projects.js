import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Projects({ goToProjectsPage }) {
  const projects = [
    {
      year: '2024',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      year: '2023',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      year: '2023',
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI-powered responses and natural language processing.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
      tags: ['React', 'Firebase', 'OpenAI']
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 bg-gray-50 dark:bg-gray-800/50 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12 flex-col sm:flex-row gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold">Work 21 -24"</h2>
          </div>
          <button 
            onClick={goToProjectsPage}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center space-x-2"
          >
            <span>See All</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-bold mb-3 tracking-wider">
                    {project.year}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline font-semibold group">
                    <span>View Project</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden m-4 md:m-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}