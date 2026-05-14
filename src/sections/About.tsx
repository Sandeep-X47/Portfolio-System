"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" className="relative min-h-screen text-white px-24 py-32 flex items-center overflow-hidden" style={{background: "radial-gradient(ellipse at 30% 60%, #050d1f 0%, #000000 70%)"}}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full pointer-events-none z-0" style={{background: "radial-gradient(circle, rgba(37,99,255,0.06) 0%, transparent 70%)", filter: "blur(50px)"}} />
      <div className="max-w-5xl z-10 relative">
        <p className="text-[#2563FF] tracking-[0.3em] mb-6 text-sm font-medium">ABOUT ME</p>
        <h2 className="text-6xl font-bold mb-10 leading-tight text-white">Building products, <br />systems and technology solutions.</h2>
        <p className="text-[#94A3B8] text-xl leading-relaxed">I focus on developing intelligent products, scalable systems, and modern digital experiences that solve real-world problems. My interests span software engineering, AI-powered systems, product development, and building technology that combines performance, usability, and impact.</p>
        <div className="mt-12 grid grid-cols-3 gap-8">
          {[{ num: "2+", label: "Years Experience" }, { num: "5+", label: "Projects Built" }, { num: "3+", label: "Technologies" }].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-6 text-center" style={{border: "1px solid rgba(37,99,255,0.2)", background: "rgba(37,99,255,0.05)", boxShadow: "0 0 20px rgba(37,99,255,0.05)"}}>
              <p className="text-4xl font-black text-[#2563FF] mb-2">{stat.num}</p>
              <p className="text-[#94A3B8] text-sm tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}