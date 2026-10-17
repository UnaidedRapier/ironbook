const sections: {
  label: string;
  links: { href: string; label: string }[];
}[] = [
  {
    label: "Architecture",
    links: [
      { href: "/docs/architecture", label: "Overview" },
      {
        href: "/docs/architecture/system-architecture",
        label: "System architecture",
      },
      {
        href: "/docs/architecture/component-relationships",
        label: "Component relationships",
      },
      { href: "/docs/architecture/data-flow", label: "Data flow" },
      {
        href: "/docs/architecture/major-design-decisions",
        label: "Major design decisions",
      },
      {
        href: "/docs/architecture/database-architecture",
        label: "Database architecture",
      },
      {
        href: "/docs/architecture/client-api-architecture",
        label: "Client/API architecture",
      },
    ],
  },
  {
    label: "Security",
    links: [
      { href: "/docs/security", label: "Overview" },
      { href: "/docs/security/authentication", label: "Authentication" },
      { href: "/docs/security/authorization", label: "Authorization" },
      { href: "/docs/security/api-tokens", label: "API tokens" },
      {
        href: "/docs/security/secrets-management",
        label: "Secret management",
      },
      { href: "/docs/security/threat-model", label: "Threat model" },
      { href: "/docs/security/audit-logging", label: "Audit logging" },
      {
        href: "/docs/security/security-practices",
        label: "Security practices",
      },
    ],
  },
  {
    label: "Legal",
    links: [{ href: "/docs/privacy", label: "Privacy Policy" }],
  },
];

export default function DocsSidebar({ current }: { current: string }) {
  const linkClass = (href: string) =>
    href === current
      ? "ml-3 block font-medium text-black dark:text-white"
      : "ml-3 block text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white";

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto border-r border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black lg:block">
        <h2 className="mb-6 text-lg font-semibold">Contents</h2>

        <nav className="space-y-3 text-sm">
          <a
            href="/docs"
            className="block text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            Documentation
          </a>

          {sections.map((section) => (
            <div key={section.label} className="space-y-3">
              <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {section.label}
              </p>

              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile navigation (collapsible; desktop uses the sidebar above) */}
      <details className="sticky top-0 z-10 border-b border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black lg:hidden">
        <summary className="cursor-pointer text-sm font-semibold">
          Contents
        </summary>
        <nav className="mt-4 space-y-3 text-sm">
          <a
            href="/docs"
            className="block text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            Documentation
          </a>

          {sections.map((section) => (
            <div key={section.label} className="space-y-3">
              <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {section.label}
              </p>

              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </details>
    </>
  );
}
