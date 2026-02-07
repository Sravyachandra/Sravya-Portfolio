import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'Infoshare Soft Solutions',
      location: 'Hyderabad',
      period: 'June 2025 - July 2025',
      description:
        'Gained hands-on experience in full-stack web development and software engineering practices. Worked collaboratively with a team of developers to deliver high-quality software solutions while following industry best practices and agile methodologies.',
      responsibilities: [
        'Developed a Flask-based backend web application as part of internship training, demonstrating proficiency in Python web frameworks and server-side development',
        'Built an Online Symptom Tracker application handling form inputs, backend logic, and UI integration, showcasing full-stack development capabilities',
        'Implemented REST-style request handling and basic validation workflows, ensuring data integrity and secure communication between client and server',
        'Gained practical exposure to the software development lifecycle, debugging, and iterative improvement processes through hands-on project work and code reviews',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-red-600 rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-zinc-900 border-zinc-800 netflix-card hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-xl text-red-600 font-semibold mb-3">{exp.company}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                </div>
                <div className="flex flex-col gap-2 md:text-right">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Briefcase size={18} className="text-red-600" />
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2 ml-7">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-red-600 before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;