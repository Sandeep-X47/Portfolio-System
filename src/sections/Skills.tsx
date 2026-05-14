"use client";

import { useEffect, useRef } from "react";

const skills = ["Python", "C++", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "AI/ML", "FastAPI", "System Design"];

export default function Skills() {
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
    <section id="skills" className="relative min-h-screen text-white px-24 py-32 overflow-hidden" style={{background: "radial-gradient(ellipse at 70% 30%, #050d1f 0%, #000000 70%)"}}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none z-0" style={{background: "radial-gradient(circle, rgba(37,99,255,0.06) 0%, transparent 70%)", filter: "blur(50px)"}} />
      <div className="relative z-10">
        <p className="text-[#2563FF] tracking-[0.3em] mb-8 text-sm font-medium">SKILLS</p>
        <h2 className="text-6xl font-bold mb-16 text-white">Technical Arsenal.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="rounded-2xl px-6 py-8 text-center text-[#94A3B8] hover:text-white transition-all duration-300 cursor-default hover:scale-105" style={{border: "1px solid rgba(37,99,255,0.2)", background: "rgba(37,99,255,0.05)", boxShadow: "0 0 20px rgba(37,99,255,0.05)"}}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}