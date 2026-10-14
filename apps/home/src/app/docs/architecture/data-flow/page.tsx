import DocsSidebar from "../../_components/docs-sidebar";

export default function DataFlow() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/architecture/data-flow" />

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
                  Data flow
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                How developers get set up, how builds and releases move through
                the repo, how configuration reaches every part of the system,
                and what a typical request looks like at runtime.
              </p>
            </section>

            {/* Setup flow */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Setup flow</h2>

              <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Developer onboarding is three steps (see the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    root README
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/docs/setup/supported_platforms.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    supported platforms
                  </a>
                  ):
                </p>

                <ol className="list-decimal space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Install the prerequisites (Mise, Docker / Docker Compose —
                    installed automatically by the setup where possible).
                  </li>

                  <li>Clone the repo.</li>

                  <li>
                    Run{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/ironbook.sh setup
                    </code>
                    .
                  </li>
                </ol>

                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  The{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    setup
                  </code>{" "}
                  command sources{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/setup/setup.sh"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/setup/setup.sh
                    </code>
                  </a>
                  , which runs, in order:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="px-4 py-3 font-semibold">Script</th>
                        <th className="px-4 py-3 font-semibold">
                          Responsibility
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-zinc-700 dark:text-zinc-300">
                      {[
                        ["system.sh", "OS-level prerequisites"],
                        ["mise.sh", "Toolchain installation via mise"],
                        ["docker.sh", "Container services (PostgreSQL, etc.)"],
                        [
                          "environment.sh",
                          "Environment file preparation from .env.example",
                        ],
                        ["project.sh", "Per-project bootstrapping"],
                        ["git-hooks.sh", "Git hook installation"],
                      ].map(([script, responsibility]) => (
                        <tr
                          key={script}
                          className="border-b border-zinc-100 dark:border-zinc-800"
                        >
                          <td className="px-4 py-3">
                            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                              {script}
                            </code>
                          </td>
                          <td className="px-4 py-3">{responsibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Sub-project{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    setup
                  </code>{" "}
                  tasks do not need to be executed separately afterwards —
                  everything is handled by the root setup script.
                </p>
              </div>
            </section>

            {/* Build and release flow */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Build and release flow</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/ironbook.sh"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/ironbook.sh
                    </code>
                  </a>{" "}
                  routes{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    build
                  </code>{" "}
                  and{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    release
                  </code>{" "}
                  to the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/build"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    build
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/release"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    release
                  </a>{" "}
                  directories: build, packaging, and changelog generation, then
                  version bumping, signing, and publishing. Installers are
                  produced from{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/install"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/install/
                    </code>
                  </a>{" "}
                  and distributed via the curl-based install documented in the
                  root README.
                </p>
              </div>
            </section>

            {/* Environment flow */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Environment flow</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="mb-6 leading-8 text-zinc-700 dark:text-zinc-300">
                  Configuration reaches every part of the system through
                  environment variables:
                </p>

                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Variable names are documented in{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/.env.example"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                        .env.example
                      </code>
                    </a>{" "}
                    at the repo root, and per-app where needed (e.g.{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/apps/api/.env.example"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                        apps/api/.env.example
                      </code>
                    </a>{" "}
                    documents{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      DATABASE_URL
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      ALLOWED_ORIGINS
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      ALLOW_ALL_ORIGINS
                    </code>
                    ).
                  </li>

                  <li>
                    The setup script prepares environment files automatically;
                    real values are supplied at deploy time and never committed
                    to the repo.
                  </li>

                  <li>
                    The API loads variables at startup via{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      dotenvy
                    </code>
                    ; clients read their own environment per platform.
                  </li>
                </ul>
              </div>
            </section>

            {/* Runtime request flow */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">
                Runtime request flow (high level)
              </h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  A typical user request travels:{" "}
                  <strong className="font-semibold">client</strong> (web /
                  Android / desktop) →{" "}
                  <strong className="font-semibold">API</strong> (REST via Axum
                  or gRPC via tonic) →{" "}
                  <strong className="font-semibold">PostgreSQL</strong>. The API
                  validates input, verifies credentials, applies business logic,
                  and persists through{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    sqlx
                  </code>
                  ; a central error module maps failures to consistent API error
                  responses. See{" "}
                  <a
                    href="/docs/architecture/client-api-architecture"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    client/API architecture
                  </a>{" "}
                  for the full breakdown.
                </p>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/architecture/component-relationships"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Component relationships
              </a>

              <a
                href="/docs/architecture/major-design-decisions"
                className="font-medium text-blue-600 hover:underline"
              >
                Major design decisions →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
