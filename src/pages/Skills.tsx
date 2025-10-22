import { motion } from 'framer-motion';
import { Code2, Palette, Camera, Laptop, Smartphone, Layers, Figma, Aperture } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: Code2,
      color: 'cyan',
      skills: [
        { name: 'React & TypeScript', level: 95 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 98 },
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'Mango DB', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'REST APIs', level: 90 },
        { name: 'Git & GitHub', level: 93 }
      ]
    },
    {
      title: 'Graphic Design',
      icon: Palette,
      color: 'fuchsia',
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 92 },
        { name: 'Figma & Sketch', level: 90 },
        { name: 'Brand Identity', level: 88 },
        { name: 'UI/UX Design', level: 93 },
        { name: 'Typography', level: 90 },
        { name: 'Color Theory', level: 95 },
        { name: 'Print Design', level: 85 }
      ]
    },
    {
      title: 'Photography',
      icon: Camera,
      color: 'emerald',
      skills: [
        { name: 'Portrait Photography', level: 95 },
        { name: 'Landscape Photography', level: 92 },
        { name: 'Adobe Lightroom', level: 98 },
        { name: 'Photo Retouching', level: 93 },
        { name: 'Studio Lighting', level: 88 },
        { name: 'Event Photography', level: 90 },
        { name: 'Product Photography', level: 87 },
        { name: 'Color Grading', level: 92 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: Laptop },
    { name: 'Figma', icon: Figma },
    { name: 'Photoshop', icon: Layers },
    { name: 'Camera Gear', icon: Aperture },
    { name: 'Mobile Dev', icon: Smartphone }
  ];

  return (
    <div className="min-h-screen particle-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-12"></div>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            A comprehensive blend of technical proficiency, creative design skills, and artistic vision
            built over years of dedicated practice and professional experience.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 bg-${category.color}-400/10 rounded-xl`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-400`} />
                </div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.05 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold">{skill.name}</span>
                      <span className={`text-${category.color}-400 font-bold`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.05 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${
                          category.color === 'cyan'
                            ? 'from-cyan-400 to-cyan-600'
                            : category.color === 'fuchsia'
                            ? 'from-fuchsia-400 to-fuchsia-600'
                            : 'from-emerald-400 to-emerald-600'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 min-w-[140px] card-hover"
              >
                <tool.icon className="w-10 h-10 text-cyan-400" />
                <span className="text-sm font-semibold">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always expanding my skillset and staying up-to-date with the latest industry trends,
            tools, and best practices. Currently exploring AI integration, advanced animation techniques,
            and emerging web technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
