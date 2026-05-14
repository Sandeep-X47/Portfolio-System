"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,255,${p.opacity})`;
        ctx.fill();
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37,99,255,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", handleResize); };
  }, []);

  return (
    <section className="relative min-h-screen text-white flex items-center justify-between px-24 overflow-hidden" style={{background: "radial-gradient(ellipse at 60% 40%, #050d1f 0%, #000000 70%)"}}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0" style={{background: "radial-gradient(circle, rgba(37,99,255,0.08) 0%, transparent 70%)", filter: "blur(40px)"}} />

      <div className="max-w-2xl z-10 relative">
        <p className="text-[#2563FF] tracking-[0.4em] mb-6 text-sm font-medium">SOFTWARE ENGINEER • ENTREPRENEUR</p>
        <h1 className="text-[7rem] font-black leading-none text-white">SANDEEP</h1>
        <h1 className="text-[7rem] font-black leading-none text-[#2563FF] mb-8">KUMAR.</h1>
        <p className="text-[#94A3B8] text-xl leading-relaxed max-w-xl mb-10">Building intelligent products, modern systems and technology solutions that create impact.</p>
        <div className="flex gap-5">
          <a href="#projects" className="px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-white" style={{background: "#2563FF", boxShadow: "0 0 24px rgba(37,99,255,0.5)"}}>View Projects</a>
          <a href="#contact" className="px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-[#2563FF] hover:text-white" style={{border: "2px solid #2563FF", boxShadow: "0 0 16px rgba(37,99,255,0.3)"}}>Contact Me</a>
        </div>
      </div>

      <div className="relative flex items-center justify-center z-10">
        <div className="absolute w-[480px] h-[480px] rounded-full animate-spin" style={{background: "conic-gradient(from 0deg, transparent 0%, #2563FF 20%, transparent 40%)", animationDuration: "6s", opacity: 0.4}} />
        <div className="absolute w-[450px] h-[450px] rounded-full" style={{boxShadow: "0 0 60px rgba(37,99,255,0.35), 0 0 120px rgba(37,99,255,0.15)", border: "1px solid rgba(37,99,255,0.3)"}} />
        <div className="absolute w-[420px] h-[420px] rounded-full" style={{background: "radial-gradient(circle, rgba(37,99,255,0.2) 0%, transparent 70%)", filter: "blur(20px)"}} />
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden z-10" style={{border: "2px solid rgba(37,99,255,0.6)", boxShadow: "0 0 40px rgba(37,99,255,0.4)"}}>
          <img src="/profile.png" alt="profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}