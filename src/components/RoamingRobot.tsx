"use client";

import { useEffect, useRef } from "react";

export default function RoamingRobot() {
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const robot = robotRef.current;
    if (!robot) return;

    let x = Math.random() * (window.innerWidth - 80);
    let y = Math.random() * (window.innerHeight - 80);
    let vx = (Math.random() - 0.5) * 1.5;
    let vy = (Math.random() - 0.5) * 1.5;
    let animId: number;
    let flipped = false;

    const move = () => {
      x += vx;
      y += vy;

      if (x < 0) { x = 0; vx *= -1; flipped = !flipped; }
      if (x > window.innerWidth - 80) { x = window.innerWidth - 80; vx *= -1; flipped = !flipped; }
      if (y < 0) { y = 0; vy *= -1; }
      if (y > window.innerHeight - 80) { y = window.innerHeight - 80; vy *= -1; }

      robot.style.transform = `translate(${x}px, ${y}px) scaleX(${flipped ? -1 : 1})`;
      animId = requestAnimationFrame(move);
    };

    move();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div ref={robotRef} className="fixed top-0 left-0 z-30 pointer-events-none select-none" style={{fontSize: "3rem", filter: "drop-shadow(0 0 8px rgba(37,99,255,0.6))", willChange: "transform"}}>
      🤖
    </div>
  );
}