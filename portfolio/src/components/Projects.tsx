import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: "Tech-Med-Aids-prototype",
        description: "A prototype for medical aid technology, focusing on accessibility and healthcare solutions.",
        tags: ["Python", "AI/ML", "Prototype"],
        links: { github: "https://github.com/ElonCoding/Tech-Med-Aids-prototype", demo: "#" }
    },
    {
        title: "Fake-Banking-APKs-Detector",
        description: "Security tool to detect fraudulent banking applications and protect user data.",
        tags: ["Cybersecurity", "Android", "Java"],
        links: { github: "https://github.com/ElonCoding/Fake-Banking-APKs-Detector", demo: "#" }
    },
    {
        title: "FACECOM",
        description: "Facial recognition communication system for enhanced security and interaction.",
        tags: ["Computer Vision", "Python", "OpenCV"],
        links: { github: "https://github.com/ElonCoding/FACECOM", demo: "#" }
    },
    {
        title: "VitalAi-Project",
        description: "AI-driven health monitoring system providing vital statistics analysis.",
        tags: ["AI", "HealthTech", "Data Science"],
        links: { github: "https://github.com/ElonCoding/VitalAi-Project", demo: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
                        <span className="text-cyber-green">04.</span>
                        Featured_Projects
                        <span className="h-px flex-grow bg-gray-800 ml-4"></span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-cyber-gray/20 rounded-lg overflow-hidden border border-gray-800 hover:border-cyber-green/50 transition-all duration-300"
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <Folder size={40} className="text-cyber-green" />
                                    <div className="flex gap-4">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-green transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 font-light">{project.description}</p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/ElonCoding" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-cyber-green text-cyber-green hover:bg-cyber-green/10 transition-colors font-mono rounded">
                        View Full Project Archive
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
