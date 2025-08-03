import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Zap, Shield, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Demo: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoScenarios = [
    {
      title: 'Safe Comment Detection',
      description: 'See how ToxiClean identifies positive, constructive comments',
      input: 'This is a really helpful tutorial! Thanks for sharing your knowledge with the community.',
      result: {
        classification: 'safe',
        score: 0.05,
        confidence: 0.98,
        categories: {
          toxicity: 0.05,
          severe_toxicity: 0.01,
          obscene: 0.02,
          threat: 0.01,
          insult: 0.03,
          identity_attack: 0.01,
        }
      }
    },
    {
      title: 'Toxic Comment Detection',
      description: 'Watch how our AI identifies and classifies toxic language',
      input: 'You are such an idiot for posting this garbage. Nobody wants to see this trash.',
      result: {
        classification: 'toxic',
        score: 0.87,
        confidence: 0.91,
        categories: {
          toxicity: 0.87,
          severe_toxicity: 0.15,
          obscene: 0.23,
          threat: 0.08,
          insult: 0.89,
          identity_attack: 0.12,
        }
      }
    },
    {
      title: 'Severe Toxicity Detection',
      description: 'See how ToxiClean handles extremely harmful content',
      input: 'I hope you die in a fire. The world would be better without people like you.',
      result: {
        classification: 'severe_toxic',
        score: 0.95,
        confidence: 0.96,
        categories: {
          toxicity: 0.95,
          severe_toxicity: 0.92,
          obscene: 0.34,
          threat: 0.88,
          insult: 0.76,
          identity_attack: 0.23,
        }
      }
    },
  ];

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'safe': return 'text-emerald-400 bg-emerald-600/10';
      case 'toxic': return 'text-amber-400 bg-amber-600/10';
      case 'severe_toxic': return 'text-red-400 bg-red-600/10';
      default: return 'text-gray-400 bg-gray-600/10';
    }
  };

  const getClassificationIcon = (classification: string) => {
    switch (classification) {
      case 'safe': return <Shield className="h-5 w-5" />;
      case 'toxic': case 'severe_toxic': return <AlertTriangle className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  const playDemo = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const resetDemo = () => {
    setIsPlaying(false);
  };

  const currentScenario = demoScenarios[currentDemo];

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Interactive Demo</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience ToxiClean's AI-powered toxicity detection in real-time. 
            See how our advanced algorithms analyze and classify different types of comments.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demoScenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setCurrentDemo(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                currentDemo === index
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Main Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Input Section */}
          <motion.div
            key={currentDemo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Input Comment</h3>
              <div className="flex space-x-2">
                <button
                  onClick={playDemo}
                  disabled={isPlaying}
                  className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={resetDemo}
                  className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <p className="text-white leading-relaxed">{currentScenario.input}</p>
            </div>
            
            <p className="text-gray-400 text-sm">{currentScenario.description}</p>
            
            {isPlaying && (
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Zap className="h-4 w-4 animate-pulse" />
                  <span className="text-sm">Analyzing comment...</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-emerald-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div
            key={`result-${currentDemo}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Analysis Results</h3>
            
            <div className="space-y-6">
              {/* Classification */}
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Classification</span>
                <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getClassificationColor(currentScenario.result.classification)}`}>
                  {getClassificationIcon(currentScenario.result.classification)}
                  <span className="ml-2 capitalize">{currentScenario.result.classification.replace('_', ' ')}</span>
                </div>
              </div>

              {/* Scores */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{(currentScenario.result.score * 100).toFixed(1)}%</div>
                  <div className="text-sm text-gray-400">Toxicity Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{(currentScenario.result.confidence * 100).toFixed(1)}%</div>
                  <div className="text-sm text-gray-400">Confidence</div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="space-y-3">
                <h4 className="text-white font-medium">Category Breakdown</h4>
                {Object.entries(currentScenario.result.categories).map(([category, score]) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-gray-300 capitalize text-sm">
                      {category.replace('_', ' ')}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            score > 0.7 ? 'bg-red-500' : score > 0.4 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min(score * 100, 100)}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400 min-w-[2.5rem]">
                        {(score * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl p-8 border border-slate-700 mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why ToxiClean Stands Out</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-emerald-600/10 rounded-xl w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Lightning Fast</h4>
              <p className="text-gray-400">Average response time under 500ms for real-time moderation</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-600/10 rounded-xl w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Highly Accurate</h4>
              <p className="text-gray-400">94.7% accuracy with continuous learning and improvement</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-600/10 rounded-xl w-fit mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Multi-Category</h4>
              <p className="text-gray-400">Detects 6 different types of toxicity with detailed scoring</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Try ToxiClean?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start protecting your community today with our advanced AI-powered comment moderation system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="/analyze"
              className="border border-gray-600 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Try Live Analysis
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;