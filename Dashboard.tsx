import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, MessageSquare, Shield, AlertTriangle } from 'lucide-react';
import { getDashboardStats } from '../services/api';
import { DashboardStats } from '../types';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const chartData = [
    { name: 'Jan', safe: 420, toxic: 180 },
    { name: 'Feb', safe: 380, toxic: 200 },
    { name: 'Mar', safe: 450, toxic: 150 },
    { name: 'Apr', safe: 520, toxic: 120 },
    { name: 'May', safe: 490, toxic: 140 },
    { name: 'Jun', safe: 580, toxic: 90 },
  ];

  const pieData = [
    { name: 'Safe', value: stats?.safeComments || 0, color: '#10b981' },
    { name: 'Toxic', value: stats?.toxicComments || 0, color: '#ef4444' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Monitor your comment moderation performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Analyses</p>
                <p className="text-2xl font-bold text-white">{stats?.totalAnalyses.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-blue-600/10 rounded-lg">
                <MessageSquare className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-emerald-400 mr-1" />
              <span className="text-sm text-emerald-400">+12% from last month</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Safe Comments</p>
                <p className="text-2xl font-bold text-white">{stats?.safeComments.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-emerald-600/10 rounded-lg">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-emerald-400 mr-1" />
              <span className="text-sm text-emerald-400">+8% from last month</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Toxic Comments</p>
                <p className="text-2xl font-bold text-white">{stats?.toxicComments.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-red-600/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-red-400">-5% from last month</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Accuracy Rate</p>
                <p className="text-2xl font-bold text-white">{stats?.accuracyRate}%</p>
              </div>
              <div className="p-3 bg-emerald-600/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-emerald-400 mr-1" />
              <span className="text-sm text-emerald-400">+2.1% from last month</span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-6">Comment Analysis Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                />
                <Bar dataKey="safe" fill="#10b981" name="Safe Comments" />
                <Bar dataKey="toxic" fill="#ef4444" name="Toxic Comments" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-6">Comment Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-600/10 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Toxic comment detected</p>
                  <p className="text-sm text-gray-400">High confidence (91%)</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">5 minutes ago</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-600/10 rounded-lg">
                  <Shield className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Batch analysis completed</p>
                  <p className="text-sm text-gray-400">250 comments processed</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">12 minutes ago</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Model accuracy improved</p>
                  <p className="text-sm text-gray-400">Now at 94.7% accuracy</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;