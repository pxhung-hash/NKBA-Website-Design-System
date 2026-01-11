import React from 'react';

interface NKBAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function NKBAButton({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children,
  ...props 
}: NKBAButtonProps) {
  const baseStyles = 'transition-colors font-medium border-0';
  
  const variantStyles = {
    primary: 'bg-[#003366] text-white hover:bg-[#004488]',
    accent: 'bg-[#990000] text-white hover:bg-[#BB0000]',
    outline: 'bg-transparent text-[#003366] border-2 border-[#003366] hover:bg-[#003366] hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
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
}
