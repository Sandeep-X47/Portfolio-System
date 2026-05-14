export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-blue-900/20" style={{background: "rgba(0,0,0,0.85)"}}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-wider text-white hover:text-[#2563FF] transition-all duration-300" style={{textShadow: "0 0 20px rgba(37,99,255,0.3)"}}>SK.</a>
        <div className="flex gap-10 text-sm text-[#94A3B8]">
          <a href="#about" className="hover:text-[#2563FF] transition-all duration-300">About</a>
          <a href="#skills" className="hover:text-[#2563FF] transition-all duration-300">Skills</a>
          <a href="#projects" className="hover:text-[#2563FF] transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-[#2563FF] transition-all duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}