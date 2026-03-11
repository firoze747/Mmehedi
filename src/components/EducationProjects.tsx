"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Logistics Systems Engineering",
    school: "Bowling Green State University (USA)",
    date: "Aug 2025 – Present"
  },
  {
    degree: "Master of Science in IT, Systems and Management",
    school: "Washington University of Science and Technology (USA)",
    date: "Jul 2023 – Jun 2025"
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    school: "Daffodil International University (Bangladesh)",
    date: "May 2018 – Apr 2023"
  }
];

const volunteer = [
  {
    role: "Senator - Graduate Student Senate",
    organization: "Bowling Green State university",
    date: "Aug 2025 - Present"
  },
  {
    role: "Executive",
    organization: "Chintar Chash (Voluntary Research Organization)",
    date: "Jun 2016 - Apr 2020"
  },
  {
    role: "Joint Secretary",
    organization: "Daffodil International University Model UN Association",
    date: "Jun 2018 - Jan 2020"
  },
  {
    role: "Executive",
    organization: "Debate For Humanity",
    date: "Jun 2016 - Apr 2020"
  }
];

export default function EducationProjects() {
  return (
    <section id="education" className="py-32 relative">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-32 relative z-10">
        
        {/* Education Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-center gap-4"
          >
            <div className="p-3 glass rounded-xl text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Academic Journey</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass relative overflow-hidden group hover:border-primary/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all">{edu.degree}</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{edu.school}</p>
                <div className="mt-auto">
                   <span className="inline-block px-4 py-1.5 bg-background border border-border text-foreground text-xs font-bold rounded-full">
                     {edu.date}
                   </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer/Leadership Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-center gap-4"
          >
            <div className="p-3 glass rounded-xl text-blue-400">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Leadership & Community</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {volunteer.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-colors flex items-start gap-4"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500/50 flex-shrink-0"></div>
                <div>
                   <h3 className="text-lg font-bold text-foreground mb-1">{item.role}</h3>
                   <p className="text-muted-foreground text-sm mb-3">{item.organization}</p>
                   <span className="text-xs text-muted-foreground/60 font-medium font-mono">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
