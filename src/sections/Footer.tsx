export default function Footer() {
  return (
    <footer
      className="relative py-8 md:py-10 text-center overflow-hidden px-6 border-t border-blue-900/20 backdrop-blur-xl"
      style={{ background: "rgba(0,0,0,0.85)" }}
    >
      <p className="text-[#94A3B8] text-xs md:text-sm tracking-wide">
        © 2026{" "}
        <span
          className="text-white font-semibold"
          style={{ textShadow: "0 0 20px rgba(37,99,255,0.3)" }}
        >
          Sandeep Kumar
        </span>
        . All rights reserved.
      </p>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(37,99,255,0.05) 0%, transparent 70%)",
        }}
      />
    </footer>
  );
}