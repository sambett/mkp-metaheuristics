export const StatsGrid = ({ items }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-lg font-semibold text-gray-800 mb-2">
              {item.label}
            </div>
            <div className="text-3xl font-bold text-blue-600">
              {item.value}
            </div>
            {item.description && (
              <div className="mt-2 text-sm text-gray-500">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  