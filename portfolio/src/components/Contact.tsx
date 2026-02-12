import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setFormStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 3 seconds
        setTimeout(() => setFormStatus('idle'), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyber-green/5 to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block p-2 rounded-full bg-cyber-green/10 mb-4">
                        <Mail className="text-cyber-green" size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <a href="mailto:Sharmaparikshit405@gmail.com" className="flex items-center gap-4 p-4 bg-cyber-gray/20 rounded-lg border border-gray-800 hover:border-cyber-green transition-all group">
                            <div className="p-3 bg-cyber-black rounded-full text-cyber-green group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Email</h4>
                                <p className="text-gray-400 text-sm">Send a signal</p>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/parikshit-sharma-619a0a33a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-cyber-gray/20 rounded-lg border border-gray-800 hover:border-cyber-cyan transition-all group">
                            <div className="p-3 bg-cyber-black rounded-full text-cyber-cyan group-hover:scale-110 transition-transform">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">LinkedIn</h4>
                                <p className="text-gray-400 text-sm">Connect professionally</p>
                            </div>
                        </a>

                        <a href="https://github.com/ElonCoding" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-cyber-gray/20 rounded-lg border border-gray-800 hover:border-cyber-purple transition-all group">
                            <div className="p-3 bg-cyber-black rounded-full text-cyber-purple group-hover:scale-110 transition-transform">
                                <Github size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">GitHub</h4>
                                <p className="text-gray-400 text-sm">Explore repositories</p>
                            </div>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-cyber-gray/10 p-8 rounded-lg border border-gray-800"
                    >
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-mono text-cyber-green mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-cyber-black border border-gray-800 rounded p-3 text-white focus:border-cyber-green focus:outline-none transition-colors" 
                                    placeholder="Name" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-cyber-green mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-cyber-black border border-gray-800 rounded p-3 text-white focus:border-cyber-green focus:outline-none transition-colors" 
                                    placeholder="Email" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-cyber-green mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-cyber-black border border-gray-800 rounded p-3 text-white focus:border-cyber-green focus:outline-none transition-colors h-32" 
                                    placeholder="Message content..." 
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className={`w-full py-3 rounded transition-all font-bold flex items-center justify-center gap-2 border ${
                                    formStatus === 'sent' 
                                    ? 'bg-cyber-green text-black border-cyber-green' 
                                    : 'bg-cyber-green/10 text-cyber-green border-cyber-green hover:bg-cyber-green hover:text-black'
                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {formStatus === 'idle' && (
                                    <>
                                        <Send size={18} /> Send_Transmission
                                    </>
                                )}
                                {formStatus === 'sending' && (
                                    <>
                                        <div className="w-5 h-5 border-2 border-cyber-green border-t-transparent rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                )}
                                {formStatus === 'sent' && (
                                    <>
                                        <CheckCircle2 size={18} /> Transmission_Received
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <footer className="mt-20 text-center text-gray-500 text-sm font-mono">
                    <p>&copy; {new Date().getFullYear()} Parikshit Sharma. All systems functional.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
