import { motion } from 'framer-motion';
import { User, Cpu, Code, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-cyber-green">&lt;</span>About Me<span className="text-cyber-green">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-cyber-green mx-auto shadow-[0_0_10px_#0aff0a]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-cyber-gray/30 p-1 rounded-lg border border-cyber-green/20 backdrop-blur-md">
                            <div className="aspect-square bg-[#0a0a0a] rounded-lg overflow-hidden flex items-center justify-center border border-gray-800 relative">
                                <img src="/hats.jpeg" className="w-full h-full object-cover opacity-80 hover:mix-blend-normal transition-all duration-500" />
                                <div className="absolute bottom-4 left-4 p-4 border-l-2 border-cyber-green">
                                    <p className="text-cyber-cyan font-mono text-sm">Target: Parikshit Sharma</p>
                                    <p className="text-gray-400 text-xs">Role: Full Stack Developer</p>
                                </div>
                            </div>
                        </div>
                        {/* Decoration */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyber-purple opacity-50"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyber-cyan opacity-50"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-gray-300"
                    >
                        <div className="bg-cyber-gray/20 p-6 rounded-lg border border-cyber-green/10 hover:border-cyber-green/40 transition-colors duration-300">
                            <p className="text-lg leading-relaxed font-light">
                                "A person who wants to learn and upskill itself as well as contribute as much."
                            </p>
                            <br />
                            <p>
                                I am a passionate developer with a strong focus on building scalable web applications and exploring the frontiers of Artificial Intelligence. My journey involves deep dives into React, Node.js, and Python, constantly pushing the boundaries of what's possible in the browser and beyond.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-cyber-black border border-gray-800 rounded hover:border-cyber-green/50 transition-colors group">
                                <Code className="text-cyber-green mb-2 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-white">Frontend</h3>
                                <p className="text-sm text-gray-500">React, Next.js, Tailwind</p>
                            </div>
                            <div className="p-4 bg-cyber-black border border-gray-800 rounded hover:border-cyber-purple/50 transition-colors group">
                                <Cpu className="text-cyber-purple mb-2 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-white">Backend</h3>
                                <p className="text-sm text-gray-500">Node, Python, FastAPI</p>
                            </div>
                            <div className="p-4 bg-cyber-black border border-gray-800 rounded hover:border-cyber-cyan/50 transition-colors group">
                                <Globe className="text-cyber-cyan mb-2 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-white">Deploy</h3>
                                <p className="text-sm text-gray-500">Docker, AWS, Vercel</p>
                            </div>
                            <div className="p-4 bg-cyber-black border border-gray-800 rounded hover:border-pink-500/50 transition-colors group">
                                <User className="text-pink-500 mb-2 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-white">Learning</h3>
                                <p className="text-sm text-gray-500">Always adapting</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
