
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
    <div className="text-center mb-8 md:mb-10">
      <h1 className="mb-4 md:mb-6">
        <span className="block text-3xl md:text-5xl font-dancing text-[#a8a27a] mb-1 md:mb-2">
          {brideNameKz}
        </span>
      </h1>
      
      <div className="bg-[#a8a27a]/10 p-3 md:p-6 rounded-lg border border-[#a8a27a]/30 inline-block">
        <p className="flex items-center justify-center text-xs md:text-base mb-1 md:mb-2">
          <Calendar className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-[#a8a27a]" /> {date}
        </p>
        <p className="font-montserrat font-semibold text-sm md:text-lg">{venue}</p>
        <p className="text-xs md:text-base">{time}</p>
      </div>
    </div>
  );
};

export default WeddingHeader;
