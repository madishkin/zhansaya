
import React from 'react';
import CustomBackground from '@/components/CustomBackground';
import WeddingHeader from '@/components/WeddingHeader';
import KazakhOrnament from '@/components/KazakhOrnament';
import RSVPForm from '@/components/RSVPForm';

const Index = () => {
  return (
    <CustomBackground>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-lg border border-kazakh-gold/20">
        <WeddingHeader 
          brideNameKz="Айнұр" 
          groomNameKz="Айдар"
          brideNameRu="Айнур" 
          groomNameRu="Айдар"
          date="15 Июля 2023"
          venue="Ресторан 'Алтын Сарай'"
          time="16:00"
        />
        
        <KazakhOrnament />
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-dancing text-kazakh-blue mb-4">Дорогие гости!</h2>
          <p className="mb-3 text-kazakh-darkBlue">Мы рады пригласить вас на торжество по случаю нашего бракосочетания.</p>
          <p className="mb-3 text-kazakh-darkBlue">Будем счастливы разделить с вами этот особенный день.</p>
          <p className="font-medium text-kazakh-blue">С уважением, Айнур и Айдар</p>
        </div>
        
        <KazakhOrnament />
        
        <div className="py-4">
          <RSVPForm />
        </div>
      </div>
    </CustomBackground>
  );
};

export default Index;
