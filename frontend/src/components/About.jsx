import React from 'react';
import { Code, Database, Brain, TestTube } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building web applications with Flask, JavaScript, and modern frameworks',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Developing AI-powered solutions using scikit-learn and Hugging Face',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Working with SQL, data preprocessing, and analytics pipelines',
    },
    {
      icon: TestTube,
      title: 'Quality Assurance',
      description: 'Automated testing with Selenium and performance testing with JMeter',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Computer Science Engineering student at{' '}
              <span className="font-semibold text-blue-600">Vellore Institute of Technology</span>,
              pursuing a dual degree with a strong focus on software development and machine learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience from my internship at{' '}
              <span className="font-semibold">Infoshare Soft Solutions</span>, I've developed
              practical skills in building Flask-based web applications, implementing REST APIs, and
              creating AI-driven solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My passion lies in leveraging technology to solve real-world problems, whether it's
              building intelligent career guidance systems, flood forecasting models, or ensuring
              software quality through comprehensive testing.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Computer Science & Engineering (Dual Degree)</p>
                  <p className="text-gray-600">Vellore Institute of Technology, Vellore</p>
                  <p className="text-gray-500">2022 - 2027 • CGPA: 8.99</p>
                </div>
                <div className="pt-2">
                  <p className="font-semibold text-gray-900">Higher Secondary Education</p>
                  <p className="text-gray-600">Narayana Junior College, Nellore</p>
                  <p className="text-gray-500">2020 - 2022 • 98.1%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;