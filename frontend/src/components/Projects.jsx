import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Intelligent Career Guidance System',
      subtitle: 'AI-powered career recommendation web application',
      description:
        'Designed and developed a Python-based application to recommend career paths based on user skills and interests. Implemented rule-based skill matching logic to identify gaps between user profiles and target career requirements. Integrated LLM-based guidance using Hugging Face pre-trained models to generate contextual career insights. Built an interactive UI using Streamlit to improve usability and real-time feedback.',
      technologies: ['Python', 'Streamlit', 'Hugging Face Transformers', 'Prompt Engineering', 'Rule-Based Logic'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/Sravyachandra',
      liveUrl: '#',
    },
    {
      title: 'Flood Forecasting System Using Machine Learning',
      subtitle: 'Predictive analytics project for flood risk assessment',
      description:
        'Developed a machine learning pipeline to predict flood risk using environmental and historical data. Performed data preprocessing, feature scaling, and dimensionality reduction using PCA. Trained and evaluated multiple ML models including Random Forest, XGBoost, Gradient Boosting, and SVR. Compared model performance using accuracy and error metrics to identify the best-performing approach.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      category: 'Machine Learning',
      githubUrl: 'https://github.com/Sravyachandra',
      liveUrl: '#',
    },
    {
      title: 'Functional and Performance Testing of a Mobile Application',
      subtitle: 'Quality assurance and performance validation project',
      description:
        'Executed manual test cases for a travel booking mobile application to validate functional requirements. Automated regression and functional test scenarios using Selenium. Conducted load and stress testing using Apache JMeter to evaluate application performance under traffic. Identified performance bottlenecks and documented findings with actionable insights.',
      technologies: ['Selenium', 'Apache JMeter'],
      category: 'Testing & QA',
      githubUrl: 'https://github.com/Sravyachandra',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-red-600 rounded"></div>
          <p className="text-lg text-gray-300 mt-4">
            Showcasing my work in AI, machine learning, web development, and software testing. Each project demonstrates practical application of theoretical knowledge and problem-solving skills in real-world scenarios.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-zinc-900 border-zinc-800 netflix-card hover:border-red-600/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-red-600/20 text-red-600 hover:bg-red-600/30 border-red-600/50">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-xl text-gray-400 italic mb-4">{project.subtitle}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-shrink-0 flex items-center gap-2 border-zinc-700 text-gray-300 hover:border-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    onClick={() => window.open('https://github.com/Sravyachandra', '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-md text-sm font-medium hover:bg-zinc-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>


              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;