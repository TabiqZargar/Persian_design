"use client";

const footerLinks = [
  {
    heading: "Collections",
    items: ["Gol-e Maryam", "Gonbad", "Shah Abbasi", "Kolah-e Farangi", "Boteh Jeh", "Toranj"],
  },
  {
    heading: "Regions",
    items: ["Isfahan", "Tabriz", "Kashan", "Shiraz", "Qom"],
  },
  {
    heading: "About",
    items: ["Heritage", "Process", "The Weavers", "Sustainability"],
  },
  {
    heading: "Connect",
    items: ["Newsletter", "Press", "Careers", "Showroom"],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-tertiary/10 pt-16 md:pt-24 pb-8 px-5 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h5 className="text-[10px] tracking-[0.2em] font-semibold uppercase text-tertiary mb-4 md:mb-6">
                {group.heading}
              </h5>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-tertiary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-surface-variant">
            &copy; {new Date().getFullYear()} Heritage Rugs. Weaving tradition since 1722.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.029 2.217a47.87 47.87 0 017.942 0c3.339.31 5.814 2.735 6.125 6.125.219 2.351.219 4.757 0 7.109-.31 3.389-2.785 5.814-6.125 6.125a47.87 47.87 0 01-7.942 0c-3.339-.31-5.814-2.735-6.125-6.125a47.87 47.87 0 010-7.109c.31-3.39 2.785-5.814 6.125-6.125zM12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm4.5-7.5a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
