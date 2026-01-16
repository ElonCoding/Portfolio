import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code, Cpu, User, Mail, Layers } from 'lucide-react';

import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Terminal size={18} /> },
        { name: 'About', href: '#about', icon: <User size={18} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={18} /> },
        { name: 'Projects', href: '#projects', icon: <Code size={18} /> },
        { name: 'Experience', href: '#experience', icon: <Layers size={18} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav
            className={twMerge(
                'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-cyber-black/90 backdrop-blur-md border-cyber-green/30 py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo.png" alt="Parikshit Sharma" className="h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all duration-300" />
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-cyber-green hover:text-glow transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 group"
                                >
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyber-green text-xs">{'>'}</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-cyber-black/95 border-b border-cyber-green/30 backdrop-blur-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-cyber-green block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
