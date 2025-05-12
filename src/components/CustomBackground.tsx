
import React from 'react';

const CustomBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#f9f6e9] relative overflow-hidden">
      {/* Background ornament pattern */}
      <div className="ornament-pattern fixed inset-0 w-full h-full opacity-40 -z-10"></div>
      
      {/* Side ornaments */}
      <div className="ornament-sides fixed inset-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-contain bg-left bg-repeat-y ornament-left"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-contain bg-right bg-repeat-y ornament-right"></div>
      </div>
      
      {/* Top and bottom ornaments */}
      <div className="ornament-top fixed top-0 left-0 right-0 h-24 md:h-32 bg-contain bg-top bg-repeat-x ornament-top-border -z-10"></div>
      <div className="ornament-bottom fixed bottom-0 left-0 right-0 h-24 md:h-32 bg-contain bg-bottom bg-repeat-x ornament-bottom-border -z-10"></div>
      
      <div className="container max-w-4xl mx-auto pt-8 md:pt-12 pb-12 md:pb-16 px-4 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CustomBackground;
