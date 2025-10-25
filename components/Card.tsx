import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white dark:bg-cosmic-night/50 rounded-lg p-6',
    elevated: 'bg-white dark:bg-cosmic-night/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition',
    bordered: 'bg-transparent border border-cosmic-cyan/20 rounded-lg p-6 hover:border-cosmic-cyan/50 transition',
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
