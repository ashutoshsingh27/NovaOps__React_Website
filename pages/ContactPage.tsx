import React, { useState } from 'react';
import { Button, Heading, Input, Section, TextArea } from '../components/Common';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center text-center">
        <div className="bg-secondary p-12 rounded-2xl border border-slate-800 animate-fade-in max-w-lg">
          <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare size={32} />
          </div>
          <Heading level={2}>Message Sent!</Heading>
          <p className="text-slate-400 mb-6">Thank you for contacting NovaOps. Our team will review your inquiry and get back to you within 24 hours.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="pt-16 pb-8">
        <Heading level={1} className="text-center">Get In Touch</Heading>
        <p className="text-center text-slate-400 max-w-xl mx-auto">
          Ready to start your project? Fill out the form below or contact us directly.
        </p>
      </Section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-secondary p-8 rounded-xl border border-slate-800">
              <Heading level={3}>Contact Information</Heading>
              <div className="space-y-6 mt-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-slate-400">hello@novaops.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-slate-400">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-accent/20 to-secondary border border-accent/20">
               <h3 className="text-white font-bold mb-2">Looking to join the team?</h3>
               <p className="text-slate-400 text-sm mb-4">We are always looking for talented DevOps engineers and AI specialists.</p>
               <a href="#" className="text-accent hover:text-white font-semibold text-sm">View Careers &rarr;</a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-secondary p-8 md:p-10 rounded-2xl border border-slate-800 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                  <Input placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                  <Input placeholder="Doe" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <Input type="email" placeholder="john@company.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Service Interest</label>
                <select className="w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                  <option>AI Automation</option>
                  <option>Cloud Operations</option>
                  <option>DevOps / CI/CD</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <TextArea rows={5} placeholder="Tell us about your project..." required />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;