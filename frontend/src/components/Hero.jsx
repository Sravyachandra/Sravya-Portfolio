import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Brain, Database, TestTube } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    console.log('Download resume clicked');
  };

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Flask, JavaScript, REST APIs',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Scikit-learn, Hugging Face, AI',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'SQL, Pandas, Analytics',
    },
    {
      icon: TestTube,
      title: 'Quality Assurance',
      description: 'Selenium, JMeter, Testing',
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-black pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <p className="text-red-600 font-bold text-2xl hello-world-center-animation mb-2" style={{ textAlign: 'left' }}>Hello World</p>
              <p className="text-gray-300 font-normal text-base" style={{ textAlign: 'left' }}>I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Chandra Sravya
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                Computer Science Engineer
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-base text-gray-300 leading-relaxed">
                A Computer Science Engineering student at{' '}
                <span className="font-semibold text-red-600">Vellore Institute of Technology</span>,
                pursuing a dual degree with a strong focus on software development and machine learning. My journey in technology is driven by curiosity and a passion for creating innovative solutions that make a real-world impact.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                With hands-on experience from my internship at{' '}
                <span className="font-semibold text-red-600">Infoshare Soft Solutions</span>, I've developed
                practical skills in building Flask-based web applications, implementing REST APIs, and
                creating AI-driven solutions. I believe in continuous learning and pushing the boundaries of what technology can achieve.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2 pt-2">
              <h3 className="text-lg font-bold text-white">Education</h3>
              <div className="space-y-1">
                <div>
                  <p className="font-semibold text-white text-sm" style={{ textAlign: 'left' }}>Computer Science & Engineering (Dual Degree)</p>
                  <p className="text-gray-300 text-sm" style={{ textAlign: 'left' }}>Vellore Institute of Technology, Vellore</p>
                  <p className="text-gray-400 text-xs" style={{ textAlign: 'left' }}>2022 - 2027 • CGPA: 8.99</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-red-600 hover:bg-red-700 text-white rounded-md px-6 py-5 text-base font-medium transition-transform hover:scale-105"
              >
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent rounded-md px-6 py-5 text-base font-medium transition-all hover:scale-105"
              >
                <Download className="mr-2" size={18} />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Sravyachandra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-900 hover:bg-red-600 rounded-md transition-all hover:scale-110 transform duration-200"
              >
                <Github size={20} className="text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/sravya-chandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-900 hover:bg-red-600 rounded-md transition-all hover:scale-110 transform duration-200"
              >
                <Linkedin size={20} className="text-gray-300" />
              </a>
              <a
                href="mailto:chandrasravya17@gmail.com"
                className="p-2.5 bg-zinc-900 hover:bg-red-600 rounded-md transition-all hover:scale-110 transform duration-200"
              >
                <Mail size={20} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Clean 3D Stack Effect - 5 columns */}
          <div className="lg:col-span-5 flex justify-center items-center perspective-1000">
            <div className="relative group">
              {/* Clean 3D stacked cards - Netflix Red Theme */}
              <div className="absolute inset-0 bg-red-800 rounded-lg transform translate-x-8 translate-y-8 border-2 border-red-700 shadow-xl"></div>
              <div className="absolute inset-0 bg-red-700 rounded-lg transform translate-x-4 translate-y-4 border-2 border-red-600 shadow-xl"></div>

              {/* Main card with image */}
              <div className="relative tilt-card bg-black rounded-lg p-3 border-2 border-red-600 shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_talent-display-305/artifacts/bec7sj32_image.png"
                  alt="Chandra Sravya"
                  className="w-auto max-h-[450px] h-full object-contain rounded-md relative z-10"
                />
                {/* Netflix red glow effect */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-16 bg-red-600/40 blur-3xl rounded-full group-hover:bg-red-600/60 transition-all duration-500 z-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Cards at Bottom - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-4 bg-zinc-900 hover:bg-zinc-800 border-zinc-800 netflix-card transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600/20 rounded-lg flex-shrink-0">
                    <Icon size={20} className="text-red-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;