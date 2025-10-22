import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const professions = ['Web Developer', 'Graphic Designer', 'Photographer'];
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentProfession = professions[professionIndex];

      if (!isDeleting && charIndex < currentProfession.length) {
        setText(currentProfession.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentProfession.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentProfession.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setProfessionIndex((professionIndex + 1) % professions.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, professionIndex]);

  return (
    <div className="min-h-screen particle-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400/30 glow-effect">
              <img
                src="/farhan.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-20 blur-xl"
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Farhan Ali </span>
            </h1>
            <div className="text-2xl sm:text-3xl text-gray-400 mb-6 h-10">
              <span className="text-cyan-400">{text}</span>
              <span className="animate-pulse-glow">|</span>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              I craft stunning digital experiences through code, design, and imagery.
              With a passion for creativity and innovation, I bring ideas to life across
              web development, graphic design, and photography.
            </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto lg:mx-0 glow-effect"
              >
                More About Me
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Code2,
              title: 'Web Development',
              description: 'Building responsive, modern web applications with cutting-edge technologies.',
              link: '/skills',
              color: 'cyan'
            },
            {
              icon: Palette,
              title: 'Graphic Design',
              description: 'Creating visually stunning designs that capture attention and communicate effectively.',
              link: '/projects',
              color: 'fuchsia'
            },
            {
              icon: Camera,
              title: 'Photography',
              description: 'Capturing moments and telling stories through professional photography.',
              link: '/projects',
              color: 'emerald'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="card-hover"
            >
              <Link to={item.link}>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300">
                  <item.icon className={`w-12 h-12 text-${item.color}-400 mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Quick Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '25+', label: 'Projects Completed' },
              { number: '1+', label: 'Years Experience' },
              { number: '15+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex justify-center gap-4 mt-16"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-full font-semibold transition-all"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
