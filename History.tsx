import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, AlertTriangle, Shield, Trash2 } from 'lucide-react';
import { AnalysisResult } from '../types';
import { getAnalysisHistory } from '../services/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const History: React.FC = () => {
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [filteredHistory, setFilteredHistory] = useState<AnalysisResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'safe' | 'toxic' | 'severe_toxic'>('all');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Get from API and local storage
        const apiHistory = await getAnalysisHistory();
        const localHistory = JSON.parse(localStorage.getItem('toxiclean_history') || '[]');
        
        // Combine and deduplicate
        const combined = [...localHistory, ...apiHistory];
        const unique = combined.filter((item, index, arr) => 
          arr.findIndex(t => t.id === item.id) === index
        );
        
        setHistory(unique.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
      } catch (error) {
        console.error('Failed to fetch history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  useEffect(() => {
    let filtered = history;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(item => item.classification === filterType);
    }

    setFilteredHistory(filtered);
  }, [history, searchTerm, filterType]);

  const clearHistory = () => {
    localStorage.removeItem('toxiclean_history');
    setHistory(prev => prev.filter(item => !localStorage.getItem('toxiclean_history')));
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
      case 'safe': return <Shield className="h-4 w-4" />;
      case 'toxic': case 'severe_toxic': return <AlertTriangle className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analysis History</h1>
              <p className="text-gray-400">View and manage your comment analysis history</p>
            </div>
            <button
              onClick={clearHistory}
              className="flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear History
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search comments..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="pl-10 pr-8 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Comments</option>
                <option value="safe">Safe Only</option>
                <option value="toxic">Toxic Only</option>
                <option value="severe_toxic">Severe Toxic Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* History List */}
        {filteredHistory.length === 0 ? (
          <div className="bg-slate-900 rounded-xl p-12 border border-slate-700 text-center">
            <Calendar className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No Analysis History</h3>
            <p className="text-gray-400">
              {searchTerm || filterType !== 'all' 
                ? 'No results match your current filters.' 
                : 'Start analyzing comments to see your history here.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredHistory.map((result) => (
              <div key={result.id} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getClassificationColor(result.classification)}`}>
                    {getClassificationIcon(result.classification)}
                    <span className="ml-2 capitalize">{result.classification.replace('_', ' ')}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {new Date(result.timestamp).toLocaleString()}
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <p className="text-white leading-relaxed">{result.text}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-white">{(result.score * 100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-400">Toxicity</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{(result.confidence * 100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-400">Confidence</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{(result.categories.insult * 100).toFixed(0)}%</div>
                    <div className="text-xs text-gray-400">Insult</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{(result.categories.threat * 100).toFixed(0)}%</div>
                    <div className="text-xs text-gray-400">Threat</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination would go here in a real app */}
        {filteredHistory.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Showing {filteredHistory.length} of {history.length} results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;