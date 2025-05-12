
import React from 'react';

const CustomBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#f5f2e6] relative overflow-hidden">
      <div className="ornament-pattern fixed inset-0 w-full h-full opacity-25 -z-10"></div>
      <div className="ornament-sides fixed inset-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-contain bg-left bg-repeat-y ornament-left"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-contain bg-right bg-repeat-y ornament-right"></div>
      </div>
      <div className="container max-w-4xl mx-auto pt-6 md:pt-10 pb-10 md:pb-16 px-4 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CustomBackground;
