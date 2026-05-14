"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "DevHub",
    description: "AI-powered developer workspace for hackathon collaboration.",
    tag: "Productivity · Developer Tools",
    href: "https://github.com/dhirajsrinivas/workos-backend",
  },
  {
    title: "InsightFace",
    description: "Intelligent grooming system powered by AI and facial analysis.",
    tag: "AI · Computer Vision",
    href: "https://github.com/Praveen-Mariappasamy/Hairstyle-Predictor",
  },
  {
    title: "Portfolio System",
    description: "Luxury personal brand and digital identity platform.",
    tag: "Frontend · Design",
    href: "https://github.com/Sandeep-X47/Portfolio-System",
  },
];

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 1.2 + 0.3, opacity: Math.random() * 0.4 + 0.1 });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,255,${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="projects" className="relative min-h-screen text-white px-24 py-32 overflow-hidden" style={{background: "radial-gradient(ellipse at 40% 70%, #050d1f 0%, #000000 70%)"}}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full pointer-events-none z-0" style={{background: "radial-gradient(circle, rgba(37,99,255,0.06) 0%, transparent 70%)", filter: "blur(50px)"}} />
      <div className="relative z-10">
        <p className="text-[#2563FF] tracking-[0.3em] mb-8 text-sm font-medium">PROJECTS</p>
        <h2 className="text-6xl font-bold mb-20 text-white">Selected Work.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl p-8 transition-all duration-300 hover:scale-105 group flex flex-col justify-between" style={{border: "1px solid rgba(37,99,255,0.2)", background: "rgba(37,99,255,0.04)", boxShadow: "0 0 30px rgba(37,99,255,0.05)"}}>
              <div>
                <span className="text-xs tracking-widest text-[#2563FF] uppercase mb-4 block">{project.tag}</span>
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#2563FF] transition-colors duration-300">{project.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{project.description}</p>
              </div>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-2 text-[#2563FF] text-sm font-medium hover:gap-4 transition-all duration-300 w-fit">
                <span>View Project</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}