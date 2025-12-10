import React from 'react';
import { Heading, Section } from '../components/Common';
import { Users, Target, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Section className="pt-16 pb-12 text-center">
        <Heading level={1}>About NovaOps</Heading>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          We are a team of engineers, data scientists, and cloud architects dedicated to building the autonomous enterprise of the future.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           <div className="bg-secondary p-8 rounded-xl border border-slate-800 text-center hover:border-accent transition-colors">
              <div className="bg-slate-900 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 text-accent">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-400">
                To democratize access to enterprise-grade AI and cloud infrastructure, enabling businesses of all sizes to compete globally.
              </p>
           </div>
           <div className="bg-secondary p-8 rounded-xl border border-slate-800 text-center hover:border-accent transition-colors">
              <div className="bg-slate-900 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 text-accent">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Who We Are</h3>
              <p className="text-slate-400">
                Founded in 2023, we've rapidly grown into a powerhouse of technical talent, serving clients across FinTech, Healthcare, and Retail.
              </p>
           </div>
           <div className="bg-secondary p-8 rounded-xl border border-slate-800 text-center hover:border-accent transition-colors">
              <div className="bg-slate-900 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 text-accent">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
              <p className="text-slate-400">
                Transparency, Security First, and relentless Innovation. We treat your infrastructure as if it were our own.
              </p>
           </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://picsum.photos/600/400?random=8" 
              alt="Our Office Team" 
              className="rounded-xl shadow-2xl border border-slate-700"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <Heading level={2}>Building the Future, Together</Heading>
            <p className="text-slate-400">
              Technology moves fast. Keeping up with AI advancements, security patches, and cloud best practices is a full-time job. That's where we come in.
            </p>
            <p className="text-slate-400">
              Our team operates as an extension of yours. Whether you need a fractional CTO, a dedicated DevOps team, or a one-off AI implementation, we have the expertise to deliver.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;