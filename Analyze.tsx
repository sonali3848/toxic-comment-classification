import React, { useState } from 'react';
import { Send, AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import { analyzeComment } from '../services/api';
import { AnalysisResult } from '../types';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Analyze: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const analysisResult = await analyzeComment(text);
      setResult(analysisResult);
      
      // Save to history
      const history = JSON.parse(localStorage.getItem('toxiclean_history') || '[]');
      history.unshift(analysisResult);
      localStorage.setItem('toxiclean_history', JSON.stringify(history.slice(0, 50)));
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

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
      case 'toxic': return <AlertTriangle className="h-5 w-5" />;
      case 'severe_toxic': return <AlertTriangle className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Comment Analysis</h1>
          <p className="text-gray-400">Analyze comments for toxicity using our advanced AI model</p>
        </div>

        {/* Input Section */}
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 mb-8">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-4">
            Enter comment to analyze
          </label>
          <textarea
            id="comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste a comment here..."
            rows={4}
            className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-400">
              {text.length} characters
            </span>
            <button
              onClick={handleAnalyze}
              disabled={!text.trim() || loading}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              {loading ? (
                <>
                  <LoadingSpinner size="sm" color="white" />
                  <span className="ml-2">Analyzing...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Analyze Comment
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            {/* Main Result */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Analysis Result</h3>
                <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getClassificationColor(result.classification)}`}>
                  {getClassificationIcon(result.classification)}
                  <span className="ml-2 capitalize">{result.classification.replace('_', ' ')}</span>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <p className="text-white">{result.text}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{(result.score * 100).toFixed(1)}%</div>
                  <div className="text-sm text-gray-400">Toxicity Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{(result.confidence * 100).toFixed(1)}%</div>
                  <div className="text-sm text-gray-400">Confidence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {new Date(result.timestamp).toLocaleTimeString()}
                  </div>
                  <div className="text-sm text-gray-400">Analyzed At</div>
                </div>
              </div>
            </div>

            {/* Detailed Categories */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-6">Detailed Analysis</h3>
              <div className="space-y-4">
                {Object.entries(result.categories).map(([category, score]) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-gray-300 capitalize">
                      {category.replace('_', ' ')}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            score > 0.7 ? 'bg-red-500' : score > 0.4 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min(score * 100, 100)}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400 min-w-[3rem]">
                        {(score * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Recommendations</h3>
              {result.classification === 'safe' ? (
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="text-emerald-400 font-medium">Comment is Safe</p>
                    <p className="text-gray-400 text-sm mt-1">
                      This comment appears to be non-toxic and safe for public display.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5" />
                    <div>
                      <p className="text-amber-400 font-medium">Content Review Required</p>
                      <p className="text-gray-400 text-sm mt-1">
                        This comment contains potentially toxic content and may require moderation.
                      </p>
                    </div>
                  </div>
                  
                  {result.classification === 'severe_toxic' && (
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="text-red-400 font-medium">Immediate Action Recommended</p>
                        <p className="text-gray-400 text-sm mt-1">
                          This comment is classified as severely toxic and should be removed immediately.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Example Comments */}
        {!result && (
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Try These Examples</h3>
            <div className="space-y-3">
              <button
                onClick={() => setText('This is a great post! Thanks for sharing your insights.')}
                className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-300 transition-colors"
              >
                "This is a great post! Thanks for sharing your insights."
              </button>
              <button
                onClick={() => setText('You are such an idiot for posting this garbage.')}
                className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-300 transition-colors"
              >
                "You are such an idiot for posting this garbage."
              </button>
              <button
                onClick={() => setText('I disagree with your opinion, but I respect your viewpoint.')}
                className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-300 transition-colors"
              >
                "I disagree with your opinion, but I respect your viewpoint."
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyze;