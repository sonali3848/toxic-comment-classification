import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Clean Comments,
              <span className="text-emerald-400 block">Safer Communities</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Powered by advanced deep learning, ToxiClean automatically detects and filters 
              toxic comments, creating healthier online spaces for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-gray-600 text-white hover:bg-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Detection</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our state-of-the-art machine learning models provide accurate, real-time toxicity detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
              <div className="p-3 bg-emerald-600/10 rounded-lg w-fit mb-6 group-hover:bg-emerald-600/20 transition-colors">
                <Zap className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Analysis</h3>
              <p className="text-gray-400 leading-relaxed">
                Instant toxicity detection with sub-second response times. Process thousands of comments simultaneously.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
              <div className="p-3 bg-emerald-600/10 rounded-lg w-fit mb-6 group-hover:bg-emerald-600/20 transition-colors">
                <Shield className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">94.7% Accuracy</h3>
              <p className="text-gray-400 leading-relaxed">
                Industry-leading accuracy with advanced neural networks trained on millions of comments.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
              <div className="p-3 bg-emerald-600/10 rounded-lg w-fit mb-6 group-hover:bg-emerald-600/20 transition-colors">
                <Users className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Category Detection</h3>
              <p className="text-gray-400 leading-relaxed">
                Detects toxicity, threats, insults, obscenity, and identity attacks with detailed confidence scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">10M+</div>
              <div className="text-gray-400">Comments Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">94.7%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">500ms</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Build Safer Online Communities
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Reduce Moderation Costs</h3>
                    <p className="text-gray-400">Automate 90% of comment moderation with AI, reducing manual review time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Improve User Experience</h3>
                    <p className="text-gray-400">Create welcoming environments that encourage positive engagement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Scale Confidently</h3>
                    <p className="text-gray-400">Handle growing communities without increasing moderation overhead.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="bg-slate-800 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">Analysis Result</span>
                    <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">TOXIC</span>
                  </div>
                  <p className="text-white text-sm mb-3">"You're such an idiot for posting this"</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Confidence: 91%</span>
                    <span>Toxicity: 0.87</span>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">Analysis Result</span>
                    <span className="text-xs bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded">SAFE</span>
                  </div>
                  <p className="text-white text-sm mb-3">"This is a great post! Thanks for sharing."</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Confidence: 98%</span>
                    <span>Toxicity: 0.05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Clean Up Your Comments?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of communities already using ToxiClean to create safer online spaces.
          </p>
          <Link
            to="/signup"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center group"
          >
            Start Free Trial
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;