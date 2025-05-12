
import React from 'react';
import CustomBackground from '@/components/CustomBackground';
import WeddingHeader from '@/components/WeddingHeader';
import KazakhOrnament from '@/components/KazakhOrnament';
import RSVPForm from '@/components/RSVPForm';
import PhotoGallery from '@/components/PhotoGallery';
import { useIsMobile } from '@/hooks/use-mobile';
import { Heart } from 'lucide-react';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <CustomBackground>
      <div className="bg-[#f9f6e9]/90 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-[#8B5D33]/30">
        <WeddingHeader 
          brideNameKz="Аида" 
          groomNameKz=""
          brideNameRu="Аида" 
          groomNameRu=""
          date="15 Июля 2023"
          venue="Мейрамханасы 'SANDYQ TAU'"
          time="18:00"
        />
        
        <div className="text-center my-8">
          <h2 className="text-xl md:text-3xl font-serif text-[#333333] mb-4">ҚҰРМЕТТI АҒАЙЫН-ТУЫС,</h2>
          <p className="mb-2 text-sm md:text-base text-[#333333] font-medium">БАУЫРЛАР, НАҒАШЫЛАР,</p>
          <p className="mb-2 text-sm md:text-base text-[#333333] font-medium">ҚҰДА-ЖЕКЖАТ,</p>
          <p className="mb-2 text-sm md:text-base text-[#333333] font-medium">ДОС-ЖАРАНДАР,</p>
          <p className="mb-6 text-sm md:text-base text-[#333333] font-medium">КӨРШІЛЕР ЖӘНЕ ӘРІПТЕСТЕР!</p>
          
          <p className="text-base md:text-lg text-[#333333]">СIЗДЕРДI АЯУЛЫ</p>
          <p className="text-base md:text-lg text-[#333333] mb-6">НЕМЕРЕ-ҚЫЗЫМЫЗ</p>
          
          <div className="flex justify-center mb-6">
            <h3 className="text-3xl md:text-5xl font-dancing text-[#8B5D33]">Аида</h3>
          </div>
          
          <p className="text-base md:text-lg text-[#333333] mb-8">ҚЫЗ ҰЗАТУ ТОЙЫНА АРНАЛҒАН САЛТАНАТТЫ АС</p>
        </div>
        
        <KazakhOrnament className="my-10" />
        
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-8">
            <p className="text-lg md:text-2xl font-medium text-[#333333] mb-2">МЕРКI АУДАНЫ,</p>
            <p className="text-lg md:text-2xl font-medium text-[#333333]">САРЫМОЛДАЕВ КӨШЕСI, 132</p>
            <p className="text-xl md:text-3xl font-medium text-[#8B5D33] my-4">"SANDYQ TAU"</p>
            <p className="text-lg md:text-2xl font-medium text-[#333333]">МЕЙРАМХАНАСЫ</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <Heart className="text-[#8B5D33] h-10 w-10 md:h-12 md:w-12" />
          </div>
          
          <div className="mb-8 italic font-dancing text-2xl md:text-4xl text-[#8B5D33]">
            Той бағдарламасы
          </div>
          
          <div className="flex flex-col items-start max-w-xs mx-auto mb-10">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 rounded-full bg-[#8B5D33] mr-4"></div>
              <div>
                <p className="text-[#333333]">ҚОНАҚТАРДЫҢ ЖИНАЛУЫ</p>
                <p className="text-3xl font-medium text-[#333333]">18:00</p>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-[#8B5D33] ml-2"></div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#8B5D33] mr-4"></div>
              <div>
                <p className="text-[#333333]">ТОЙДЫҢ БАСТАЛУЫ</p>
                <p className="text-3xl font-medium text-[#333333]">18:30</p>
              </div>
            </div>
          </div>
        </div>
        
        <KazakhOrnament />
        
        <PhotoGallery />
        
        <KazakhOrnament />
        
        <div className="py-4">
          <RSVPForm />
        </div>
      </div>
    </CustomBackground>
  );
};

export default Index;
