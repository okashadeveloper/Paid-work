import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  const experiences = [
    { year: '2025 - Present', role: 'Web Developer', company: 'Tech Innovations Inc.' },
    { year: '2024 - 2025', role: 'Lead Designer', company: 'Creative Studios' },
    { year: '2023 - 2024', role: 'Freelance Photographer', company: 'Self-Employed' }
  ];

  const stats = [
    { label: 'Experience', value: '1+', desc: 'Years of expertise' },
    { label: 'Projects', value: '25+', desc: 'Successfully delivered' },
    { label: 'Awards', value: '20', desc: 'Industry recognitions' }
  ];

  return (
    <div className="min-h-screen particle-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient">About Me</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="blob:https://web.whatsapp.com/ed15686b-8cea-4988-a9e9-d749f58c52b1"
                alt="About Profile"
                className="rounded-2xl w-full h-[500px] object-cover border-4 border-cyan-400/30 glow-effect"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full opacity-20 blur-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Karachi, PK</span>
            </div>

            <h2 className="text-3xl font-bold">I'm Farhan Ali </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a passionate and creative web developer, graphic designer, and video editor from Karachi, Pakistan, with over a year of hands-on experience in the digital world. I love turning ideas into clean, functional, and visually appealing designs that tell a story and leave a lasting impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey began with a simple curiosity for how things work online — from visuals to code. Over time, that curiosity turned into a deep interest in web technologies, design, and editing. I enjoy combining creativity with logic to craft meaningful user experiences that stand out.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond work, I’m always exploring new tools, trends, and creative outlets. Whether it’s experimenting with a new design style, improving my coding skills, or learning something completely different, I believe growth comes from staying curious and never stopping the learning process.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-xl font-bold mb-2">Oakland School</h3>
                <p className="text-gray-400">Foundation for future academic and professional</p>
                <p className="text-gray-300 mt-2">success.</p>
              </div>
              <div className="border-l-4 border-fuchsia-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Bachelor of Business Administration(BBA)</h3>
                <p className="text-gray-400">Focus on Business Administration and Management, Expected Completion General.</p>
                <p className="text-gray-300 mt-2">Expected Completion April 2025 - July 2029</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 border border-cyan-400/30 px-4 py-2 rounded-full text-sm text-cyan-400 whitespace-nowrap">
                    {exp.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </div>
  );
}
