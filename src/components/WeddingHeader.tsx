
import React from 'react';
import { Calendar, Heart } from 'lucide-react';

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
  return (
    <div className="text-center mb-10">
      <h1 className="mb-6">
        <span className="block text-3xl md:text-5xl font-dancing text-kazakh-blue mb-2">
          {brideNameKz} <span className="text-kazakh-red">&</span> {groomNameKz}
        </span>
        <span className="block text-xl md:text-2xl font-montserrat text-kazakh-darkBlue">
          {brideNameRu} <Heart className="inline-block mx-1 text-kazakh-red h-4 w-4" /> {groomNameRu}
        </span>
      </h1>
      
      <div className="bg-kazakh-gold/10 p-6 rounded-lg border border-kazakh-gold/30 inline-block">
        <p className="flex items-center justify-center text-sm md:text-base mb-2">
          <Calendar className="mr-2 h-4 w-4 text-kazakh-gold" /> {date}
        </p>
        <p className="font-montserrat font-semibold text-base md:text-lg">{venue}</p>
        <p className="text-sm md:text-base">{time}</p>
      </div>
    </div>
  );
};

export default WeddingHeader;
