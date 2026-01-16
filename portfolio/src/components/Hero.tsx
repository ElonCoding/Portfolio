
import { Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import Typewriter from './Typewriter';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="absolute inset-0 z-0">
                {/* Optional: additional hero-specific background elements could go here */}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-block bg-cyber-black/50 backdrop-blur-sm border border-cyber-green/30 p-2 rounded-lg"
                >
                    <div className="flex items-center gap-2 text-cyber-green font-mono text-sm">
                        <Terminal size={16} />
                        <span>System.initialize(User.Profile)</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white"
                >
                    <GlitchText text="PARIKSHIT" />
                    <span className="block mt-2 md:mt-0 text-cyber-gray-light">
                        <GlitchText text="SHARMA" className="text-cyber-cyan" />
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-400 mb-8 font-mono h-16"
                >
                    <Typewriter
                        text={[
                            "Full Stack Developer",
                            "AI Enthusiast",
                            "Problem Solver",
                            "Cybersecurity Advocate"
                        ]}
                        infinite={true}
                        delay={80}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a href="#projects" className="group relative px-8 py-3 bg-transparent border border-cyber-green text-cyber-green font-mono hover:bg-cyber-green hover:text-black transition-all duration-300 rounded overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2 font-bold">
                            View_Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-cyber-green/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    <a href="#contact" className="group relative px-8 py-3 bg-transparent border border-cyber-purple text-cyber-purple font-mono hover:bg-cyber-purple hover:text-white transition-all duration-300 rounded overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2 font-bold">
                            Contact_Me
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyber-green/50"
            >
                <span className="text-xs font-mono">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-green/0 via-cyber-green to-cyber-green/0"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
