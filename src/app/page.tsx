import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import EducationProjects from "@/components/EducationProjects";
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      {/* Sticky Top Nav / Header can go here if needed, but smooth scrolling is enough */}

      <Hero />
      <Experience />
      <Skills />
      <EducationProjects />
      
      {/* Premium Dark Glass Footer */}
      <footer id="contact" className="relative border-t border-border/40 py-20 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
            <div>
               <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
                 Let's Build the <br/> Future <span className="text-gradient">Together.</span>
               </h2>
               <p className="text-lg text-muted-foreground mb-8 max-w-md">
                 I'm always open to discussing new projects, creative ideas, or opportunities to be a part of your visions.
               </p>
               <a href="mailto:firoze747@gmail.com" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(0,255,230,0.2)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,230,0.4)] transition-all duration-300">
                  firoze747@gmail.com
               </a>
            </div>

            <div className="flex flex-col justify-center space-y-6">
               <div className="flex items-center gap-4 group">
                 <div className="p-4 rounded-xl glass text-blue-400 group-hover:scale-110 transition-transform">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Location</p>
                   <p className="text-lg font-medium">Bowling Green, Ohio, USA</p>
                 </div>
               </div>

               <a href="https://www.linkedin.com/in/firoze747" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer block">
                 <div className="p-4 rounded-xl glass text-[#0A66C2] group-hover:scale-110 group-hover:bg-[#0A66C2]/10 transition-all">
                   <Linkedin className="w-5 h-5" />
                 </div>
                 <div className="flex items-center gap-2">
                   <p className="text-lg font-medium group-hover:text-[#0A66C2] transition-colors">Connect on LinkedIn</p>
                   <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#0A66C2] transition-colors group-hover:-translate-y-1 group-hover:translate-x-1" />
                 </div>
               </a>

               <a href="https://github.com/firoze747" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer block">
                 <div className="p-4 rounded-xl glass text-foreground group-hover:scale-110 group-hover:bg-white/10 transition-all">
                   <Github className="w-5 h-5" />
                 </div>
                 <div className="flex items-center gap-2">
                   <p className="text-lg font-medium group-hover:text-foreground transition-colors">Follow on GitHub</p>
                   <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors group-hover:-translate-y-1 group-hover:translate-x-1" />
                 </div>
               </a>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground opacity-80">
              © {new Date().getFullYear()} Md Firoze Mehedi. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm font-medium text-muted-foreground">
               Designed with Next.js, Tailwind CSS & Framer Motion.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
