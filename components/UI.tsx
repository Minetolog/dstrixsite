import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, X } from 'lucide-react';
import { SectionProps, FeatureCardProps, AccordionItemProps } from '../types';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon = true,
  onClick,
  href
}) => {
  
  const baseStyle = "group relative overflow-hidden px-8 py-3 rounded-none text-sm font-medium tracking-widest uppercase transition-all duration-300 flex items-center gap-2 inline-flex justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border border-white",
    secondary: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5",
    outline: "bg-transparent text-white/70 border-b border-white/30 hover:text-white hover:border-white px-0 rounded-none",
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => (
  <section id={id} className={`relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24 ${className}`}>
    {children}
  </section>
);

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    transition={{ duration: 0.5, delay }}
    className="glass-panel p-8 border border-white/5 hover:border-white/20 transition-colors duration-500 group"
  >
    <div className="mb-6 text-white/50 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl text-white font-light tracking-wide mb-3">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-white/80 transition-colors"
        onClick={onClick}
      >
        <span className="text-lg font-light tracking-wide">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-white/50" /> : <ChevronDown className="w-5 h-5 text-white/50" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 font-light leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[80vh] bg-dstrix-card border border-white/10 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-xl font-medium tracking-wide text-white">{title}</h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light whitespace-pre-line">
                {content}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
