
import React from 'react';
import { Calendar, Heart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface WeddingHeaderProps {
  brideNameKz: string;
  groomNameKz: string;
  brideNameRu: string;
  groomNameRu: string;
  date: string;
  venue: string;
  time: string;
}

const WeddingHeader = ({ 
  brideNameKz, 
  groomNameKz, 
  brideNameRu, 
  groomNameRu, 
  date, 
  venue,
  time 
}: WeddingHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-[#8B5D33] mb-2">ҚЫЗ ҰЗАТУ</h3>
        <div className="w-full max-w-xs mx-auto h-1 bg-[#8B5D33]"></div>
      </div>
      
      <h1 className="mb-6">
        <span className="block text-4xl md:text-6xl font-dancing text-[#8B5D33]">
          {brideNameKz}
        </span>
      </h1>
      
      <div className="bg-[#8B5D33]/10 p-4 md:p-6 rounded-lg border border-[#8B5D33]/30 inline-block">
        <p className="flex items-center justify-center text-xs md:text-base mb-2 md:mb-3">
          <Calendar className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-[#8B5D33]" /> {date}
        </p>
        <p className="font-montserrat font-semibold text-sm md:text-lg">{venue}</p>
        <p className="text-xs md:text-base">{time}</p>
      </div>
    </div>
  );
};

export default WeddingHeader;
