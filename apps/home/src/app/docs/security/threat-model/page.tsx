import DocsSidebar from "../../_components/docs-sidebar";

export default function ThreatModel() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/security/threat-model" />

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
                  Threat model
                </h1>
              </div>
            </section>

            {/* Threats */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="px-4 py-3 font-semibold">Threat</th>
                        <th className="px-4 py-3 font-semibold">
                          Mitigation in place
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-zinc-700 dark:text-zinc-300">
                      {[
                        [
                          "Password database theft",
                          "Argon2 hashes only; no cleartext or reversible encryption",
                        ],
                        [
                          "Session token theft from DB",
                          "Only SHA-256 hashes stored; hashes cannot be replayed",
                        ],
                        [
                          "Stolen/lost session token",
                          "expires_at bounds lifetime; active flag allows revocation",
                        ],
                        [
                          "Account creation abuse",
                          "Registration requires a valid per-client API token",
                        ],
                        [
                          "Credential stuffing / brute force",
                          "Failed attempts are logged for detection; per-user salts defeat rainbow tables",
                        ],
                        [
                          "Cross-origin abuse",
                          "CORS restricted via ALLOWED_ORIGINS (ALLOW_ALL_ORIGINS defaults to false)",
                        ],
                        [
                          "Secret leakage via repo",
                          "Env-only secrets; example file carries placeholders",
                        ],
                      ].map(([threat, mitigation]) => (
                        <tr
                          key={threat}
                          className="border-b border-zinc-100 dark:border-zinc-800"
                        >
                          <td className="px-4 py-3 font-medium">{threat}</td>
                          <td className="px-4 py-3">{mitigation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Out of scope */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Out of scope / assumptions</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Transport security (TLS) is expected to be terminated by the
                  deployment environment; the API itself does not implement rate
                  limiting yet, so brute-force protection currently relies on
                  monitoring the auth logs.
                </p>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/security/secrets-management"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Secret management
              </a>

              <a
                href="/docs/security/audit-logging"
                className="font-medium text-blue-600 hover:underline"
              >
                Audit logging →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
