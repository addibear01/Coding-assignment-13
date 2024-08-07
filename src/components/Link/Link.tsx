import React from 'react';

type LinkProps = {
  variant: 'primary' | 'black' | 'blue' | 'hover' | 'disabled';
  href: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ variant, href, children }) => {
  const className = `link ${variant}`;
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
