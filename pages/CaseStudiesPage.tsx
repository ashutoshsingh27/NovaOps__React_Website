import React from 'react';
import { CASE_STUDIES } from '../constants';
import { Heading, Section } from '../components/Common';
import { ArrowUpRight } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Section className="pt-16 pb-12">
        <div className="text-center">
          <Heading level={1}>Case Studies</Heading>
          <p className="text-slate-400 text-lg">Real results from real deployments.</p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-secondary border border-slate-800 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-slate-600 transition-all">
              <div className="w-full md:w-2/5 relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-slate-800 text-accent px-3 py-1 rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-accent font-medium mb-4">{study.client} • <span className="text-green-400">{study.result}</span></p>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {study.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold group-hover:text-accent transition-colors w-max">
                  Read Full Case Study <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default CaseStudiesPage;