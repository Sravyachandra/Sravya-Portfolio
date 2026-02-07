import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-600">Chandra Sravya</h3>
            <p className="text-gray-400">
              Computer Science Engineer passionate about building intelligent solutions with modern technologies and innovative approaches to problem-solving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Experience
                </button>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">More</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('certifications')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Sravyachandra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 hover:bg-red-600 rounded-md transition-all hover:scale-110 transform"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sravya-chandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 hover:bg-red-600 rounded-md transition-all hover:scale-110 transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:chandrasravya17@gmail.com"
                className="p-3 bg-zinc-900 hover:bg-red-600 rounded-md transition-all hover:scale-110 transform"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">chandrasravya17@gmail.com</p>
              <p className="text-gray-400 text-sm">+91-8125080969</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Chandra Sravya. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-red-600" /> using React & FastAPI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;