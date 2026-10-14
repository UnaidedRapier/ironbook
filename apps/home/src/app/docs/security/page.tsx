import DocsSidebar from "../_components/docs-sidebar";

export default function SecurityDocs() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/security" />

        {/* Main */}
        <main className="flex-1 px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl space-y-24">
            {/* Hero */}
            <section className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900">
                Security
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Security</h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                This section describes how Iron Book protects credentials,
                tokens, and user data.
              </p>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                For reporting a vulnerability, see the{" "}
                <a
                  href="https://github.com/ironbook-labs/ironbook/blob/main/SECURITY.md"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Security Policy
                </a>{" "}
                (private disclosure only — never open a public issue for a
                vulnerability).
              </p>
            </section>

            {/* Document index */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Documents</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="/docs/security/authentication"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Authentication</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Password hashing, sessions, revocation.
                  </p>
                </a>

                <a
                  href="/docs/security/authorization"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Authorization</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Service-layer access checks.
                  </p>
                </a>

                <a
                  href="/docs/security/api-tokens"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">API tokens</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Per-client tokens for privileged operations.
                  </p>
                </a>

                <a
                  href="/docs/security/secrets-management"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Secret management</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Environment variables,{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                      .env
                    </code>{" "}
                    handling.
                  </p>
                </a>

                <a
                  href="/docs/security/threat-model"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Threat model</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Threats, mitigations, out-of-scope assumptions.
                  </p>
                </a>

                <a
                  href="/docs/security/audit-logging"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Audit logging</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Security-relevant log events.
                  </p>
                </a>

                <a
                  href="/docs/security/security-practices"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  <h3 className="mb-2 font-semibold">Security practices</h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Disclosure, versions, dependencies, defense in depth.
                  </p>
                </a>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/architecture/client-api-architecture"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Client/API architecture
              </a>

              <a
                href="/docs/security/authentication"
                className="font-medium text-blue-600 hover:underline"
              >
                Authentication →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
