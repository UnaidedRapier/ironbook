import DocsSidebar from "../../_components/docs-sidebar";

export default function MajorDesignDecisions() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/architecture/major-design-decisions" />

        {/* Main */}
        <main className="min-w-0 flex-1 px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl space-y-24">
            {/* Hero */}
            <section className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900">
                Architecture
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                  Major design decisions
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Why the project is shaped this way.
              </p>
            </section>

            {/* Decisions */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ol className="list-decimal space-y-8 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    <strong className="font-semibold">
                      Polyglot monorepo over micro-repos.
                    </strong>{" "}
                    One repo, one setup script (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/ironbook.sh setup
                    </code>
                    ), per-app{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      mise
                    </code>{" "}
                    tasks runnable from the repository root (e.g.{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      mise run //apps/api/test
                    </code>
                    ). The onboarding promise is three steps, two of which are
                    prerequisites — see the{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/README.md"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      root README
                    </a>
                    .
                  </li>

                  <li>
                    <strong className="font-semibold">
                      One toolchain for everything.
                    </strong>{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      mise
                    </code>{" "}
                    (root + per-app{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      mise.toml
                    </code>
                    ) plus the custom{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/ironbook.sh
                    </code>{" "}
                    entry point cover setup, build, release, and developer
                    utilities for all 7 parts — no per-stack build scripts to
                    keep in sync.
                  </li>

                  <li>
                    <strong className="font-semibold">
                      Proto-first contracts.
                    </strong>{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/contracts/proto"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                        contracts/proto/
                      </code>
                    </a>{" "}
                    is compiled into the server and shared with clients, so the
                    API surface is defined once and REST and gRPC stay
                    consistent.
                  </li>

                  <li>
                    <strong className="font-semibold">
                      API as the single gateway.
                    </strong>{" "}
                    The API is the only component that talks to the database;
                    every client (web, Android, desktop) goes through it. No
                    client holds database credentials — see{" "}
                    <a
                      href="/docs/architecture/component-relationships"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      component relationships
                    </a>
                    .
                  </li>

                  <li>
                    <strong className="font-semibold">
                      One binary, two transports.
                    </strong>{" "}
                    The API exposes REST (Axum) and gRPC (tonic) from one
                    process, both thin adapters over the same services layer —
                    no duplicated logic.
                  </li>

                  <li>
                    <strong className="font-semibold">
                      Stateful sessions, hashed tokens.
                    </strong>{" "}
                    Sessions live in the database with hashes, expiry, and a
                    revocation flag, trading a small lookup cost for server-side
                    control over every issued token. See the{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/docs/SECURITY.md"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Security
                    </a>{" "}
                    document and{" "}
                    <a
                      href="/docs/architecture/database-architecture"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      database architecture
                    </a>
                    .
                  </li>

                  <li>
                    <strong className="font-semibold">
                      Secrets in the environment, never in the repo.
                    </strong>{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      .env.example
                    </code>{" "}
                    documents variable names only; real values are supplied at
                    deploy time. The setup script prepares environment files
                    automatically.
                  </li>

                  <li>
                    <strong className="font-semibold">Reproducibility.</strong>{" "}
                    Docker Compose definitions for dev and prod (
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/infra/docker/compose"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                        infra/docker/compose/
                      </code>
                    </a>
                    ), an offline sqlx query cache (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      .sqlx/
                    </code>
                    ), and mise-managed toolchains keep builds working on any
                    machine.
                  </li>
                </ol>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/architecture/data-flow"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Data flow
              </a>

              <a
                href="/docs/architecture/database-architecture"
                className="font-medium text-blue-600 hover:underline"
              >
                Database architecture →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
