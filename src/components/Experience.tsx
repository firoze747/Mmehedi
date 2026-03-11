"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Graduate Research Assistant",
    company: "Bowling Green State University (USA)",
    location: "Ohio, USA",
    date: "Sep 2025 – Present",
    points: [
      "Research on AGV-assisted manufacturing, demand forecasting, and ML-driven automation; quantitative modeling, data analytics, and performance evaluation.",
      "Processed 2,000+ high-speed camera images per phase; image-based data analysis for mechanical system validation and reliability."
    ]
  },
  {
    role: "Jr Data Analyst",
    company: "The Analytics Team",
    location: "Dhaka, Bangladesh",
    date: "Sep 2022 – Apr 2023",
    points: [
      "Supported e-commerce and web analytics with Google Analytics; data collection, reporting, and insight generation for business and revenue analysis."
    ]
  },
  {
    role: "Digital Marketing Executive",
    company: "Coder Castle LLC",
    location: "Dhaka, Bangladesh",
    date: "Feb 2022 – Jun 2022",
    points: [
      "SEO, on-page optimization, and content planning to improve traffic and engagement."
    ]
  },
  {
    role: "Operations Associate – Manufacturing & Supply Chain",
    company: "Artificer (Handcrafted Décor Furniture Manufacturing)",
    location: "Dhaka, Bangladesh",
    date: "Nov 2020 – Oct 2021",
    points: [
      "Shift from import sourcing to in-house manufacturing post-COVID; raw material sourcing, design coordination, cost control, and quality–price optimization."
    ]
  },
  {
    role: "Executive – Office of Professional Development",
    company: "Bangladesh Youth Leadership Center",
    location: "Dhaka, Bangladesh",
    date: "Sep 2018 – Dec 2018",
    points: [
      "Career development workshops and student engagement for leadership and professional skills."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-secondary/20 relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 flex flex-col items-center text-center"
        >
          <div className="p-4 rounded-2xl glass mb-6 text-primary inline-block">
             <Briefcase className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Professional Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3 shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-4 border border-primary/20">
                     {exp.date}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-1 leading-tight">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-muted-foreground mb-1">{exp.company}</h4>
                  <span className="text-sm text-muted-foreground/60">{exp.location}</span>
                </div>
                
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-border/50 pt-6 md:pt-0 md:pl-10">
                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-[1.05rem] leading-relaxed text-muted-foreground/90 flex items-start group-hover:text-muted-foreground transition-colors">
                        <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,230,0.5)]"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
