import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Twitter, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.05)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Have a project in mind?<br />
            Let's make it happen!
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90">
            Get in touch and let's discuss your ideas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">
              Send Me a Message
            </h3>

            <div className="space-y-4">
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

              <button
                onClick={handleContactSubmit}
                disabled={formStatus.type === 'loading'}
                className="w-full px-8 py-3 sm:py-4 bg-white text-purple-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>

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

          <div className="space-y-8">
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
  );
}