import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Frontend", skills: [
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
        ]
    },
    {
        category: "Backend", skills: [
            { name: "Node.js", level: 80 },
            { name: "Python", level: 85 },
            { name: "FastAPI", level: 75 },
            { name: "PostgreSQL", level: 70 },
        ]
    },
    {
        category: "Tools & DevOps", skills: [
            { name: "Git", level: 90 },
            { name: "Docker", level: 70 },
            { name: "Figma", level: 80 },
            { name: "Linux", level: 75 },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative bg-cyber-black/40">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-cyber-green">03.</span> Skills_&_Abilities
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My technical arsenal. Continuously expanding my knowledge base.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-cyber-gray/20 p-6 rounded-lg border border-gray-800 hover:border-cyber-green/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-cyber-cyan mb-6 border-b border-gray-700 pb-2">{category.category}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                                            <span className="text-xs font-mono text-cyber-green">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="bg-cyber-green h-1.5 rounded-full shadow-[0_0_10px_#0aff0a]"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
