import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-red-600 rounded"></div>
          <p className="text-lg text-gray-300 mt-4">
            Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <Card className="p-4 flex items-center gap-4 bg-zinc-900 border-zinc-800 hover:border-red-600/50 transition-colors">
                  <div className="p-3 bg-red-600/20 rounded-lg">
                    <Mail size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium" style={{textAlign: 'left'}}>Email</p>
                    <a
                      href="mailto:chandrasravya17@gmail.com"
                      className="text-white hover:text-red-600 transition-colors"
                      style={{textAlign: 'left'}}
                    >
                      chandrasravya17@gmail.com
                    </a>
                  </div>
                </Card>

                <Card className="p-4 flex items-center gap-4 bg-zinc-900 border-zinc-800 hover:border-red-600/50 transition-colors">
                  <div className="p-3 bg-red-600/20 rounded-lg">
                    <Phone size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium" style={{textAlign: 'left'}}>Phone</p>
                    <a
                      href="tel:+918125080969"
                      className="text-white hover:text-red-600 transition-colors"
                      style={{textAlign: 'left'}}
                    >
                      +91-8125080969
                    </a>
                  </div>
                </Card>

                <Card className="p-4 flex items-center gap-4 bg-zinc-900 border-zinc-800 hover:border-red-600/50 transition-colors">
                  <div className="p-3 bg-red-600/20 rounded-lg">
                    <MapPin size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium" style={{textAlign: 'left'}}>Location</p>
                    <p className="text-white" style={{textAlign: 'left'}}>Vellore, Tamil Nadu, India</p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                {[
                  'Strong foundation in CS fundamentals and modern technologies',
                  'Hands-on experience with AI/ML and web development',
                  'Proven ability to deliver quality code and solutions',
                  'Quick learner with a passion for problem-solving',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-zinc-900 border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" style={{textAlign: 'left'}}>
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" style={{textAlign: 'left'}}>
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2" style={{textAlign: 'left'}}>
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" style={{textAlign: 'left'}}>
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  className="w-full bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-medium rounded-md"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;