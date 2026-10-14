import DocsSidebar from "../_components/docs-sidebar";

export default function ArchitectureDocs() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/architecture" />

        {/* Main */}
        <main className="flex-1 px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl space-y-24">
            {/* Hero */}
            <section className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900">
                Architecture
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                  Architecture
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                This section documents the architecture of Project Iron Book — a{" "}
                <strong className="font-semibold">polyglot monorepo</strong>{" "}
                (&ldquo;A Digital Financial Ledger&rdquo;) made of 7 integrated
                parts, each in its own tech stack, all managed through one
                toolchain. Start with the{" "}
                <a
                  href="https://github.com/ironbook-labs/ironbook/blob/main/README.md"
                  className="font-medium text-blue-600 hover:underline"
                >
                  root README
                </a>{" "}
                for onboarding, and the{" "}
                <a
                  href="https://github.com/ironbook-labs/ironbook/blob/main/docs/SECURITY.md"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Security
                </a>{" "}
                document for authentication and the threat model.
              </p>
            </section>

            {/* Document index */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Documents</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="/docs/architecture/system-architecture"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">System architecture</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    The 7 parts of the monorepo, the mise toolchain, and the{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                      scripts/ironbook.sh
                    </code>{" "}
                    tooling.
                  </p>
                </a>

                <a
                  href="/docs/architecture/component-relationships"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">
                    Component relationships
                  </h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    How the sub-projects relate: clients, API, database,
                    website, contracts, infrastructure.
                  </p>
                </a>

                <a
                  href="/docs/architecture/data-flow"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Data flow</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Setup flow, build/release flow, environment handling, and a
                    typical runtime request.
                  </p>
                </a>

                <a
                  href="/docs/architecture/major-design-decisions"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Major design decisions</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Why the project is shaped this way.
                  </p>
                </a>

                <a
                  href="/docs/architecture/database-architecture"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Database architecture</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    PostgreSQL as the single source of truth: migrations and
                    schema design.
                  </p>
                </a>

                <a
                  href="/docs/architecture/client-api-architecture"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">
                    Client/API architecture
                  </h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    How the clients (web, Android, desktop) talk to the Rust
                    backend.
                  </p>
                </a>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Documentation
              </a>

              <a
                href="/docs/architecture/system-architecture"
                className="font-medium text-blue-600 hover:underline"
              >
                System architecture →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
