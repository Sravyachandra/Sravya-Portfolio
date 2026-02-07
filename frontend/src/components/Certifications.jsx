import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certificate of Internship',
      issuer: 'Infoshare Soft Solutions',
      date: 'July 2025',
      description: 'Completed software development internship program with hands-on experience in full-stack development, demonstrating proficiency in building production-ready applications.',
      type: 'Internship',
    },
    {
      title: 'Python for Data Analysis and Visualization',
      issuer: 'Vellore Institute of Technology',
      date: '2024',
      description: 'VAC2006 - Comprehensive course on data analysis and visualization with Python, covering advanced techniques for extracting insights from complex datasets.',
      type: 'Course',
    },
    {
      title: 'IBM Python Certification',
      issuer: 'IBM',
      date: '2024',
      description: 'PY0101EN - Fundamental Python programming certification covering core concepts, data structures, and best practices for writing efficient Python code.',
      type: 'Certification',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-red-600 rounded"></div>
          <p className="text-lg text-gray-300 mt-4">
            Professional certifications and academic achievements that demonstrate commitment to continuous learning and professional development in the field of computer science and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 bg-zinc-900 border-zinc-800 netflix-card hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <Award size={24} className="text-red-600" />
                </div>
                <Badge className="bg-zinc-800 text-gray-300 hover:bg-zinc-700 border-zinc-700">
                  {cert.type}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-red-600 font-semibold mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>

              <div className="flex items-center gap-2 mt-4 text-red-600">
                <CheckCircle size={16} />
                <span className="text-sm font-medium">Completed</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;