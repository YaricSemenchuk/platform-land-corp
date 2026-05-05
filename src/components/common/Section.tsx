import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerClassName = '',
  id,
}) => {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
