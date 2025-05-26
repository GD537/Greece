
import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const LoadingSpinner: React.FC<SVGProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }} 
    width="50px" 
    height="50px" 
    viewBox="0 0 100 100" 
    preserveAspectRatio="xMidYMid"
    {...props} // Spread props to allow className, etc.
  >
    <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="currentColor" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
    </circle>
  </svg>
);
