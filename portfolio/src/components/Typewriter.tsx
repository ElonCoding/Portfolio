import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string | string[];
    delay?: number;
    infinite?: boolean;
    className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 100, infinite = false, className = '' }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const strings = Array.isArray(text) ? text : [text];
        const currentString = strings[currentStringIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentIndex < currentString.length) {
                    setCurrentText(prev => prev + currentString[currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                } else if (infinite) {
                    setIsDeleting(true);
                }
            } else {
                if (currentIndex > 0) {
                    setCurrentText(prev => prev.slice(0, -1));
                    setCurrentIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentStringIndex(prev => (prev + 1) % strings.length);
                }
            }
        }, isDeleting ? delay / 2 : delay);

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, currentStringIndex, text, delay, infinite]);

    return (
        <span className={`${className} font-mono`}>
            {currentText}
            <span className="animate-pulse text-cyber-green">_</span>
        </span>
    );
};

export default Typewriter;
