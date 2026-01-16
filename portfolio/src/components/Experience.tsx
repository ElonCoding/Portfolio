import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        title: "Frontend Developer",
        company: "Freelance",
        period: "Present",
        description: "Developing responsive and user-friendly interfaces for web applications.",
        tech: ["React", "Next.js", "Tailwind CSS"]
    },
    {
        title: "Hackathon Management Head",
        company: "CodingEra!",
        period: "Past",
        description: "Organizing and managing hackathons for students and professionals.",
        tech: ["Communication", "Team Management", "Event Planning"]
    },
    {
        title: "Graphic Designer",
        company: "Freelance",
        period: "Various",
        description: "Creating visually appealing and engaging designs for various projects.",
        tech: ["Photoshop", "Canva", "Figma"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-cyber-black/40">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-cyber-green">05.</span> Experience_Log
                    </h2>
                </motion.div>

                <div className="relative border-l border-gray-800 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-cyber-green shadow-[0_0_10px_#0aff0a]"></div>

                            <div className="md:grid md:grid-cols-5 gap-8">
                                <div className="col-span-1 mb-2 md:mb-0 md:text-right">
                                    <span className="text-sm font-mono text-cyber-cyan flex items-center justify-start md:justify-end gap-2">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="col-span-4 bg-cyber-gray/10 p-6 rounded-lg border border-gray-800 hover:border-cyber-purple/50 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                                        <Briefcase size={18} className="text-cyber-purple" />
                                        {exp.title}
                                    </h3>
                                    <p className="text-lg text-cyber-green mb-4">{exp.company}</p>
                                    <p className="text-gray-400 mb-4">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map(t => (
                                            <span key={t} className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
