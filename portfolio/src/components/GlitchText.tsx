import React from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-purple opacity-0 group-hover:opacity-100 group-hover:animate-glitch translate-x-[2px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-cyan opacity-0 group-hover:opacity-100 group-hover:animate-glitch translate-x-[-2px] animation-delay-75">
                {text}
            </span>
        </div>
    );
};

export default GlitchText;
