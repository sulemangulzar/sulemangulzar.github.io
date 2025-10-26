import { Code, Palette, Zap } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'HTML & CSS', icon: Code, level: 95 },
    { name: 'JavaScript (ES6+)', icon: Code, level: 90 },
    { name: 'React & Next.js', icon: Code, level: 92 },
    { name: 'Tailwind CSS', icon: Palette, level: 93 },
    { name: 'UI/UX Design', icon: Palette, level: 88 },
    { name: 'Python', icon: Code, level: 87 },
    { name: 'Django', icon: Code, level: 80 },
    { name: 'Web Scraping', icon: Zap, level: 85 },
    { name: 'Git & GitHub', icon: Zap, level: 90 },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

        <div className="text-center mb-16 relative">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Crafting powerful, aesthetic, and scalable digital experiences through modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="relative group bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-white/30 dark:border-gray-700 transition-all duration-500 hover:scale-[1.03] shadow-md hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-lg"></div>

                <div className="relative flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl shadow-md">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="text-right mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}