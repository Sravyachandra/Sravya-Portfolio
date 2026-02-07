import React from 'react';
import { Card } from './ui/card';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Web Development',
      color: 'red',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'C', 'SQL', 'Flask', 'REST APIs'],
    },
    {
      icon: Brain,
      title: 'Data Science & Machine Learning',
      color: 'red',
      skills: [
        'NumPy',
        'Pandas',
        'Scikit-learn',
        'PCA',
        'Supervised Learning',
        'Model Evaluation',
        'Hugging Face',
        'Streamlit',
      ],
    },
    {
      icon: Database,
      title: 'Databases & Cloud',
      color: 'red',
      skills: ['MySQL', 'MongoDB', 'AWS Fundamentals', 'Database Design'],
    },
    {
      icon: Wrench,
      title: 'Tools & Testing',
      color: 'red',
      skills: ['GitHub', 'Git', 'Selenium', 'Apache JMeter', 'Functional Testing', 'Performance Testing'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-red-600 rounded"></div>
          <p className="text-lg text-gray-300 mt-4">
            A comprehensive toolkit for building intelligent, scalable solutions. These skills represent continuous learning and hands-on experience in developing modern software applications and data-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Card
                key={index}
                className="p-8 bg-zinc-900 border-zinc-800 netflix-card hover:border-red-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-600/20 rounded-lg">
                    <Icon size={28} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-md text-sm font-medium transition-all hover:bg-red-600 hover:text-white hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;