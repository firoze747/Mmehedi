"use client";

import { motion } from "framer-motion";
import { BarChart3, Settings, CodeSquare, Leaf } from "lucide-react";

const services = [
  {
    title: "Data Analysis & AI",
    description: "Computational Data Analysis, Image Analysis (Micro Particles), and ML-driven automation.",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    skills: ["Python", "R", "SQL", "High-Speed Camera Analysis"]
  },
  {
    title: "Supply Chain & Systems Integration",
    description: "Enhancing AI, Green Technology, and Digital Transformation capabilities in Supply Chain Management and Industrial Engineering.",
    icon: <Settings className="w-8 h-8 text-emerald-400" />,
    skills: ["MS Project", "Wireshark", "AutoCAD", "SolidWorks"]
  },
  {
    title: "Web & Digital Solutions",
    description: "Building content schemes, optimizing search engine presence, and developing structured technical solutions.",
    icon: <CodeSquare className="w-8 h-8 text-blue-400" />,
    skills: ["HTML", "Java", "SEO", "Digital Marketing"]
  },
  {
    title: "Operations & Leadership",
    description: "Leading transitions, overcoming supply chain disruptions, and coordinating cross-functional volunteer and operations teams.",
    icon: <Leaf className="w-8 h-8 text-purple-400" />,
    skills: ["Problem Solving", "Teamwork", "Manufacturing Ops"]
  }
];

export default function Skills() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Services & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging engineering principles and data-driven insights to solve complex industrial and digital challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass p-8 rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,255,230,0.1)] hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start gap-5 mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-secondary/80 border border-border group-hover:border-primary/30 transition-colors">
                  {service.icon}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground/90 leading-relaxed mb-8 relative z-10">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 rounded-lg bg-background text-foreground text-xs font-semibold border border-border group-hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
