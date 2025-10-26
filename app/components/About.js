export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-gray-400 text-sm">About Me</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          Driven - And<br />Adaptable
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
          Passionate about creating seamless user experiences. <span className="text-gray-500 dark:text-gray-500">Over 3 years in the digital design world. Expert in UI design.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl">
            <div className="text-6xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">+20</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Total Projects<br />Complete</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl">
            <div className="text-6xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Years of<br />Experience</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">My professional journey</div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">01</div>
                <div className="text-xl font-bold mb-1">Lead UI Designer</div>
              </div>
              <div className="text-gray-500 dark:text-gray-400 font-medium">Tabana.id</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">02</div>
                <div className="text-xl font-bold mb-1">UI/UX Designer</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">1967-2020</div>
              </div>
              <div className="text-gray-500 dark:text-gray-400 font-medium">InfoTechno</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">03</div>
                <div className="text-xl font-bold mb-1">Jr UI/UX Designer</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">1967-2017</div>
              </div>
              <div className="text-gray-500 dark:text-gray-400 font-medium">Karli.id</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}