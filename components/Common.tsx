import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-accent hover:bg-accentHover text-white shadow-lg shadow-accent/20",
    secondary: "bg-white text-primary hover:bg-slate-200",
    outline: "border-2 border-slate-600 text-slate-200 hover:border-accent hover:text-accent",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input 
    className={`w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${className}`} 
    {...props} 
  />
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className = '', ...props }) => (
  <textarea 
    className={`w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${className}`} 
    {...props} 
  />
);

export const Heading: React.FC<{ children: React.ReactNode; level?: 1 | 2 | 3; className?: string }> = ({ children, level = 2, className = '' }) => {
  const styles = {
    1: "text-4xl md:text-6xl font-bold tracking-tight mb-6",
    2: "text-3xl md:text-4xl font-bold tracking-tight mb-4",
    3: "text-xl md:text-2xl font-semibold mb-3",
  };
  
  // Fix: Use React.ElementType to resolve "Cannot find namespace 'JSX'" and construction errors
  const Tag = `h${level}` as React.ElementType;
  
  return <Tag className={`${styles[level]} ${className}`}>{children}</Tag>;
};