import React from 'react';
import { SERVICES } from '../constants';
import { AppView } from '../types';
import { Button, Heading, Section } from '../components/Common';
import { Check } from 'lucide-react';

const ServicesPage: React.FC<{ onNavigate: (view: AppView) => void }> = ({ onNavigate }) => {
  return (
    <>
      <Section className="bg-secondary/30 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Heading level={1}>Our Services</Heading>
          <p className="text-slate-400 text-lg">
            Comprehensive technology solutions designed to modernize your operations and drive efficiency through AI and Cloud innovation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image/Visual Placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-50" />
                  <service.icon size={80} className="text-slate-600 group-hover:text-accent transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur px-4 py-2 rounded-lg text-xs font-mono text-accent border border-slate-700">
                    {service.id.toUpperCase()}_MODULE_ACTIVE
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <service.icon className="text-accent" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {service.description} We leverage industry best practices to ensure secure, scalable, and maintainable implementations tailored to your specific infrastructure needs.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <Check size={18} className="text-green-500 flex-shrink-0" />
                       <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button onClick={() => onNavigate(AppView.CONTACT)}>
                    Inquire About {service.title}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section className="bg-slate-900/50 text-center py-20">
         <Heading level={2}>Not sure what you need?</Heading>
         <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
           Our team offers comprehensive audits to identify bottlenecks and opportunities for automation in your current stack.
         </p>
         <Button variant="outline" onClick={() => onNavigate(AppView.BOOKING)}>
           Schedule an Audit
         </Button>
      </Section>
    </>
  );
};

export default ServicesPage;