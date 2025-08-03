import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Zap, Shield, Users, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for small communities and personal projects',
      icon: <Shield className="h-8 w-8" />,
      features: [
        '1,000 API calls/month',
        'Basic toxicity detection',
        'Email support',
        'Community forum access',
        'Basic analytics dashboard',
      ],
      limitations: [
        'No advanced categories',
        'No custom models',
        'No priority support',
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'emerald',
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'per month',
      description: 'Ideal for growing platforms and businesses',
      icon: <Zap className="h-8 w-8" />,
      features: [
        '50,000 API calls/month',
        'Advanced multi-category detection',
        'Priority email support',
        'Advanced analytics & reporting',
        'Custom toxicity thresholds',
        'Webhook integrations',
        'Historical data export',
      ],
      limitations: [
        'No custom model training',
        'No dedicated support',
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'blue',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale platforms with custom needs',
      icon: <Crown className="h-8 w-8" />,
      features: [
        'Unlimited API calls',
        'Custom model training',
        'Dedicated account manager',
        '24/7 phone & email support',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees',
        'Advanced security features',
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'purple',
    },
  ];

  const faqs = [
    {
      question: 'How accurate is ToxiClean?',
      answer: 'ToxiClean achieves 94.7% accuracy on our benchmark datasets, with continuous improvements through machine learning and user feedback.',
    },
    {
      question: 'Can I customize the toxicity thresholds?',
      answer: 'Yes, Professional and Enterprise plans allow you to customize toxicity thresholds and create custom rules for your specific community needs.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for all paid plans. No credit card required to get started.',
    },
    {
      question: 'What languages are supported?',
      answer: 'ToxiClean currently supports English, Spanish, French, German, and Portuguese, with more languages being added regularly.',
    },
    {
      question: 'How fast is the API response?',
      answer: 'Our API typically responds within 200-500ms, ensuring real-time moderation without impacting user experience.',
    },
    {
      question: 'Do you offer on-premise deployment?',
      answer: 'Yes, Enterprise customers can deploy ToxiClean on their own infrastructure for maximum security and control.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your community size and needs. All plans include our core toxicity detection features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-slate-900 rounded-2xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`p-4 bg-${plan.color}-600/10 rounded-xl w-fit mx-auto mb-4 text-${plan.color}-400`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-2">/{plan.period}</span>}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-center space-x-3">
                    <X className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              <Link
                to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors text-center block ${
                  plan.popular
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Feature Comparison</h2>
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="text-left py-4 px-6 text-white font-semibold">Features</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Professional</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="py-4 px-6 text-gray-300">API Calls per Month</td>
                    <td className="py-4 px-6 text-center text-gray-300">1,000</td>
                    <td className="py-4 px-6 text-center text-gray-300">50,000</td>
                    <td className="py-4 px-6 text-center text-gray-300">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Multi-category Detection</td>
                    <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-emerald-400 mx-auto" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-emerald-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Custom Model Training</td>
                    <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                    <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-emerald-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">24/7 Support</td>
                    <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                    <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-emerald-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
          <p className="text-gray-400 mb-8">Our team is here to help you choose the right plan for your needs.</p>
          <Link
            to="/contact"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-block"
          >
            Contact Our Sales Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;