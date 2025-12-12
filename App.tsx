import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Disc, 
  Globe, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Menu, 
  X,
  Lock,
  ChevronDown
} from 'lucide-react';
import { SECTIONS, getAccessLink, MAILTO_EMAIL } from './constants';
import BackgroundScene from './components/Scene';
import { Button, Section, FeatureCard, AccordionItem, FadeIn, Modal } from './components/UI';
import { translations, Language } from './translations';

// --- Header Component ---
interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = translations[lang].nav;

  // Generate dynamic links based on translation keys
  const navItems = [
    { name: t.philosophy, href: '#philosophy' },
    { name: t.services, href: '#services' },
    { name: t.process, href: '#process' },
    { name: t.faq, href: '#faq' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'az', label: 'AZ' },
    { code: 'de', label: 'DE' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const scrollPosition = window.scrollY + 200; // Trigger offset
      let current = '';

      for (const sectionId of SECTIONS) {
        const el = document.getElementById(sectionId);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
             current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-panel border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo(0,0)} className="text-2xl font-bold tracking-[0.2em] text-white select-none z-50">
          DSTRIX
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs uppercase tracking-widest transition-colors duration-300 relative ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Language Selector */}
          <div className="relative ml-4">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="text-xs font-medium uppercase tracking-widest flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              {lang.toUpperCase()} <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 bg-black border border-white/10 rounded-sm p-2 flex flex-col gap-1 w-20 shadow-xl"
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`text-xs text-left px-2 py-1 uppercase tracking-widest hover:bg-white/10 transition-colors ${
                        lang === l.code ? 'text-white font-bold' : 'text-gray-500'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button variant="primary" className="py-2 px-6 text-xs" href={getAccessLink()}>
            {t.request}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 min-h-screen bg-black/95 border-b border-white/10 p-6 md:hidden flex flex-col pt-24 gap-6 z-40"
          >
            {navItems.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg uppercase tracking-widest ${
                  activeSection === link.href.substring(1) ? 'text-white font-medium' : 'text-gray-400'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex gap-4 py-4 border-t border-white/10">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-sm uppercase tracking-widest px-3 py-1 border ${
                    lang === l.code ? 'border-white text-white' : 'border-white/20 text-gray-500'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <Button variant="primary" className="w-full justify-center" href={getAccessLink()}>
              {t.request}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Footer Component ---
interface FooterProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ lang, onOpenPrivacy, onOpenTerms }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;
  
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-[0.2em] mb-6">DSTRIX</h2>
            <p className="text-gray-500 max-w-sm font-light">
              {t.desc}
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">{t.platform}</h4>
            <ul className="space-y-4">
              <li><a href="#philosophy" className="text-gray-500 hover:text-white transition-colors text-sm">{navT.philosophy}</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-white transition-colors text-sm">{navT.services}</a></li>
              <li><a href="#process" className="text-gray-500 hover:text-white transition-colors text-sm">{navT.process}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">{t.legal}</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={onOpenPrivacy} className="text-gray-500 hover:text-white transition-colors text-sm text-left">
                  {t.privacy}
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="text-gray-500 hover:text-white transition-colors text-sm text-left">
                  {t.terms}
                </button>
              </li>
              <li><a href={`mailto:${MAILTO_EMAIL}`} className="text-gray-500 hover:text-white transition-colors text-sm">{t.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} DSTRIX Distribution. {t.rights}</p>
          <a href={`mailto:${MAILTO_EMAIL}`} className="text-xs text-gray-600 hover:text-white mt-4 md:mt-0 transition-colors">
            {MAILTO_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const t = translations[lang];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-dstrix-black text-white selection:bg-white selection:text-black font-sans">
      <BackgroundScene />
      <Header lang={lang} setLang={setLang} />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-dstrix-black/90 pointer-events-none" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              key={`hero-${lang}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-widest text-gray-300">{t.hero.badge}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
                {t.hero.title_line1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                  {t.hero.title_line2}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 font-light mb-10 max-w-md leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href={getAccessLink()}>{t.hero.cta_primary}</Button>
                <Button 
                  variant="secondary" 
                  icon={false} 
                  href="#services"
                  className="border-0 pl-0 hover:bg-transparent hover:text-gray-300 hover:border-0 hover:translate-x-2 transition-transform"
                >
                  {t.hero.cta_secondary} &rarr;
                </Button>
              </div>
            </motion.div>

            {/* 3D Placeholder for visual balance on Mobile */}
            <motion.div 
              style={{ opacity }}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vh] pointer-events-none"
            >
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-50"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
          </motion.div>
        </section>

        {/* PHILOSOPHY / ABOUT */}
        <Section id="philosophy" className="border-t border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <FadeIn>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t.philosophy.label}</h2>
                <h3 className="text-3xl md:text-4xl font-light leading-tight">
                  {t.philosophy.title} <br />
                  <span className="text-white/40">{t.philosophy.subtitle}</span>
                </h3>
              </FadeIn>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-medium">{t.philosophy.card1_title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {t.philosophy.card1_desc}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-medium">{t.philosophy.card2_title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {t.philosophy.card2_desc}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* SERVICES */}
        <Section id="services" className="bg-dstrix-dark/50 backdrop-blur-md">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t.services.label}</h2>
              <h3 className="text-4xl font-light">{t.services.title}</h3>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title={t.services.cards.dist.title}
              description={t.services.cards.dist.desc}
              icon={<Disc size={32} strokeWidth={1} />}
              delay={0.1}
            />
            <FeatureCard 
              title={t.services.cards.analytics.title}
              description={t.services.cards.analytics.desc}
              icon={<BarChart3 size={32} strokeWidth={1} />}
              delay={0.2}
            />
            <FeatureCard 
              title={t.services.cards.rights.title}
              description={t.services.cards.rights.desc}
              icon={<ShieldCheck size={32} strokeWidth={1} />}
              delay={0.3}
            />
            <FeatureCard 
              title={t.services.cards.marketing.title}
              description={t.services.cards.marketing.desc}
              icon={<Zap size={32} strokeWidth={1} />}
              delay={0.4}
            />
            <div className="glass-panel p-8 border border-white/5 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-colors bg-white/5">
              <h3 className="text-2xl font-light mb-4">{t.services.cards.cta.title}</h3>
              <Button variant="secondary" href={getAccessLink()}>{t.services.cards.cta.button}</Button>
            </div>
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section id="process">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t.process.label}</h2>
                <h3 className="text-4xl font-light">{t.process.title}</h3>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2 hidden md:block" />

              <div className="space-y-12">
                {t.process.steps.map((step, idx) => (
                  <FadeIn key={idx} delay={idx * 0.2}>
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-full md:w-1/2 text-center md:text-right p-6">
                        {idx % 2 !== 0 ? (
                           <div className="text-left">
                              <h4 className="text-2xl font-light mb-2">{step.title}</h4>
                              <p className="text-gray-400">{step.desc}</p>
                           </div>
                        ) : (
                          <div className="md:text-right text-left">
                             <h4 className="text-2xl font-light mb-2">{step.title}</h4>
                             <p className="text-gray-400">{step.desc}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="relative z-10 w-8 h-8 rounded-full bg-black border border-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>

                      <div className="w-full md:w-1/2 p-6 hidden md:block"></div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
               <Button variant="primary" href={getAccessLink()}>{t.process.cta}</Button>
            </div>
          </div>
        </Section>

        {/* TRUST / LOGOS */}
        <Section className="border-y border-white/5 bg-white/[0.02]">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold tracking-tighter">Spotify</span>
             <span className="text-xl font-bold tracking-tighter">Apple Music</span>
             <span className="text-xl font-bold tracking-tighter">TikTok</span>
             <span className="text-xl font-bold tracking-tighter">YouTube Music</span>
             <span className="text-xl font-bold tracking-tighter">Amazon Music</span>
             <span className="text-xl font-bold tracking-tighter">Tidal</span>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t.faq.label}</h2>
              <h3 className="text-3xl font-light mb-6">{t.faq.title}</h3>
              <p className="text-gray-400 mb-8">
                {t.faq.contact} <br />
                <a href={`mailto:${MAILTO_EMAIL}`} className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">{t.faq.link}</a>
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-2">
                {t.faq.items.map((item, idx) => (
                  <AccordionItem 
                    key={idx}
                    question={item.q}
                    answer={item.a}
                    isOpen={activeAccordion === idx}
                    onClick={() => toggleAccordion(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CTA BOTTOM */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
           <FadeIn>
             <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 whitespace-pre-line">
               {t.cta_bottom.title}
             </h2>
             <Button variant="primary" className="mx-auto" href={getAccessLink()}>{t.cta_bottom.button}</Button>
           </FadeIn>
        </section>
      </main>

      <Footer 
        lang={lang} 
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenTerms={() => setLegalModal('terms')}
      />

      <Modal 
        isOpen={legalModal === 'privacy'} 
        onClose={() => setLegalModal(null)}
        title={t.legal_docs.privacy_title}
        content={t.legal_docs.privacy_content}
      />
      <Modal 
        isOpen={legalModal === 'terms'} 
        onClose={() => setLegalModal(null)}
        title={t.legal_docs.terms_title}
        content={t.legal_docs.terms_content}
      />
    </div>
  );
}

export default App;
