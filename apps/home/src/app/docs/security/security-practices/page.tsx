import DocsSidebar from "../../_components/docs-sidebar";

export default function SecurityPractices() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/security/security-practices" />

        {/* Main */}
        <main className="flex-1 px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl space-y-24">
            {/* Hero */}
            <section className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900">
                Security
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                  Security practices
                </h1>
              </div>
            </section>

            {/* Content */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    <strong className="font-semibold">
                      Private disclosure:
                    </strong>{" "}
                    vulnerabilities are reported through GitHub&apos;s private
                    vulnerability reporting or the contact in the repository
                    profile — never as public issues or PRs (
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/SECURITY.md"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Security Policy
                    </a>
                    ).
                  </li>

                  <li>
                    <strong className="font-semibold">
                      Supported versions:
                    </strong>{" "}
                    only the latest release / current{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      main
                    </code>{" "}
                    receives security updates.
                  </li>

                  <li>
                    <strong className="font-semibold">Dependencies:</strong> the
                    Rust API pins dependencies in{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      Cargo.lock
                    </code>
                    ; updates are reviewed like any other code change.
                  </li>

                  <li>
                    <strong className="font-semibold">Defense in depth:</strong>{" "}
                    hashing at rest (Argon2, SHA-256), verification in the
                    service layer, revocation in the data model, and logging on
                    top — no single layer is trusted alone.
                  </li>
                </ul>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/security/audit-logging"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Audit logging
              </a>

              <a
                href="/docs"
                className="font-medium text-blue-600 hover:underline"
              >
                Documentation →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
