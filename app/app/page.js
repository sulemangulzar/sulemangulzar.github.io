"use client";
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Moon, Sun, Menu, X, Mail, Github, Linkedin, Twitter, ExternalLink, Code, Palette, Smartphone, Zap, ArrowRight, Send, User, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

    const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    const serviceID =  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
        to_name: 'Suleman',
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus({ 
            type: 'success', 
            message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setContactForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
        })
        .catch((error) => {
        console.error('FAILED...', error);
        setFormStatus({ 
            type: 'error', 
            message: `Failed to send: ${error.text || error.message}` 
        });
        setTimeout(() => setFormStatus({ type: '', message: '' }), 8000);
        });
    };
    useEffect(() => {
    emailjs.init('sdiOrBTdQwmwffVUc'); // Initialize with your public key
    }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };


  const projects = [
    {
      year: '2024',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      year: '2023',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      year: '2023',
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI-powered responses and natural language processing',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
      tags: ['React', 'Firebase', 'OpenAI']
    }
  ];

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
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Background Lines */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                style={{
                  top: `${i * 5}%`,
                  left: 0,
                  right: 0,
                  transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`
                }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                style={{
                  left: `${i * 5}%`,
                  top: 0,
                  bottom: 0,
                  transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SG.
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="px-4 py-4 space-y-4">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
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

        {/* About Section */}
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

        {/* Projects Section */}
        <section id="projects" className="relative py-20 px-4 bg-gray-50 dark:bg-gray-800/50 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12 flex-col sm:flex-row gap-4">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold">Work 21 -24"</h2>
              </div>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center space-x-2">
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

        {/* Skills Section */}
        <section
  id="skills"
  className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden z-10"
>
  <div className="max-w-7xl mx-auto relative">
    {/* Subtle background grid pattern */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

    {/* Heading */}
    <div className="text-center mb-16 relative">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Skills & Expertise
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Crafting powerful, aesthetic, and scalable digital experiences through
        modern technologies.
      </p>
    </div>

    {/* Skill Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            className="relative group bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-white/30 dark:border-gray-700 transition-all duration-500 hover:scale-[1.03] shadow-md hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
          >
            {/* Card Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-lg"></div>

            {/* Icon and Title */}
            <div className="relative flex items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl shadow-md">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </div>

            {/* Animated Skill Bar */}
            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* Level Text */}
            <div className="text-right mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
              {skill.level}%
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


        {/* Testimonial Section */}
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

        {/* Contact Section */}
        <section
  id="contact"
  className="relative py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white z-10 overflow-hidden"
>
  {/* Subtle background lines */}
  <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.05)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[size:40px_40px]" />

  <div className="max-w-6xl mx-auto relative">
    {/* Heading */}
    <div className="text-center mb-14 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
        Have a project in mind?<br />
        Let’s make it happen!
      </h2>
      <p className="text-base sm:text-lg md:text-xl opacity-90">
        Get in touch and let’s discuss your ideas
      </p>
    </div>

    {/* Two Columns (stack on mobile) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Left Side - Contact Form */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
        <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">
          Send Me a Message
        </h3>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2 opacity-90">Your Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-50" size={20} />
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 opacity-90">Your Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-50" size={20} />
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-2 opacity-90">Subject</label>
            <input
              type="text"
              name="subject"
              value={contactForm.subject}
              onChange={handleInputChange}
              placeholder="Project Discussion"
              required
              className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 opacity-90">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 opacity-50" size={20} />
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                rows="4"
                required
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleContactSubmit}
            disabled={formStatus.type === 'loading'}
            className="w-full px-8 py-3 sm:py-4 bg-white text-purple-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <span>{formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
            <Send size={20} />
          </button>

          {/* Status Message */}
          {formStatus.message && (
            <div
              className={`p-4 rounded-xl text-center font-medium ${
                formStatus.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/50'
                  : formStatus.type === 'error'
                  ? 'bg-red-500/20 border border-red-500/50'
                  : 'bg-blue-500/20 border border-blue-500/50'
              }`}
            >
              {formStatus.message}
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Info, Newsletter, Socials */}
      <div className="space-y-8">
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Mail size={22} />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:msulemangulzar@gmail.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  msulemangulzar@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Github size={22} />
              </div>
              <div>
                <div className="font-semibold mb-1">GitHub</div>
                <a href="https://github.com/sulemangulzar" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity">
                  @sulemangulzar
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Linkedin size={22} />
              </div>
              <div>
                <div className="font-semibold mb-1">LinkedIn</div>
                <a href="https://www.linkedin.com/in/suleman-gulzar-026770318/" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity">
                  My Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-center sm:text-left">Subscribe to Newsletter</h3>
          <p className="opacity-90 mb-6 text-center sm:text-left">
            Get updates on my latest projects and articles
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 px-6 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              onClick={handleSubscribe}
              className="px-6 py-3 sm:py-4 bg-white text-purple-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              →
            </button>
          </div>
        </div>

        {/* Socials */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">Follow Me</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="https://github.com/sulemangulzar" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/slmnglzr" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/suleman-gulzar-026770318/" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20">
              <Linkedin size={20} />
            </a>
            <a href="mailto:msulemangulzar@gmail.com" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        {/* Footer */}
        <footer className="relative py-8 px-4 bg-gray-900 text-gray-400 text-center z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">© 2025 Portfolio SG. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}