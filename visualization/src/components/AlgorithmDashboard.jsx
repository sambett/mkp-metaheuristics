// AlgorithmDashboard.jsx
import { useState } from 'react';
import ConvAnalysis from './ConvAnalysis';
import BGSAAnalysis from './BGSAAnalysis';
import HybridAnalysis from './HybridAnalysis';
import BWOAAnalysis from './BWOAAnalysis';
import ComparisonTables from './ComparisonTables';

const AlgorithmTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['BPSO', 'BGSA', 'Hybrid', 'BWOA', 'Comparison'];
  return (
    <div className="flex space-x-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === tab
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const AlgorithmDashboard = () => {
  const [activeTab, setActiveTab] = useState('BPSO');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Analyse Comparative des Algorithmes d'Optimisation
        </h1>
        
        <AlgorithmTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'BPSO' && <ConvAnalysis />}
        {activeTab === 'BGSA' && <BGSAAnalysis />}
        {activeTab === 'Hybrid' && <HybridAnalysis />}
        {activeTab === 'BWOA' && <BWOAAnalysis />}
        {activeTab === 'Comparison' && <ComparisonTables />}
      </div>
    </div>
  );
};

export default AlgorithmDashboard;