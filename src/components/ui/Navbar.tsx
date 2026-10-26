import { UserRound } from "lucide-react";

const Navbar = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Destinations", href: "#destinations" },
    { label: "My Bookings", href: "#bookings" },
    { label: "Admin", href: "#admin" },
  ];

  return (
    <nav className="absolute left-2 right-2 top-2 z-30 flex h-9 items-center justify-between bg-white px-3 shadow-sm sm:left-2 sm:right-2 sm:top-2 sm:px-4">
      {/* Left navigation */}
      <div className="flex h-full items-center gap-3 sm:gap-5">
        {links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className={`whitespace-nowrap text-[9px] transition-colors sm:text-[11px] ${
              index === 0
                ? "border-b border-cyan-500 py-3 text-cyan-600"
                : "text-gray-900 hover:text-cyan-500"
            } ${index >= 2 ? "hidden sm:block" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Center logo */}
      <a
        href="#home"
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-base font-bold tracking-tight text-[#08A3C3] sm:text-lg"
      >
        Wanderlast
      </a>

      {/* Right navigation */}
      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="#profile"
          className="hidden items-center gap-1 whitespace-nowrap text-[10px] text-gray-900 sm:flex"
        >
          <UserRound size={11} />
          Profile
        </a>

        <a
          href="#login"
          className="text-[9px] text-gray-900 hover:text-cyan-600 sm:text-[10px]"
        >
          Login
        </a>

        <a
          href="#signup"
          className="whitespace-nowrap text-[9px] text-gray-900 hover:text-cyan-600 sm:text-[10px]"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
