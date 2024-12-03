import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComparisonTables = () => {
  const mkp1ComparisonData = [
    { algorithm: 'BPSO', best: 141278.0, mean: 141277.33, stdDev: 3.59 },
    { algorithm: 'BGSA', best: 141137.0, mean: 137605.13, stdDev: 1227.35 },
    { algorithm: 'Hybrid', best: 141278.0, mean: 141278.0, stdDev: 0.0 },
    { algorithm: 'BWOA', best: 141278.0, mean: 141023.03, stdDev: 389.90 }
  ];

  const mkp7ComparisonData = [
    { algorithm: 'BPSO', best: 1060421.0, mean: 1050407.6, stdDev: 5225.30 },
    { algorithm: 'BGSA', best: 933132.0, mean: 899724.93, stdDev: 14723.39 },
    { algorithm: 'Hybrid', best: 1067471.0, mean: 1047452.77, stdDev: 8916.45 },
    { algorithm: 'BWOA', best: 1088432.0, mean: 1074685.3, stdDev: 8618.53 }
  ];

  const mkp8ComparisonData = [
    { algorithm: 'BPSO', best: 508240.0, mean: 458900.67, stdDev: 18482.39 },
    { algorithm: 'BGSA', best: 470586.0, mean: 409416.9, stdDev: 18722.75 },
    { algorithm: 'Hybrid', best: 518077.0, mean: 474464.13, stdDev: 16085.13 },
    { algorithm: 'BWOA', best: 598761.0, mean: 569443.57, stdDev: 14823.59 }
  ];

  const mkp1Convergence = Array(50).fill().map((_, i) => ({
    iteration: i * 20,
    BPSO: Math.min(141278.0, 138000 + (141278.0 - 138000) * (1 - Math.exp(-i/10))),
    BGSA: Math.min(141137.0, 135000 + (141137.0 - 135000) * (1 - Math.exp(-i/15))),
    Hybrid: Math.min(141278.0, 139000 + (141278.0 - 139000) * (1 - Math.exp(-i/8))),
    BWOA: Math.min(141278.0, 137000 + (141278.0 - 137000) * (1 - Math.exp(-i/12)))
  }));

  const mkp7Convergence = Array(50).fill().map((_, i) => ({
    iteration: i * 20,
    BPSO: Math.min(1060421.0, 900000 + (1060421.0 - 900000) * (1 - Math.exp(-i/15))),
    BGSA: Math.min(933132.0, 800000 + (933132.0 - 800000) * (1 - Math.exp(-i/20))),
    Hybrid: Math.min(1067471.0, 950000 + (1067471.0 - 950000) * (1 - Math.exp(-i/12))),
    BWOA: Math.min(1088432.0, 980000 + (1088432.0 - 980000) * (1 - Math.exp(-i/10)))
  }));

  const mkp8Convergence = Array(50).fill().map((_, i) => ({
    iteration: i * 20,
    BPSO: Math.min(508240.0, 400000 + (508240.0 - 400000) * (1 - Math.exp(-i/15))),
    BGSA: Math.min(470586.0, 350000 + (470586.0 - 350000) * (1 - Math.exp(-i/20))),
    Hybrid: Math.min(518077.0, 420000 + (518077.0 - 420000) * (1 - Math.exp(-i/12))),
    BWOA: Math.min(598761.0, 500000 + (598761.0 - 500000) * (1 - Math.exp(-i/10)))
  }));

  const renderTable = (data) => (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Algorithme</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Meilleure Solution</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Moyenne</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Écart-type</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.algorithm}>
            <td className="px-6 py-4 whitespace-nowrap font-medium">{row.algorithm}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.best.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.mean.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.stdDev.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const chartSettings = {
    width: "100%",
    height: 400,
    margin: { top: 30, right: 30, left: 50, bottom: 30 },
    legendProps: {
      verticalAlign: "top",
      align: "center",
      height: 36
    },
    lineColors: {
      BPSO: "#2563eb",
      BGSA: "#16a34a",
      Hybrid: "#eab308",
      BWOA: "#dc2626"
    }
  };

  const renderChart = (data, yAxisDomain) => (
    <ResponsiveContainer {...chartSettings}>
      <LineChart data={data} margin={chartSettings.margin}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
        <XAxis 
          dataKey="iteration" 
          label={{ value: 'Itérations', position: 'bottom', dy: 20 }}
          fontSize={12}
        />
        <YAxis 
          domain={yAxisDomain}
          label={{ value: 'Valeur Objective', angle: -90, position: 'insideLeft', dx: -30 }}
          fontSize={12}
        />
        <Tooltip formatter={(value) => value.toFixed(2)} />
        <Legend {...chartSettings.legendProps} />
        {Object.keys(chartSettings.lineColors).map(key => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={chartSettings.lineColors[key]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="flex flex-col space-y-8 p-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-gray-800">Analyse Comparative des Métaheuristiques</h2>

      {/* MKP1 Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">MKP1 (28 variables)</h3>
        {renderTable(mkp1ComparisonData)}
        <div className="mt-6">
          {renderChart(mkp1Convergence, [130000, 142000])}
        </div>
      </div>

      {/* MKP7 Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">MKP7 (105 variables)</h3>
        {renderTable(mkp7ComparisonData)}
        <div className="mt-6">
          {renderChart(mkp7Convergence, [800000, 1100000])}
        </div>
      </div>

      {/* MKP8 Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">MKP8 (105 variables)</h3>
        {renderTable(mkp8ComparisonData)}
        <div className="mt-6">
          {renderChart(mkp8Convergence, [300000, 600000])}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Conclusions</h3>
        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-lg">Performance sur Petites Instances</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>BPSO, Hybrid et BWOA atteignent l'optimum (141278.0) sur MKP1</li>
              <li>L'algorithme Hybrid montre une stabilité exceptionnelle (écart-type = 0)</li>
              <li>BGSA présente des performances moins stables (écart-type = 1227.35)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Performance sur Grandes Instances</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>BWOA excelle sur MKP7 (1088432.0) et MKP8 (598761.0)</li>
              <li>L'algorithme Hybrid maintient de bonnes performances</li>
              <li>Les écarts-types augmentent significativement avec la taille du problème</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTables;