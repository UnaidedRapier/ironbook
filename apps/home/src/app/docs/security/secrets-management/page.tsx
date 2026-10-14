import DocsSidebar from "../../_components/docs-sidebar";

export default function SecretsManagement() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/security/secrets-management" />

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
                  Secret management
                </h1>
              </div>
            </section>

            {/* Content */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    All secrets (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      DATABASE_URL
                    </code>
                    , client API tokens, …) are supplied through{" "}
                    <strong className="font-semibold">
                      environment variables
                    </strong>
                    , loaded with{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      dotenvy
                    </code>
                    .
                  </li>

                  <li>
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      apps/api/.env.example
                    </code>{" "}
                    documents variable{" "}
                    <strong className="font-semibold">names only</strong>; it
                    contains no real credentials and must never be turned into a
                    real{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      .env
                    </code>{" "}
                    in the repo.
                  </li>

                  <li>
                    Production values are injected at deploy time (see{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      infra/docker/compose/prod.yaml
                    </code>
                    ), not baked into images or scripts.
                  </li>
                </ul>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/security/api-tokens"
                className="font-medium text-blue-600 hover:underline"
              >
                ← API tokens
              </a>

              <a
                href="/docs/security/threat-model"
                className="font-medium text-blue-600 hover:underline"
              >
                Threat model →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
