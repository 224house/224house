interface NavProps {
  fg: string
}

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ fg }: NavProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ color: fg }}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#top"
          className="font-display italic text-xl md:text-2xl tracking-tight"
          style={{ color: fg }}
        >
          The224House
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: fg }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="text-sm border rounded-full px-4 py-2 opacity-90 hover:opacity-100 transition-opacity"
          style={{ color: fg, borderColor: fg }}
        >
          Start a project
        </a>
      </nav>
    </header>
  )
}
