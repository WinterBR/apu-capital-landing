import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Cenário", href: "#cenario" },
  { label: "Perfis", href: "#perfis" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#formulario" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 border-b border-cream/10 bg-navy/90 backdrop-blur-md">
      <div className="container flex items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-serif text-cream">
          Apu Capital
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#formulario"
            className="rounded-md bg-gold px-5 py-2 text-sm font-semibold text-navy transition-all hover:bg-gold-light"
          >
            Falar com estrategista
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-cream md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-cream/10 bg-navy px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-cream/70 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#formulario"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gold px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              Falar com estrategista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
