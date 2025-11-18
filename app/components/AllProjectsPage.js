import { Moon, Sun, ExternalLink } from 'lucide-react';
import BackgroundLines from '../components/BackgroundLines';
import Footer from '../components/Footer';

export default function AllProjectsPage({ darkMode, toggleDarkMode, goToHome }) {
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
            title: 'CineScope',
            description: 'CineScope - Your ultimate destination for discovering, rating, and tracking movies. Browse thousands of films, watch trailers, read reviews, and find showtimes all in one place.',
            image: '/images/cinescope.png',
            tags: ['Next.js', 'JavaScript', 'TailwindCSS'],
            link: "https://github.com/sulemangulzar/react-movies-website"
        },
        {
            year: '2023',
            title: 'AI Chat Application',
            description: 'Real-time chat app with AI-powered responses and natural language processing.',
            image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
            tags: ['React', 'Firebase', 'OpenAI']
        },
        {
            year: '2025',
            title: 'Trending Product Scraper',
            description: 'SaaS app that scrapes trending products from major e-commerce platforms.',
            image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=300&fit=crop',
            tags: ['Next.js', 'Python', 'BeautifulSoup']
        },
        {
            year: '2024',
            title: 'Portfolio Generator',
            description: 'AI-powered tool that generates custom portfolio websites instantly.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
            tags: ['Next.js', 'TailwindCSS', 'OpenAI']
        },
        {
            year: '2024',
            title: 'Fitness Tracker App',
            description: 'Mobile-friendly fitness app that tracks workouts and calorie intake.',
            image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=400&h=300&fit=crop',
            tags: ['React', 'Firebase', 'Chart.js']
        },
        {
            year: '2024',
            title: 'Crypto Price Tracker',
            description: 'Live crypto dashboard with real-time data and portfolio management.',
            image: 'https://images.unsplash.com/photo-1621508667304-9b5b6d8a78ef?w=400&h=300&fit=crop',
            tags: ['Next.js', 'CoinGecko API', 'TailwindCSS']
        },
        {
            year: '2024',
            title: 'AI Resume Builder',
            description: 'Generates professional resumes using AI-based job description analysis.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
            tags: ['React', 'OpenAI', 'Firebase']
        },
        {
            year: '2024',
            title: 'Task Management Tool',
            description: 'Trello-style productivity app for team collaboration and project tracking.',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
            tags: ['React', 'Redux', 'Firebase']
        },
        {
            year: '2024',
            title: 'Weather Forecast App',
            description: 'Weather app showing real-time data and 7-day forecasts using APIs.',
            image: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=400&h=300&fit=crop',
            tags: ['Next.js', 'Weather API', 'CSS']
        },
        {
            year: '2023',
            title: 'Blog CMS',
            description: 'Custom-built blog content management system for dynamic posting.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
            tags: ['Django', 'TailwindCSS', 'SQLite']
        },
        {
            year: '2023',
            title: 'Online Learning Platform',
            description: 'E-learning system with video streaming, quizzes, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1601933470928-c1d1e6f17b71?w=400&h=300&fit=crop',
            tags: ['React', 'Firebase', 'Stripe']
        },
        {
            year: '2024',
            title: 'Recipe Finder App',
            description: 'AI-assisted recipe recommendation app based on ingredients you have.',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
            tags: ['Next.js', 'OpenAI', 'Spoonacular API']
        },
        {
            year: '2024',
            title: 'Expense Tracker',
            description: 'Minimalist expense tracking app with visual data analytics.',
            image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop',
            tags: ['React', 'Chart.js', 'Firebase']
        },
        {
            year: '2024',
            title: 'Portfolio Website',
            description: 'Modern responsive portfolio with animations and smooth interactions.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
            tags: ['Next.js', 'Framer Motion', 'TailwindCSS']
        },
        {
            year: '2025',
            title: 'AI Code Assistant',
            description: 'VS Code extension that suggests code snippets using AI models.',
            image: 'https://images.unsplash.com/photo-1581091215367-59ab6b6c2582?w=400&h=300&fit=crop',
            tags: ['Python', 'OpenAI', 'Node.js']
        },
        {
            year: '2025',
            title: 'Stock Market Predictor',
            description: 'Machine learning app predicting stock trends with data visualization.',
            image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=300&fit=crop',
            tags: ['Python', 'Pandas', 'Scikit-learn']
        },
        {
            year: '2024',
            title: 'AI Image Captioner',
            description: 'Generates accurate image descriptions using computer vision models.',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
            tags: ['TensorFlow', 'Flask', 'React']
        },
        {
            year: '2025',
            title: 'News Aggregator',
            description: 'Aggregates breaking news from multiple sources using web scraping.',
            image: 'https://images.unsplash.com/photo-1504714146340-959ca07b92ba?w=400&h=300&fit=crop',
            tags: ['Python', 'BeautifulSoup', 'Next.js']
        },
        {
            year: '2024',
            title: 'Landing Page Builder',
            description: 'Drag-and-drop landing page builder for marketers and creators.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
            tags: ['Next.js', 'TailwindCSS', 'Framer Motion']
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <BackgroundLines />

            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            SG.
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={goToHome}
                                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium"
                            >
                                Back to Home
                            </button>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="relative py-20 px-4 pt-32 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            All Projects
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Explore my complete portfolio of {projects.length} projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-bold">
                                        {project.year}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline font-semibold group">
                                        <span>View Project</span>
                                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}