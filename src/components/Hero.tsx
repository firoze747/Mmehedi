"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Brain, Code, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="Hero Background" 
          fill 
          className="object-cover object-top opacity-50 blur-[8px] scale-110"
          priority
        />
        <div className="absolute inset-0 bg-background/60 bg-gradient-to-b from-background/40 to-background/90" />
      </div>

      {/* Decorative gradient glowing orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container relative z-10 px-4 pt-32 pb-20 mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/30 bg-emerald-400/10"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            <span className="text-3xl sm:text-4xl text-muted-foreground font-medium block mb-2">Welcome Aboard, This is</span>
            <span className="text-gradient">Md Firoze Mehedi</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
            Graduate Researcher · Logistics Systems Engineer · Advancing Industry Through AI & Smart Technology
          </p>

          <p className="text-lg text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
            The world has enough people tearing things down. I'm here to optimize, sustain, and rebuild — bridging <strong className="text-foreground font-semibold">Computer Science</strong> and <strong className="text-foreground font-semibold">Supply Chain Management</strong> to create systems that actually make life better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_rgba(0,255,230,0.3)] hover:shadow-[0_0_30px_rgba(0,255,230,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              Let's Build Together
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl glass glass-hover px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 text-primary" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right side stats / image placeholder area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="flex flex-col gap-6 w-full max-w-[280px] mx-auto lg:mx-0 lg:max-w-[400px]"
        >
          {/* Main Photo Card */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass p-2 w-full">
            <div className="w-full h-full rounded-2xl bg-secondary/80 flex items-center justify-center relative overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpeg"
                alt="Md Firoze Mehedi"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
             <div className="glass p-4 rounded-2xl flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-none">AI & ML</h4>
                  <p className="text-xs text-muted-foreground">Focus</p>
                </div>
             </div>
             <div className="glass p-4 rounded-2xl flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-none">2</h4>
                  <p className="text-xs text-muted-foreground">Masters Degrees</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
