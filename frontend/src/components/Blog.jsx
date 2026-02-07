import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      title: 'Building Intelligent Systems with Machine Learning',
      excerpt:
        'Exploring how machine learning models can be used to solve real-world problems, from flood forecasting to career guidance systems. Understanding the pipeline from data collection to model deployment and the challenges faced in production environments.',
      content: `
        <h3 class="text-xl font-bold mb-4">Building Intelligent Systems with Machine Learning: From Real-World Problems to Production-Ready Solutions</h3>
        
        <p class="mb-4">Machine learning has evolved from an experimental technology into a foundational component of modern software systems. Today, it powers applications that forecast natural disasters, recommend career paths, detect fraud, optimize supply chains, and personalize digital experiences. What distinguishes truly intelligent systems is not just the use of machine learning models, but the ability to integrate them reliably into real-world environments.</p>

        <p class="mb-4">This article explores how machine learning is applied to practical problems such as flood forecasting and career guidance systems, examines the end-to-end pipeline from data collection to deployment, and discusses the challenges encountered when operating machine learning systems in production.</p>

        <h4 class="text-lg font-semibold mb-2">Understanding Intelligent Systems</h4>
        <p class="mb-4">An intelligent system is designed to learn from data, recognize patterns, and make informed decisions with minimal human intervention. Unlike traditional rule-based software, these systems adapt as new data becomes available, enabling continuous improvement over time.</p>
        <p class="mb-4">However, intelligence does not emerge from algorithms alone. It is the result of a well-orchestrated pipeline that includes data engineering, feature design, model training, system integration, and ongoing monitoring. Neglecting any of these components can undermine the reliability of the entire system.</p>

        <h4 class="text-lg font-semibold mb-2">Machine Learning in Real-World Applications</h4>
        
        <h5 class="text-base font-semibold mb-1">Flood Forecasting and Environmental Monitoring</h5>
        <p class="mb-4">Flood forecasting systems rely on machine learning to analyze large volumes of environmental data and predict potential flooding events. These predictions are critical for early warning systems and disaster preparedness.</p>
        <p class="mb-4">Common data sources include rainfall levels, river flow rates, soil moisture, temperature trends, and historical weather patterns. Machine learning models learn temporal and spatial relationships within this data to estimate flood risk.</p>
        <p class="mb-4">One of the key challenges in such systems is data uncertainty. Sensor failures, missing readings, and noisy measurements are common. In addition, the cost of incorrect predictions can be extremely high, making reliability and robustness more important than raw accuracy.</p>

        <h5 class="text-base font-semibold mb-1">Career Guidance and Recommendation Systems</h5>
        <p class="mb-4">Career guidance systems use machine learning to provide personalized recommendations based on individual skills, interests, and evolving job market demands. These systems aim to help users make informed decisions by identifying suitable career paths and highlighting skill gaps.</p>
        <p class="mb-4">Such platforms often combine classification and recommendation techniques with explainable logic. Beyond suggesting roles, effective systems explain why a recommendation was made and what steps can be taken to achieve it.</p>
        <p class="mb-4">The main challenges here involve interpretability, fairness, and personalization. Users must be able to trust the system’s output and understand the reasoning behind it.</p>

        <h4 class="text-lg font-semibold mb-2">The Machine Learning Pipeline</h4>
        
        <h5 class="text-base font-semibold mb-1">Data Collection</h5>
        <p class="mb-2">Every machine learning system begins with data. In practice, data is rarely clean or well-structured. It may come from multiple sources, contain inconsistencies, or reflect historical biases. Ensuring data quality and relevance is one of the most critical steps in building reliable intelligent systems.</p>

        <h5 class="text-base font-semibold mb-1">Data Preprocessing</h5>
        <p class="mb-2">Preprocessing transforms raw data into a usable format. This typically includes handling missing values, normalizing numerical features, encoding categorical variables, and removing noise or outliers. Although often underestimated, this step has a significant impact on model performance and stability.</p>

        <h5 class="text-base font-semibold mb-1">Feature Engineering</h5>
        <p class="mb-2">Feature engineering involves creating meaningful representations of data that allow models to learn effectively. This requires domain knowledge and careful experimentation. For example, aggregating time-based features in environmental data or creating weighted skill similarity measures in recommendation systems can significantly improve model outcomes.</p>

        <h5 class="text-base font-semibold mb-1">Model Training and Selection</h5>
        <p class="mb-2">Model choice depends on the problem, data volume, performance requirements, and interpretability needs. Simpler models often provide strong baselines and are easier to debug, while more complex models may be used when the problem demands it. Training involves optimizing model parameters, validating results on unseen data, and ensuring that performance generalizes beyond the training dataset.</p>

        <h5 class="text-base font-semibold mb-1">Evaluation and Validation</h5>
        <p class="mb-2">Evaluating a machine learning system requires selecting metrics that align with real-world goals. In safety-critical systems, minimizing false negatives may be more important than maximizing overall accuracy. In recommendation systems, user satisfaction and relevance are key indicators. Thorough validation helps identify weaknesses before deployment.</p>

        <h5 class="text-base font-semibold mb-1">Deployment and Integration</h5>
        <p class="mb-2">Deployment moves machine learning from experimentation into real usage. Models are typically exposed through APIs and integrated into larger software systems. This stage introduces concerns such as scalability, latency, fault tolerance, and security. A model that performs well in isolation must also perform reliably under real-world conditions.</p>

        <h5 class="text-base font-semibold mb-1">Monitoring and Continuous Improvement</h5>
        <p class="mb-4">Once deployed, machine learning systems must be monitored continuously. Changes in data distributions, user behavior, or external conditions can degrade model performance over time. Monitoring allows teams to detect issues early, retrain models when necessary, and maintain system reliability.</p>

        <h4 class="text-lg font-semibold mb-2">Challenges in Production Machine Learning</h4>
        <p class="mb-4">Operating machine learning systems in production presents challenges beyond model development. These include managing data drift, ensuring transparency, handling ethical considerations, and maintaining system performance at scale. Addressing these challenges requires collaboration across engineering, data science, and domain expertise.</p>

        <h4 class="text-lg font-semibold mb-2">Conclusion</h4>
        <p class="mb-4">Building intelligent systems with machine learning involves far more than training models. It requires a holistic approach that spans data collection, system design, deployment, and ongoing maintenance. Whether applied to environmental forecasting, decision support systems, or personalized recommendations, machine learning delivers its greatest value when engineered as part of a robust, production-ready system. Understanding this end-to-end process is essential for creating solutions that are not only intelligent, but also reliable, scalable, and impactful.</p>
      `,
      date: 'Oct 8, 2025',
      readTime: '10 min read',
      category: 'Machine Learning',
      status: 'published',
    },
    {
      title: 'Flask Web Development Best Practices',
      excerpt:
        'Key insights and lessons learned from building REST APIs and backend systems during my internship experience. Covering topics like authentication, database design, error handling, and performance optimization for production applications.',
      content: `
        <h3 class="text-xl font-bold mb-4">Flask Web Development Best Practices: Designing Scalable, Secure, and Maintainable Backend Systems</h3>
        
        <p class="mb-4">Flask has earned its place as a popular backend framework by staying simple, flexible, and unopinionated. That simplicity is also its biggest challenge. Flask gives developers freedom, but with that freedom comes responsibility. Poor structure, weak security, or ad-hoc design decisions can quickly turn a Flask application into an unmaintainable system.</p>

        <p class="mb-4">This article covers best practices for building production-ready Flask applications, focusing on REST API design, authentication, database architecture, error handling, and performance optimization. The goal is not just to build APIs that work, but to build systems that scale, remain secure, and are easy to evolve.</p>

        <h4 class="text-lg font-semibold mb-2">Why Flask Works Well for Backend Systems</h4>
        <p class="mb-4">Flask is often described as a microframework. It does not force a specific project structure or set of tools, making it ideal for APIs, microservices, and backend systems where control and clarity matter.</p>
        
        <p class="mb-2">Flask excels when:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>APIs need to be lightweight and fast</li>
          <li>The application architecture must remain flexible</li>
          <li>Teams want full control over libraries and integrations</li>
        </ul>
        <p class="mb-4">However, these advantages only hold when the application is designed thoughtfully.</p>

        <h4 class="text-lg font-semibold mb-2">Structuring a Flask Application for Growth</h4>
        <p class="mb-4">One of the most common mistakes in Flask projects is starting with a single file and letting it grow unchecked. While this may work initially, it becomes problematic as the codebase expands.</p>
        <p class="mb-2">A scalable Flask application should be structured by responsibility:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Application factory for creating the app instance</li>
          <li>Blueprints for grouping related routes</li>
          <li>Separate layers for routes, services, and data access</li>
        </ul>
        <p class="mb-4">This separation improves readability, testability, and long-term maintainability.</p>

        <h4 class="text-lg font-semibold mb-2">Designing Clean and Consistent REST APIs</h4>
        <p class="mb-4">A well-designed API is predictable and intuitive for its consumers. Consistency matters more than cleverness.</p>
        <p class="mb-2">Key REST design principles include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Clear and meaningful endpoint naming</li>
          <li>Proper use of HTTP methods such as GET, POST, PUT, and DELETE</li>
          <li>Consistent response formats for both success and failure cases</li>
        </ul>
        <p class="mb-4">Versioning APIs early helps avoid breaking changes as the system evolves. Even simple versioning through URL prefixes can save significant effort later.</p>

        <h4 class="text-lg font-semibold mb-2">Authentication and Authorization</h4>
        <p class="mb-4">Security is a core requirement, not an optional feature. Authentication verifies identity, while authorization controls access.</p>
        <p class="mb-2">Common approaches in Flask applications include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Token-based authentication using JWT</li>
          <li>Role-based access control for protected endpoints</li>
          <li>Secure password handling using hashing and salting</li>
        </ul>
        <p class="mb-4">Sensitive information should never be hard-coded or exposed through logs. Environment variables and secrets management tools should always be used.</p>

        <h4 class="text-lg font-semibold mb-2">Database Design and Data Access Patterns</h4>
        <p class="mb-4">Database design directly impacts performance and reliability. A well-designed schema reduces complexity at the application level.</p>
        <p class="mb-2">Best practices include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Normalizing data where appropriate</li>
          <li>Using proper indexing strategies</li>
          <li>Avoiding excessive joins in high-traffic endpoints</li>
          <li>Separating database access logic from route handlers keeps business logic clean and easier to test.</li>
        </ul>
        <p class="mb-4">ORMs can simplify development, but understanding the underlying queries is essential for performance tuning.</p>

        <h4 class="text-lg font-semibold mb-2">Error Handling and API Reliability</h4>
        <p class="mb-4">Unhandled errors are one of the fastest ways to lose trust in an application. Flask provides tools to handle errors globally and return consistent responses.</p>
        <p class="mb-2">Effective error handling includes:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Centralized exception handling</li>
          <li>Meaningful error messages without exposing internal details</li>
          <li>Proper use of HTTP status codes</li>
        </ul>
        <p class="mb-4">Logging errors with sufficient context helps diagnose issues in production without impacting users.</p>

        <h4 class="text-lg font-semibold mb-2">Performance Optimization Strategies</h4>
        <p class="mb-4">Performance issues often appear only after deployment, making proactive optimization important.</p>
        <p class="mb-2">Key optimization techniques include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Reducing database round-trips</li>
          <li>Implementing caching for frequently accessed data</li>
          <li>Using pagination for large datasets</li>
        </ul>
        <p class="mb-4">Profiling tools and application metrics can reveal bottlenecks that are not obvious during development.</p>

        <h4 class="text-lg font-semibold mb-2">Testing and Validation</h4>
        <p class="mb-4">Testing ensures that APIs behave as expected and reduces the risk of regressions. Automated tests should cover core business logic, authentication flows, and edge cases.</p>
        <p class="mb-4">Unit tests validate individual components, while integration tests ensure that the system works end to end. Even minimal test coverage provides long-term benefits as the codebase grows.</p>

        <h4 class="text-lg font-semibold mb-2">Preparing Flask Applications for Production</h4>
        <p class="mb-4">Development and production environments should never be treated the same. Production deployments require:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Proper configuration management</li>
          <li>Secure handling of secrets</li>
          <li>Scalable deployment setups</li>
        </ul>
        <p class="mb-4">Running Flask behind a production-grade web server and monitoring application health are essential for stability.</p>

        <h4 class="text-lg font-semibold mb-2">Common Pitfalls to Avoid</h4>
        <p class="mb-2">Some recurring mistakes in Flask projects include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Mixing business logic directly into route handlers</li>
          <li>Ignoring input validation</li>
          <li>Overlooking security considerations until late stages</li>
          <li>Skipping monitoring and logging</li>
        </ul>
        <p class="mb-4">Avoiding these pitfalls early saves time and effort later.</p>

        <h4 class="text-lg font-semibold mb-2">Conclusion</h4>
        <p class="mb-4">Flask provides an excellent foundation for building backend systems, but success depends on how it is used. By applying sound architectural principles, enforcing security best practices, and planning for production from the beginning, Flask applications can scale well beyond simple prototypes.</p>
        <p class="mb-4">Strong Flask applications are not defined by the framework itself, but by disciplined design, clear separation of concerns, and continuous improvement as systems evolve.</p>
      `,
      date: 'Nov 12, 2025',
      readTime: '8 min read',
      category: 'Web Development',
      status: 'published',
    },
    {
      title: 'Automated Testing: A Comprehensive Guide',
      excerpt:
        'Deep dive into functional and performance testing strategies using Selenium and Apache JMeter for mobile applications. Learn how to create robust test suites that ensure application reliability and optimal user experience.',
      content: `
        <h3 class="text-xl font-bold mb-4">Automated Testing: A Comprehensive Guide - Building Reliable and High-Performance Mobile Applications with Selenium and Apache JMeter</h3>
        
        <p class="mb-4">As applications grow in complexity and user expectations rise, manual testing alone is no longer sufficient. Automated testing has become a foundational practice for ensuring reliability, performance, and consistent user experience across platforms. For mobile applications in particular, where devices, networks, and usage patterns vary widely, a strong automated testing strategy is essential.</p>

        <p class="mb-4">This guide explores functional and performance testing approaches using Selenium and Apache JMeter, focusing on how to design robust test suites that validate application behavior and performance under real-world conditions.</p>

        <h4 class="text-lg font-semibold mb-2">Why Automated Testing Matters</h4>
        <p class="mb-4">Automated testing provides fast, repeatable, and reliable validation of application behavior. It enables teams to detect defects early, reduce regression risks, and maintain confidence as applications evolve.</p>
        <p class="mb-2">For mobile applications, automated testing helps address challenges such as:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Frequent releases and feature updates</li>
          <li>Diverse device configurations and screen sizes</li>
          <li>Variable network conditions</li>
          <li>High expectations for responsiveness and stability</li>
        </ul>
        <p class="mb-4">Without automation, maintaining quality at scale becomes increasingly difficult.</p>

        <h4 class="text-lg font-semibold mb-2">Functional Testing for Mobile Applications</h4>
        <p class="mb-4">Functional testing ensures that an application behaves as expected from the user’s perspective. It validates workflows, UI interactions, data integrity, and business logic.</p>

        <h5 class="text-base font-semibold mb-1">Role of Selenium in Functional Testing</h5>
        <p class="mb-4">Selenium is widely used for automating user interactions across web and hybrid mobile applications. It simulates real user actions such as clicking buttons, filling forms, navigating pages, and validating UI responses.</p>
        <p class="mb-2">Key strengths of Selenium include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Cross-platform and cross-browser support</li>
          <li>Strong ecosystem and community support</li>
          <li>Seamless integration with testing frameworks and CI pipelines</li>
        </ul>
        <p class="mb-4">When applied to mobile environments, Selenium-based tests help verify that core user journeys remain stable across updates.</p>

        <h5 class="text-base font-semibold mb-1">Designing Effective Functional Test Suites</h5>
        <p class="mb-2">Robust functional test suites are designed around behavior, not implementation details.</p>
        <p class="mb-2">Best practices include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Prioritizing critical user flows over edge-case UI details</li>
          <li>Writing independent, repeatable tests</li>
          <li>Using clear assertions that validate expected outcomes</li>
        </ul>
        <p class="mb-4">Test data should be controlled and predictable, ensuring that failures reflect real defects rather than unstable environments.</p>

        <h4 class="text-lg font-semibold mb-2">Performance Testing for Mobile Applications</h4>
        <p class="mb-4">Performance testing focuses on how an application behaves under load, stress, and varying usage conditions. For mobile users, slow response times or app freezes often lead to abandonment.</p>

        <h5 class="text-base font-semibold mb-1">Using Apache JMeter for Performance Testing</h5>
        <p class="mb-4">Apache JMeter is a powerful tool for simulating concurrent users, measuring response times, and identifying performance bottlenecks. While commonly associated with web applications, it is equally valuable for testing mobile backend services and APIs.</p>
        <p class="mb-2">JMeter enables teams to:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Simulate realistic user traffic patterns</li>
          <li>Measure latency, throughput, and error rates</li>
          <li>Test application behavior under peak loads</li>
        </ul>
        <p class="mb-4">Performance testing helps uncover issues that functional tests alone cannot detect.</p>

        <h5 class="text-base font-semibold mb-1">Building Realistic Performance Scenarios</h5>
        <p class="mb-2">Effective performance testing mirrors real usage patterns. Instead of focusing only on peak load, scenarios should include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Gradual traffic ramp-up</li>
          <li>Sudden spikes in usage</li>
          <li>Prolonged sustained load</li>
        </ul>
        <p class="mb-4">These scenarios reveal how systems behave under stress and how they recover from failures.</p>

        <h4 class="text-lg font-semibold mb-2">Integrating Functional and Performance Testing</h4>
        <p class="mb-4">Functional and performance testing serve different purposes, but they complement each other. Functional tests ensure correctness, while performance tests ensure scalability and responsiveness.</p>
        <p class="mb-2">A balanced testing strategy combines:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Functional automation to validate features</li>
          <li>Performance testing to validate system behavior under load</li>
        </ul>
        <p class="mb-4">Together, they provide a more complete picture of application health.</p>

        <h4 class="text-lg font-semibold mb-2">Managing Test Data and Environments</h4>
        <p class="mb-2">Reliable automated testing depends on stable environments and consistent test data.</p>
        <p class="mb-2">Key considerations include:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Isolating test environments from production</li>
          <li>Resetting data between test runs</li>
          <li>Avoiding dependencies on external services where possible</li>
        </ul>
        <p class="mb-4">Mocking and stubbing can be used to reduce variability and improve test reliability.</p>

        <h4 class="text-lg font-semibold mb-2">Continuous Testing and CI/CD Integration</h4>
        <p class="mb-4">Automated tests deliver the most value when integrated into continuous integration and deployment pipelines.</p>
        <p class="mb-2">CI/CD integration enables:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Immediate feedback on code changes</li>
          <li>Early detection of regressions</li>
          <li>Consistent quality checks across releases</li>
        </ul>
        <p class="mb-4">Functional tests can be run on every build, while performance tests may be scheduled periodically or triggered before major releases.</p>

        <h4 class="text-lg font-semibold mb-2">Common Challenges and How to Address Them</h4>
        <p class="mb-2">Automated testing introduces its own set of challenges:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Flaky tests caused by timing issues or unstable environments</li>
          <li>Long execution times for large test suites</li>
          <li>Maintenance overhead as applications evolve</li>
        </ul>
        <p class="mb-4">Addressing these challenges requires disciplined test design, regular refactoring, and clear ownership of test assets.</p>

        <h4 class="text-lg font-semibold mb-2">Measuring Success in Automated Testing</h4>
        <p class="mb-4">Success is not defined by the number of tests written, but by the value they provide.</p>
        <p class="mb-2">Effective automated testing:</p>
        <ul class="list-disc pl-5 mb-4 text-gray-300 space-y-1">
          <li>Catches defects before they reach users</li>
          <li>Improves release confidence</li>
          <li>Reduces manual testing effort over time</li>
        </ul>
        <p class="mb-4">Metrics such as test reliability, execution time, and defect detection rate help evaluate test effectiveness.</p>

        <h4 class="text-lg font-semibold mb-2">Conclusion</h4>
        <p class="mb-4">Automated testing is a critical component of delivering high-quality mobile applications. By combining functional testing with Selenium and performance testing with Apache JMeter, teams can validate both application correctness and system resilience. A thoughtful, well-maintained automated testing strategy not only improves reliability and performance, but also enables teams to move faster without sacrificing quality. In an environment where user experience defines success, automated testing is no longer optional, it is essential.</p>
      `,
      date: 'Dec 15, 2025',
      readTime: '12 min read',
      category: 'Testing',
      status: 'published',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Articles</h2>
          <div className="w-20 h-1 bg-red-600 rounded"></div>
          <p className="text-lg text-gray-300 mt-4">
            Sharing insights on software development, ML, and technology. Documenting my learning journey and practical experiences in building modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="p-6 bg-zinc-900 border-zinc-800 netflix-card hover:border-red-600/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-red-600/20 text-red-600 hover:bg-red-600/30 border-red-600/50">
                    {post.category}
                  </Badge>
                  {post.status === 'planned' && (
                    <Badge className="bg-zinc-800 text-gray-300 hover:bg-zinc-700 border-zinc-700">
                      Coming Soon
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white leading-tight">{post.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full text-red-600 hover:text-red-500 hover:bg-red-600/10 font-medium"
                  disabled={post.status === 'planned'}
                  onClick={() => setSelectedPost(post)}
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>


        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">
            More articles coming soon! Stay tuned for insights on AI, web development, and software
            engineering.
          </p>
        </div>

        <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
          <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-4xl max-h-[85vh] overflow-y-auto w-full">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-red-600/20 text-red-600 border-red-600/50">
                  {selectedPost?.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar size={14} />
                  <span>{selectedPost?.date}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock size={14} />
                  <span>{selectedPost?.readTime}</span>
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold leading-tight mb-4 text-left">
                {selectedPost?.title}
              </DialogTitle>
            </DialogHeader>

            <div
              className="mt-4 text-gray-300 space-y-4"
              dangerouslySetInnerHTML={{ __html: selectedPost?.content || '' }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Blog;