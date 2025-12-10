import React, { useState } from 'react';
import { Button, Heading, Section } from '../components/Common';
import { Calendar, Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  // Mock dates generator
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      day: d.getDate(),
      weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
      full: d,
    };
  });

  const times = [
    "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:30 PM", "04:30 PM"
  ];

  const confirmBooking = () => {
    setStep(3);
  };

  if (step === 3) {
    return (
       <Section className="min-h-[70vh] flex items-center justify-center">
         <div className="max-w-md w-full bg-secondary border border-slate-800 rounded-2xl p-8 text-center animate-pulse-once">
           <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
             <Check size={40} className="text-white" />
           </div>
           <Heading level={2}>Consultation Confirmed!</Heading>
           <p className="text-slate-400 mb-6">
             We have scheduled your discovery call for <span className="text-white font-semibold">{selectedTime}</span> on <span className="text-white font-semibold">{selectedDate && dates[selectedDate].full.toLocaleDateString()}</span>.
           </p>
           <p className="text-sm text-slate-500 mb-8">A calendar invitation has been sent to your email address.</p>
           <Button onClick={() => window.location.reload()} variant="outline">Return Home</Button>
         </div>
       </Section>
    );
  }

  return (
    <Section className="py-12">
      <div className="max-w-5xl mx-auto bg-secondary border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
        {/* Sidebar Info */}
        <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/50">
          <div className="sticky top-8">
            <span className="text-slate-400 text-sm font-semibold tracking-wider uppercase mb-2 block">NovaOps</span>
            <Heading level={2} className="mb-6">Discovery Call</Heading>
            <div className="flex items-center gap-3 text-slate-300 mb-4">
              <Clock size={18} className="text-accent" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 mb-8">
              <Calendar size={18} className="text-accent" />
              <span>Google Meet</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              In this call, we will discuss:
              <br/><br/>
              • Your current technical challenges<br/>
              • Potential AI & Cloud opportunities<br/>
              • Estimated roadmap & budget
            </p>
          </div>
        </div>

        {/* Calendar UI */}
        <div className="w-full md:w-2/3 p-8">
          <h3 className="text-xl font-bold text-white mb-6">Select a Date & Time</h3>
          
          {/* Date Scroller */}
          <div className="flex items-center justify-between mb-4">
             <button className="p-2 hover:bg-slate-800 rounded-full text-slate-400"><ChevronLeft size={20}/></button>
             <span className="text-slate-300 font-medium">
               {dates[0].full.toLocaleDateString('en-US', { month: 'long', year: 'numeric'})}
             </span>
             <button className="p-2 hover:bg-slate-800 rounded-full text-slate-400"><ChevronRight size={20}/></button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-8">
            {dates.slice(0, 14).map((d, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDate(idx)}
                className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                  selectedDate === idx 
                    ? 'bg-accent border-accent text-white shadow-lg' 
                    : 'bg-slate-800 border-transparent text-slate-400 hover:border-slate-600'
                }`}
              >
                <span className="text-xs uppercase font-bold">{d.weekday}</span>
                <span className="text-lg font-semibold">{d.day}</span>
              </button>
            ))}
          </div>

          {selectedDate !== null && (
            <div className="animate-fade-in">
              <h4 className="text-white font-medium mb-4">Available Times</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-lg text-sm border transition-all ${
                      selectedTime === time
                        ? 'bg-white text-primary border-white font-bold'
                        : 'text-slate-300 border-slate-700 hover:border-accent hover:text-accent'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedTime && (
            <div className="mt-8 pt-8 border-t border-slate-800 flex justify-end">
               <Button onClick={confirmBooking}>
                 Confirm Booking
               </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default BookingPage;