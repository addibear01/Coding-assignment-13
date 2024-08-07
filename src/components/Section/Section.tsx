import React from 'react';

type SectionProps = {
  variant: 'primary' | 'disabled';
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ variant, children }) => {
  const className = `section ${variant}`;
  return <section className={className}>{children}</section>;
};

export default Section;
