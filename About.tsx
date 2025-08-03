import React from 'react';
import { Brain, Target, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Advanced Neural Networks',
      description: 'Our deep learning models are trained on millions of comments to achieve industry-leading accuracy.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Multi-Category Detection',
      description: 'Detects various types of toxicity including threats, insults, identity attacks, and obscenity.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Focused',
      description: 'Built specifically to help online communities create safer and more welcoming environments.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '94.7% Accuracy',
      description: 'Continuously improving through machine learning and community feedback.',
    },
  ];

  const stats = [
    { value: '10M+', label: 'Comments Analyzed' },
    { value: '94.7%', label: 'Accuracy Rate' },
    { value: '500ms', label: 'Average Response Time' },
    { value: '24/7', label: 'Continuous Monitoring' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'PhD in Machine Learning from Stanford, former Google AI researcher.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Product Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Former Head of Trust & Safety at major social platforms.',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Data Science Lead',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Expert in NLP and content moderation with 10+ years experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              About <span className="text-emerald-400">ToxiClean</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make the internet a safer place through advanced AI-powered 
              content moderation, helping communities thrive without toxic behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Online harassment and toxic behavior have become major barriers to healthy digital communities. 
                Traditional moderation approaches are slow, inconsistent, and can't scale with the volume of 
                content being created every second.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                ToxiClean leverages cutting-edge deep learning technology to provide real-time, accurate, 
                and consistent content moderation that scales with your community's needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">Protect users from harmful content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">Reduce moderation workload by 90%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">Foster positive community engagement</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our advanced AI system analyzes comments across multiple dimensions to provide 
              accurate toxicity detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
                <div className="p-3 bg-emerald-600/10 rounded-lg w-fit mb-6 group-hover:bg-emerald-600/20 transition-colors text-emerald-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experts in AI, machine learning, and online safety working together to create 
              safer digital spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 text-center hover:border-emerald-500/50 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-24 w-24 rounded-full mx-auto mb-6 border-2 border-slate-600"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-emerald-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4">Model Architecture</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">BERT-based Transformer</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Multi-head Attention</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Contextual Embeddings</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Multi-label Classification</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-8">Advanced Technology</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our models are built on state-of-the-art transformer architecture, 
                fine-tuned specifically for toxicity detection across multiple languages and contexts.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We continuously retrain our models with new data and feedback to improve 
                accuracy and reduce false positives while maintaining high recall rates.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
              >
                Try ToxiClean Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Build Safer Communities?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of platforms already using ToxiClean to create positive online experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/analyze"
              className="border border-gray-600 text-white hover:bg-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;