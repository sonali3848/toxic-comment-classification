import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, TrendingUp, ArrowRight, CheckCircle, Brain, Target, Award, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Detection',
      description: 'Advanced neural networks trained on millions of comments for accurate toxicity detection.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Real-time Processing',
      description: 'Instant analysis with sub-second response times for seamless user experience.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Multi-Category Analysis',
      description: 'Detects various types of toxicity including threats, insults, and identity attacks.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '94.7% Accuracy',
      description: 'Industry-leading accuracy with continuous improvement through machine learning.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Community Manager',
      company: 'TechForum',
      content: 'ToxiClean has transformed our community. We\'ve seen a 90% reduction in toxic comments.',
      avatar: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager',
      company: 'SocialApp',
      content: 'The accuracy is incredible. It catches nuanced toxicity that other tools miss.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Developer',
      company: 'GameChat',
      content: 'Easy integration and fantastic API. Our users love the safer environment.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              The Future of
              <span className="text-emerald-400 block">Comment Moderation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Harness the power of advanced deep learning to automatically detect and filter 
              toxic comments, creating safer and more welcoming online communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/signup"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-emerald-500/25"
              >
                Start Free Trial
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-600 text-white hover:bg-slate-800 hover:border-emerald-500 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center group"
              >
                <Play className="mr-3 h-5 w-5" />
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose ToxiClean?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cutting-edge AI technology provides unmatched accuracy and speed in toxic content detection
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="p-4 bg-emerald-600/10 rounded-xl w-fit mb-6 group-hover:bg-emerald-600/20 transition-colors text-emerald-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                See ToxiClean in Action
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Experience real-time toxicity detection with our interactive demo. 
                Test various comments and see how our AI classifies them instantly.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">Real-time analysis results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">Detailed confidence scores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">Multi-category classification</span>
                </div>
              </div>
              <Link
                to="/analyze"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center group"
              >
                Try Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Input Comment</span>
                      <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">ANALYZING</span>
                    </div>
                    <p className="text-white mb-4">"This is a great post! Thanks for sharing."</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full animate-pulse" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Analysis Result</span>
                      <span className="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full">SAFE</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">98%</div>
                        <div className="text-xs text-gray-400">Confidence</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">0.05</div>
                        <div className="text-xs text-gray-400">Toxicity Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what our customers say about ToxiClean's impact on their communities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border-2 border-slate-600"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Transform Your Community?
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Join thousands of platforms already using ToxiClean to create safer, 
              more welcoming online experiences for their users.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/signup"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-emerald-500/25"
              >
                Get Started Free
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-600 text-white hover:bg-slate-800 hover:border-emerald-500 px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;