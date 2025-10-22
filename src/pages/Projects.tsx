import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies?: string[];
  fullDescription: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern shopping experience',
      technologies: ['React', 'Node.js', 'MongoDB'],
      fullDescription: 'A full-featured e-commerce platform with advanced filtering, secure payments, and real-time inventory management. Built with React and Node.js, featuring a responsive design and seamless user experience.'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand refresh',
      technologies: ['Illustrator', 'Photoshop', 'Figma'],
      fullDescription: 'Complete brand identity redesign for a tech startup, including logo, color palette, typography system, and comprehensive brand guidelines. The design reflects innovation and trustworthiness.'
    },
    {
      id: 3,
      title: 'Urban Landscapes',
      category: 'photography',
      image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cityscape photography series',
      technologies: ['Canon EOS R5', 'Lightroom', 'Photoshop'],
      fullDescription: 'A stunning collection of urban landscape photography capturing the essence of modern cities at golden hour. Shot across multiple metropolitan areas with focus on architecture and natural light.'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Artist portfolio showcase',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
      fullDescription: 'An elegant portfolio website for a visual artist, featuring smooth animations, lazy loading, and an intuitive gallery system. Optimized for performance and SEO.'
    },
    {
      id: 5,
      title: 'Marketing Campaign',
      category: 'design',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-channel campaign',
      technologies: ['Photoshop', 'Illustrator', 'InDesign'],
      fullDescription: 'Complete marketing campaign design including social media graphics, print materials, and web banners. Cohesive visual language across all touchpoints with high conversion rates.'
    },
    {
      id: 6,
      title: 'Portrait Series',
      category: 'photography',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional headshots',
      technologies: ['Sony A7III', 'Studio Lighting', 'Capture One'],
      fullDescription: 'Professional portrait photography for corporate clients and personal branding. Studio and on-location shoots with careful attention to lighting, composition, and post-processing.'
    },
    {
      id: 7,
      title: 'SaaS Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Analytics dashboard',
      technologies: ['React', 'TypeScript', 'D3.js'],
      fullDescription: 'Complex data visualization dashboard for a SaaS platform. Features real-time updates, interactive charts, and customizable widgets with a clean, modern interface.'
    },
    {
      id: 8,
      title: 'Product Photography',
      category: 'photography',
      image: 'https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Commercial product shoots',
      technologies: ['Nikon D850', 'Studio Setup', 'Lightroom'],
      fullDescription: 'High-end product photography for e-commerce and advertising. Careful attention to detail, perfect lighting, and post-processing to showcase products in their best light.'
    },
    {
      id: 9,
      title: 'Logo Collection',
      category: 'design',
      image: 'https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Logo design portfolio',
      technologies: ['Illustrator', 'Photoshop'],
      fullDescription: 'A collection of logo designs for various clients across different industries. Each logo tells a unique story and perfectly represents the brand identity and values.'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'Graphic Design' },
    { id: 'photography', label: 'Photography' }
  ];

  return (
    <div className="min-h-screen particle-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient">Projects</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-12"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            A showcase of my creative work across web development, graphic design, and photography.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer card-hover"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-cyan-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-400/30">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <span className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                    View
                  </button>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                {selectedProject.technologies && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
