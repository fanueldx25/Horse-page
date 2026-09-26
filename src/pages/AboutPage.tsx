import React, { useEffect } from 'react';
import { useEstate } from '../lib/estateContext';
import { Check } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { settings } = useEstate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 animate-in fade-in duration-500 space-y-24">
      
      {/* 1. HEADER / INTRO */}
      <section className="max-w-3xl space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#A89472] font-medium">
          About Us
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#20201E] font-normal leading-tight">
          {settings.about_heading || settings.business_name}
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#20201E] font-normal leading-relaxed">
          {settings.about_subtitle || 'Quality Horses. Honest Service. Thoughtful Matching.'}
        </p>
        <p className="text-sm sm:text-base text-[#73716B] leading-relaxed font-light">
          {settings.about_lead_1 || `Based in Houston, Texas, ${settings.business_name} is dedicated to connecting buyers with quality horses while providing a professional, transparent, and straightforward purchasing experience.`}
        </p>
        {settings.about_lead_2 && (
          <p className="text-sm sm:text-base text-[#73716B] leading-relaxed font-light">
            {settings.about_lead_2}
          </p>
        )}
      </section>

      {/* 2. OUR STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A89472] font-medium">
            Our Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#20201E] font-normal">
            {settings.about_story_heading || 'A personal, informed, and trustworthy experience.'}
          </h2>
          <div className="space-y-4 text-sm text-[#73716B] leading-relaxed font-light">
            {settings.about_story_text_1 && <p>{settings.about_story_text_1}</p>}
            {settings.about_story_text_2 && <p>{settings.about_story_text_2}</p>}
            {settings.about_story_text_3 && <p>{settings.about_story_text_3}</p>}
            {settings.about_story_text_4 && <p>{settings.about_story_text_4}</p>}
          </div>
        </div>
        <div className="lg:col-span-6 aspect-[4/3] overflow-hidden bg-white border border-[#B7B0A4]/35 shadow-sm">
          <img
            src={settings.about_image_1 || "/images/hero.jpg"}
            alt="Estate Photography"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="bg-white border border-[#B7B0A4]/35 p-8 sm:p-14 lg:p-20">
        <div className="max-w-4xl space-y-6 mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A89472] font-medium text-center block">
            Our Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#20201E] font-normal text-center pb-8">
            {settings.about_values_heading || 'The principles that guide our work.'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
              <div className="flex items-center space-x-2 text-[#24362D]">
                <Check className="w-4 h-4 text-[#A89472]" />
                <h3 className="font-serif text-lg text-[#20201E]">{settings.about_value_1_title || 'Responsible Horsemanship'}</h3>
              </div>
              <p className="text-sm text-[#73716B] leading-relaxed font-light">
                {settings.about_value_1_text || 'We believe every horse should be treated with patience, care, and respect.'}
              </p>
            </div>
            
            <div className="p-5 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
              <div className="flex items-center space-x-2 text-[#24362D]">
                <Check className="w-4 h-4 text-[#A89472]" />
                <h3 className="font-serif text-lg text-[#20201E]">{settings.about_value_2_title || 'Honest Representation'}</h3>
              </div>
              <p className="text-sm text-[#73716B] leading-relaxed font-light">
                {settings.about_value_2_text || 'We aim to provide clear and accurate information about the horses we offer, including their current location.'}
              </p>
            </div>
            
            <div className="p-5 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
              <div className="flex items-center space-x-2 text-[#24362D]">
                <Check className="w-4 h-4 text-[#A89472]" />
                <h3 className="font-serif text-lg text-[#20201E]">{settings.about_value_3_title || 'The Right Match'}</h3>
              </div>
              <p className="text-sm text-[#73716B] leading-relaxed font-light">
                {settings.about_value_3_text || "We consider the buyer's experience, intended use, and expectations when helping them select a horse."}
              </p>
            </div>
            
            <div className="p-5 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
              <div className="flex items-center space-x-2 text-[#24362D]">
                <Check className="w-4 h-4 text-[#A89472]" />
                <h3 className="font-serif text-lg text-[#20201E]">{settings.about_value_4_title || 'Professional Service'}</h3>
              </div>
              <p className="text-sm text-[#73716B] leading-relaxed font-light">
                {settings.about_value_4_text || 'From the initial inquiry through viewing, purchase, and transportation, we strive to keep the process organized and clearly communicated.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR LOCATION & COMMITMENT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-6">
          <div className="aspect-[4/3] overflow-hidden bg-[#FAF9F6] border border-[#B7B0A4]/30 mb-6">
            <img
              src={settings.about_image_2 || "/images/about.jpg"}
              alt="Location Photography"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A89472] font-medium">
            Our Location
          </span>
          <h2 className="font-serif text-3xl text-[#20201E] font-normal">
            {settings.about_location_heading || 'Based in Houston, Texas'}
          </h2>
          <div className="space-y-4 text-sm text-[#73716B] font-light leading-relaxed">
            {settings.about_location_text_1 && <p>{settings.about_location_text_1}</p>}
            {settings.about_location_text_2 && <p>{settings.about_location_text_2}</p>}
          </div>
        </div>

        <div className="space-y-6">
          <div className="aspect-[4/3] overflow-hidden bg-[#FAF9F6] border border-[#B7B0A4]/30 mb-6">
            <img
              src={settings.about_image_3 || "/images/journal.jpg"}
              alt="Commitment Photography"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A89472] font-medium">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl text-[#20201E] font-normal">
            {settings.about_commitment_heading || 'More than just a transaction.'}
          </h2>
          <div className="space-y-4 text-sm text-[#73716B] font-light leading-relaxed">
            {settings.about_commitment_text_1 && <p>{settings.about_commitment_text_1}</p>}
            {settings.about_commitment_quote && (
              <p className="font-serif italic text-lg pt-4 whitespace-pre-line">
                {settings.about_commitment_quote}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="text-center bg-[#FAF9F6] border border-[#B7B0A4]/40 p-12 space-y-6 shadow-xs">
        <h2 className="font-serif text-3xl text-[#20201E] font-normal">
          {settings.about_cta_heading || 'Find your perfect match.'}
        </h2>
        <p className="text-sm text-[#73716B] max-w-md mx-auto font-light">
          {settings.about_cta_text || 'We welcome prospective owners to browse our available horses or contact us directly to discuss your specific needs.'}
        </p>
        <button
          onClick={() => onNavigate('/horses')}
          className="px-8 py-3 bg-[#24362D] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#1b2a22] transition-colors font-medium cursor-pointer"
        >
          View Available Horses
        </button>
      </section>
    </div>
  );
};
