export const Card = ({ children, className = '' }) => {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
        {children}
      </div>
    );
  };