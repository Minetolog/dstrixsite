import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}