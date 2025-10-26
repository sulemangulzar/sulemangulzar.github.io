export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium animate-pulse">
          👋 Welcome to my portfolio
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Code. Create. 
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">Inspire.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
          Specialized in Web Design, UX AI, WebFlow, and Front End Development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold">4.8</span>
            <span className="text-gray-600 dark:text-gray-400">from 50+ reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 dark:text-green-400">● Trusted</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-gray-600 dark:text-gray-400 mb-2">Creative Experience</div>
          <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">50+</div>
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold"
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
}