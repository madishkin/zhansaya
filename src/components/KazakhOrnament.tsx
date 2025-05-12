
import React from 'react';

interface OrnamentProps {
  className?: string;
}

const KazakhOrnament = ({ className = "" }: OrnamentProps) => {
  return (
    <div className={`flex items-center justify-center my-6 md:my-10 ${className}`}>
      <div className="ornament-divider w-full max-w-md">
        <div className="kazakh-ornament-element"></div>
      </div>
    </div>
  );
};

export default KazakhOrnament;
