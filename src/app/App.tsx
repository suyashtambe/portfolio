import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Cloud, Wrench } from 'lucide-react';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const skills = [
    { name: 'Programming & Backend', icon: Code2, items: ['Python', 'SQL', 'Java', 'REST APIs', 'Git/GitHub', 'Linux', 'Flask'] },
    { name: 'AI/ML', icon: Brain, items: ['Machine Learning', 'Deep Learning', 'NLP', 'PyTorch', 'CNNs', 'Transformers', 'GPT-2'] },
    { name: 'MLOps & Big Data', icon: Wrench, items: ['CI/CD', 'Hadoop', 'Spark', 'PySpark', 'MLlib', 'Model Versioning', 'Monitoring'] },
    { name: 'Cloud & Infrastructure', icon: Cloud, items: ['AWS', 'Google Cloud', 'Deployment', 'Logging', 'HDFS'] },
  ];

  const projects = [
    {
      title: 'Renewable Energy MLOps Pipeline',
      description: 'Built a production-oriented MLOps pipeline automating data processing, model training, evaluation, versioning, and deployment using CI/CD practices. Implemented experiment tracking, monitoring, and structured documentation for reliability, reproducibility, and scalability of ML workflows.',
      image: 'https://images.unsplash.com/photo-1511378245014-916b726f774b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHdpbmR8ZW58MXx8fHwxNzcwNzkwMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['MLOps', 'Python', 'CI/CD', 'Cloud'],
      link: 'https://github.com/suyashtambe/renewable-energy-mlops',
    },
    {
      title: 'Anti-Money Laundering Detection',
      description: 'Designed and implemented a distributed AML detection system using HDFS for large-scale data storage and Apache Spark for parallel data processing of transactional datasets. Built end-to-end Spark ETL workflows, including data cleaning, feature engineering, and dataset integration. Trained and optimized a Random Forest model using Spark MLlib, achieving 92.3% accuracy and 0.87 AUC, and deployed via Flask REST API for real-time prediction.',
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwYW5hbHl0aWNzJTIwbW9uZXl8ZW58MXx8fHwxNzcwODE5NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Hadoop', 'Spark', 'PySpark', 'MLlib', 'Flask'],
      link: '#',
    },
    {
      title: 'Proof Vision - DeepFake Detector',
      description: 'Engineered a full-stack system for deepfake video and audio detection, demonstrating end-to-end understanding of system architecture. Integrated multiple technologies across backend, ML inference, and cloud deployment for effective large-scale troubleshooting.',
      image: 'https://images.unsplash.com/photo-1653836592221-9e85949e71a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwZmFrZSUyMEFJJTIwZGV0ZWN0aW9ufGVufDF8fHx8MTc3MDgxNzI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Java', 'AWS', 'PostgreSQL'],
      link: 'https://github.com/suyashtambe/deepfakevideo',
    },
    {
      title: 'AI Quote Generator',
      description: 'Built an exciting quote generator combining machine learning text generation techniques using the GPT-2 model. Trained a custom GPT-2 model for over 72 hours on a large quotes dataset. The model accepts input tags describing the desired quote and generates personalized quotes. Created with React frontend and Python backend. Planning to incorporate a hybrid model of GPT-2 and RNN for enhanced performance.',
      image: 'https://images.unsplash.com/photo-1569229418947-25d933730929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdW90ZXMlMjBpbnNwaXJhdGlvbiUyMHRleHQlMjB3cml0aW5nfGVufDF8fHx8MTc3MDgxOTY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['GPT-2', 'NLP', 'React', 'Python'],
      link: 'https://github.com/suyashtambe/Image-captionz',
    },
    {
      title: 'Secure ML Inference using OP-TEE',
      description: 'Solved an industrial problem focused on secure and verifiable ML inference in Trusted Execution Environments. Embedded a Logistic Regression model into OP-TEE Trusted Application with CA-TA communication and ZKP verification. Built and compiled Trusted Applications with secure runtime testing in QEMU.',
      image: 'https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZW5jcnlwdGlvbiUyMGxvY2t8ZW58MXx8fHwxNzcwODE3MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['OP-TEE', 'ML', 'Security', 'CDAC'],
      link: 'https://www.linkedin.com/posts/suyashtambe',
    },
    {
      title: 'Sketch2Photo using Pix2Pix GAN',
      description: 'Developed a Sketch-to-Photo Generation System using Pix2Pix GAN, transforming hand-drawn sketches into realistic images. Built a full-stack web application with React frontend and Flask backend. Implemented U-Net generator and PatchGAN discriminator using PyTorch.',
      image: 'https://images.unsplash.com/photo-1640894822819-0a94bec464bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2glMjBkcmF3aW5nJTIwYXJ0fGVufDF8fHx8MTc3MDgxNzI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['PyTorch', 'GAN', 'React', 'Flask'],
      link: 'https://github.com/suyashtambe/sketch-to-photo',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Portfolio</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mb-6 animate-pulse-slow">
            <div className="bg-slate-900 rounded-full p-1">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl">
                ST
              </div>
            </div>
          </div>
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Suyash Tambe</h2>
          <p className="text-xl text-slate-300 mb-6">AI/ML Engineer & Full Stack Developer</p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Final year B.Tech student in Artificial Intelligence and Machine Learning at Symbiosis Institute of Technology, Pune. 
            Backed by solid knowledge in backend development, system design thinking, MLOps, and data-driven applications. 
            I have built capital complete machine learning and backend projects integrated with APIs, automated workflows, and scalable architectures across tech stacks. 
            My focus is mainly on large, scale reliability, performance, and framework, level issues, and I'm keen on evolving into a system, level engineer in a high-impact, mission, ethical environment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0" onClick={() => window.location.href = 'mailto:suyashtambe03@gmail.com'}>
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button variant="outline" className="gap-2 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400" onClick={() => window.open('https://github.com/suya-htambe', '_blank')}>
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400" onClick={() => window.open('https://www.linkedin.com/in/suyashtambe/', '_blank')}>
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={category.name} className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition">
                      <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <h4 className="font-semibold text-slate-200">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-2 text-slate-100">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition"
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</h3>
          <div className="space-y-6">
            <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="font-semibold text-slate-100">Backend Developer Intern</h4>
                  <p className="text-slate-400">Seven Square</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Current</span>
                  <p className="text-slate-500 text-sm">Jan 2025 - Present</p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside">
                <li>Developing and maintaining backend services and APIs</li>
                <li>Working on scalable server-side applications and database management</li>
                <li>Collaborating with the development team on system architecture and optimization</li>
              </ul>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="font-semibold text-slate-100">Developer</h4>
                  <p className="text-slate-400">Janhvi Foundation - NGO in Pune</p>
                </div>
                <p className="text-slate-500 text-sm">July 2024 - Dec 2024</p>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside">
                <li>Designed and launched a scalable web platform for Janhvi Foundation using Next.js, Express, and SQL, with optimized deployment on AWS for high performance and rapid loading</li>
                <li>Boosted community engagement by integrating detailed welfare scheme information, enhancing user accessibility and increasing awareness</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Let's Work Together</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0" onClick={() => window.location.href = 'mailto:suyashtambe03@gmail.com'}>
              <Mail className="w-4 h-4" />
              suyashtambe03@gmail.com
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400" onClick={() => window.open('https://www.linkedin.com/in/suyashtambe/', '_blank')}>
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400" onClick={() => window.open('https://github.com/suyashtambe', '_blank')}>
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 relative z-10">
        <p className="text-slate-400 text-center">© 2026 Suyash Tambe. All rights reserved.</p>
      </footer>
    </div>
  );
}
