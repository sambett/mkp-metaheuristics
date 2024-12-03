export const InfoCard = ({ title, items, variant = 'default' }) => {
    const variants = {
      default: 'bg-white',
      info: 'bg-blue-50',
      success: 'bg-green-50',
      warning: 'bg-yellow-50'
    };
  
    return (
      <div className={`${variants[variant]} rounded-xl shadow-lg p-6`}>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          {title}
        </h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start"
            >
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };