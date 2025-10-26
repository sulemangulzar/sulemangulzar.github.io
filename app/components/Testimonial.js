export default function Testimonial() {
  return (
    <section className="relative py-20 px-4 bg-gray-50 dark:bg-gray-800/50 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-8 tracking-wider">TESTIMONIAL</div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Keeps Us<br />Organized</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-6xl text-purple-600 dark:text-purple-400 mb-6 leading-none">"</div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            You exceeded our expectations—professional, innovative, and a pleasure to collaborate with. Their attention to detail and creative approach truly set them apart.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              SG
            </div>
            <div>
              <div className="font-semibold text-lg">M. Saad Gulzar</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Designer, Unique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}