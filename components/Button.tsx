import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-cosmic-violet text-white hover:bg-cosmic-cyan glow-violet focus:ring-cosmic-violet',
    secondary: 'bg-cosmic-cyan text-cosmic-night hover:bg-cosmic-violet glow-cyan focus:ring-cosmic-cyan',
    success: 'bg-cosmic-success text-white glow-green hover:shadow-lg focus:ring-cosmic-success',
    outline: 'border-2 border-cosmic-violet text-cosmic-violet hover:bg-cosmic-violet hover:text-white focus:ring-cosmic-violet',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
