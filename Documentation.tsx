import React, { useState } from 'react';
import { Book, Code, Zap, Shield, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Documentation: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: <Shield className="h-5 w-5" />,
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: 'examples',
      title: 'Code Examples',
      icon: <Book className="h-5 w-5" />,
    },
  ];

  const [activeSection, setActiveSection] = useState('getting-started');

  const codeExamples = {
    curl: `curl -X POST https://api.toxiclean.ai/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "This is a sample comment to analyze"
  }'`,
    javascript: `const response = await fetch('https://api.toxiclean.ai/v1/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    text: 'This is a sample comment to analyze'
  })
});

const result = await response.json();
console.log(result);`,
    python: `import requests

url = "https://api.toxiclean.ai/v1/analyze"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "text": "This is a sample comment to analyze"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`,
    response: `{
  "id": "analysis_123456",
  "text": "This is a sample comment to analyze",
  "classification": "safe",
  "score": 0.05,
  "confidence": 0.98,
  "timestamp": "2025-01-27T10:30:00Z",
  "categories": {
    "toxicity": 0.05,
    "severe_toxicity": 0.01,
    "obscene": 0.02,
    "threat": 0.01,
    "insult": 0.03,
    "identity_attack": 0.01
  }
}`
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete guide to integrating ToxiClean's AI-powered comment moderation into your application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-emerald-600/20 text-emerald-400'
                        : 'text-gray-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Getting Started */}
              {activeSection === 'getting-started' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                    <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
                    <p className="text-gray-400 mb-6">
                      Welcome to ToxiClean API! This guide will help you get started with integrating 
                      our AI-powered toxicity detection into your application.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Get Your API Key</h3>
                        <p className="text-gray-400 mb-4">
                          First, sign up for a ToxiClean account and get your API key from the dashboard.
                        </p>
                        <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                          <code className="text-emerald-400">API_KEY: tx_live_sk_1234567890abcdef</code>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Base URL</h3>
                        <p className="text-gray-400 mb-4">
                          All API requests should be made to our base URL:
                        </p>
                        <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                          <code className="text-blue-400">https://api.toxiclean.ai/v1</code>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">3. Rate Limits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-slate-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-emerald-400">1,000</div>
                            <div className="text-sm text-gray-400">Free Plan</div>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-400">50,000</div>
                            <div className="text-sm text-gray-400">Professional</div>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-400">Unlimited</div>
                            <div className="text-sm text-gray-400">Enterprise</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Authentication */}
              {activeSection === 'authentication' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                    <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
                    <p className="text-gray-400 mb-6">
                      ToxiClean API uses Bearer token authentication. Include your API key in the 
                      Authorization header of every request.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Header Format</h3>
                        <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                          <code className="text-gray-300">
                            Authorization: Bearer YOUR_API_KEY
                          </code>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Example Request</h3>
                        <div className="relative bg-slate-800 rounded-lg border border-slate-600">
                          <div className="flex items-center justify-between p-4 border-b border-slate-600">
                            <span className="text-sm text-gray-400">cURL</span>
                            <button
                              onClick={() => copyToClipboard(codeExamples.curl, 'auth-curl')}
                              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                            >
                              {copiedCode === 'auth-curl' ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                              <span className="text-sm">Copy</span>
                            </button>
                          </div>
                          <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            <code>{codeExamples.curl}</code>
                          </pre>
                        </div>
                      </div>

                      <div className="bg-amber-600/10 border border-amber-600/20 rounded-lg p-4">
                        <h4 className="text-amber-400 font-semibold mb-2">Security Note</h4>
                        <p className="text-amber-200 text-sm">
                          Never expose your API key in client-side code. Always make API calls from your backend server.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* API Reference */}
              {activeSection === 'api-reference' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                    <h2 className="text-2xl font-bold text-white mb-4">API Reference</h2>
                    
                    <div className="space-y-8">
                      {/* Analyze Endpoint */}
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="bg-emerald-600 text-white px-3 py-1 rounded text-sm font-medium">POST</span>
                          <code className="text-lg text-white">/analyze</code>
                        </div>
                        <p className="text-gray-400 mb-6">
                          Analyze a text comment for toxicity and get detailed classification results.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Request Body</h4>
                            <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-slate-600">
                                    <th className="text-left py-2 text-gray-300">Parameter</th>
                                    <th className="text-left py-2 text-gray-300">Type</th>
                                    <th className="text-left py-2 text-gray-300">Required</th>
                                    <th className="text-left py-2 text-gray-300">Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="py-2 text-emerald-400">text</td>
                                    <td className="py-2 text-gray-400">string</td>
                                    <td className="py-2 text-red-400">Yes</td>
                                    <td className="py-2 text-gray-400">The comment text to analyze</td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 text-emerald-400">language</td>
                                    <td className="py-2 text-gray-400">string</td>
                                    <td className="py-2 text-gray-400">No</td>
                                    <td className="py-2 text-gray-400">Language code (default: auto-detect)</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-2">Response</h4>
                            <div className="relative bg-slate-800 rounded-lg border border-slate-600">
                              <div className="flex items-center justify-between p-4 border-b border-slate-600">
                                <span className="text-sm text-gray-400">JSON Response</span>
                                <button
                                  onClick={() => copyToClipboard(codeExamples.response, 'response')}
                                  className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                                >
                                  {copiedCode === 'response' ? (
                                    <Check className="h-4 w-4" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                  <span className="text-sm">Copy</span>
                                </button>
                              </div>
                              <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                                <code>{codeExamples.response}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Status Codes */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">HTTP Status Codes</h3>
                        <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-slate-600">
                                <th className="text-left py-2 text-gray-300">Code</th>
                                <th className="text-left py-2 text-gray-300">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 text-emerald-400">200</td>
                                <td className="py-2 text-gray-400">Success - Analysis completed</td>
                              </tr>
                              <tr>
                                <td className="py-2 text-red-400">400</td>
                                <td className="py-2 text-gray-400">Bad Request - Invalid input</td>
                              </tr>
                              <tr>
                                <td className="py-2 text-red-400">401</td>
                                <td className="py-2 text-gray-400">Unauthorized - Invalid API key</td>
                              </tr>
                              <tr>
                                <td className="py-2 text-red-400">429</td>
                                <td className="py-2 text-gray-400">Rate limit exceeded</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Code Examples */}
              {activeSection === 'examples' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                    <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
                    <p className="text-gray-400 mb-6">
                      Here are examples of how to integrate ToxiClean API in different programming languages.
                    </p>

                    <div className="space-y-6">
                      {/* JavaScript Example */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">JavaScript (Node.js)</h3>
                        <div className="relative bg-slate-800 rounded-lg border border-slate-600">
                          <div className="flex items-center justify-between p-4 border-b border-slate-600">
                            <span className="text-sm text-gray-400">JavaScript</span>
                            <button
                              onClick={() => copyToClipboard(codeExamples.javascript, 'js')}
                              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                            >
                              {copiedCode === 'js' ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                              <span className="text-sm">Copy</span>
                            </button>
                          </div>
                          <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            <code>{codeExamples.javascript}</code>
                          </pre>
                        </div>
                      </div>

                      {/* Python Example */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Python</h3>
                        <div className="relative bg-slate-800 rounded-lg border border-slate-600">
                          <div className="flex items-center justify-between p-4 border-b border-slate-600">
                            <span className="text-sm text-gray-400">Python</span>
                            <button
                              onClick={() => copyToClipboard(codeExamples.python, 'python')}
                              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                            >
                              {copiedCode === 'python' ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                              <span className="text-sm">Copy</span>
                            </button>
                          </div>
                          <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            <code>{codeExamples.python}</code>
                          </pre>
                        </div>
                      </div>

                      {/* SDKs */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Official SDKs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                            <h4 className="text-white font-medium mb-2">Node.js SDK</h4>
                            <p className="text-gray-400 text-sm mb-3">Official JavaScript/TypeScript SDK</p>
                            <a
                              href="#"
                              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm"
                            >
                              View on GitHub
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                            <h4 className="text-white font-medium mb-2">Python SDK</h4>
                            <p className="text-gray-400 text-sm mb-3">Official Python SDK</p>
                            <a
                              href="#"
                              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm"
                            >
                              View on PyPI
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;