import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { AppView, Service } from '../types';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Button, Heading, Section } from '../components/Common';

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

const ServiceCardPreview: React.FC<{ service: Service; onClick: () => void }> = ({ service, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-secondary p-6 rounded-xl border border-slate-800 hover:border-accent hover:translate-y-[-4px] transition-all cursor-pointer group"
  >
    <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
      <service.icon className="text-accent group-hover:scale-110 transition-transform" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-slate-400 mb-4 line-clamp-2">{service.description}</p>
    <div className="flex items-center text-accent text-sm font-medium">
      Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-highlight/10 rounded-full blur-[120px] -z-10" />

        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-sm text-accent font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Now accepting new enterprise clients for Q4
          </div>
          <Heading level={1} className="text-white leading-tight">
            Scale Faster with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
              AI Agents & Cloud Native
            </span> Solutions
          </Heading>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            NovaOps helps businesses automate workflows, optimize cloud infrastructure, and deploy intelligent systems that drive real growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button onClick={() => onNavigate(AppView.BOOKING)}>
              Start Your Transformation <ArrowRight size={18} />
            </Button>
            <Button variant="outline" onClick={() => onNavigate(AppView.CASE_STUDIES)}>
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-slate-900/50">
        <div className="text-center mb-16">
          <Heading level={2}>Our Expertise</Heading>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We blend cutting-edge AI with robust cloud engineering to deliver end-to-end solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCardPreview 
              key={service.id} 
              service={service} 
              onClick={() => onNavigate(AppView.SERVICES)} 
            />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading level={2}>Why Leading Companies Trust NovaOps</Heading>
            <p className="text-slate-400 mb-8">
              We don't just write code; we architect solutions that align with your business goals. Our results-driven approach ensures ROI from day one.
            </p>
            <div className="space-y-4">
              {[
                "Certified AWS & Azure Solutions Architects",
                "Proprietary AI Agent Frameworks",
                "24/7 Monitoring & Incident Response",
                "Agile Development with Weekly Sprints"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-500/10 p-1 rounded-full">
                    <CheckCircle2 size={20} className="text-green-500" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-highlight opacity-20 blur-2xl -z-10 rounded-full" />
            <div className="bg-secondary border border-slate-700 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-700 pb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Zap size={24} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Speed to Market</h4>
                  <p className="text-slate-400 text-sm">Deploy MVP in weeks, not months.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-slate-700 pb-6">
                 <div className="bg-violet-500/20 p-3 rounded-lg">
                  <CheckCircle2 size={24} className="text-violet-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Reliability</h4>
                  <p className="text-slate-400 text-sm">99.99% Uptime SLA Guarantee.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <ArrowRight size={24} className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Scalability</h4>
                  <p className="text-slate-400 text-sm">Infrastructure that grows with you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-secondary/30">
        <Heading level={2} className="text-center mb-12">Client Success Stories</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-primary border border-slate-800 p-6 rounded-xl">
               <div className="flex items-center gap-4 mb-4">
                 <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                 <div>
                   <h4 className="font-bold text-white">{t.name}</h4>
                   <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                 </div>
               </div>
               <p className="text-slate-300 italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <div className="bg-gradient-to-r from-accent to-highlight rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-accent/20">
          <Heading level={2} className="text-white mb-6">Ready to Automate & Scale?</Heading>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join the future of business operations. Schedule a free discovery call to discuss your needs.
          </p>
          <Button variant="secondary" onClick={() => onNavigate(AppView.BOOKING)}>
            Book Free Consultation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;