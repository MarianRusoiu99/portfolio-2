import React from 'react';

interface LoadingSkeletonProps {
  height?: string;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  height = "h-64", 
  className = "" 
}) => {
  return (
    <div className={`animate-pulse ${height} ${className}`}>
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    </div>
  );
};

export default LoadingSkeleton;
