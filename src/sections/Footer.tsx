export default function Footer() {
  return (
    <footer
      className="border-t border-blue-900/20 py-10 text-center text-[#94A3B8] backdrop-blur-xl"
      style={{ background: "rgba(0,0,0,0.85)" }}
    >
      <p className="text-sm tracking-wide">
        © 2026{" "}
        <span
          className="text-white font-semibold"
          style={{ textShadow: "0 0 20px rgba(37,99,255,0.3)" }}
        >
          Sandeep Kumar
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}