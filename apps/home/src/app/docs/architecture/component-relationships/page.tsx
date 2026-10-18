import DocsSidebar from "../../_components/docs-sidebar";

export default function ComponentRelationships() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/architecture/component-relationships" />

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
                  Component relationships
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                How the parts of Project Iron Book relate to each other — at a
                glance:
              </p>
            </section>

            {/* Diagram */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <pre className="overflow-x-auto font-mono text-xs leading-5 text-zinc-700 dark:text-zinc-300">
                  {`                        ┌─────────────────┐
                        │  apps/home      │  Next.js project website / docs
                        │  (public site)  │
                        └─────────────────┘
        ┌───────────────────┬───────────────────┐
        │                   │                   │
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ apps/web      │   │ apps/android  │   │ apps/desktop  │
│ Django        │   │ Kotlin        │   │ C# (Avalonia) │
└───────┬───────┘   └───────┬───────┘   └───────┬───────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │  REST + gRPC
                            ▼
                   ┌─────────────────┐
                   │ apps/api        │── views (REST handlers)
                   │ Rust: Axum      │── grpc (gRPC handlers)
                   │       tonic     │
                   └────────┬────────┘
                            │  sqlx
                            ▼
                   ┌─────────────────┐
                   │ PostgreSQL      │── sqlx migrations
                   └─────────────────┘`}
                </pre>
              </div>
            </section>

            {/* Clients */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Clients</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  The three clients —{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/web/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    web
                  </a>{" "}
                  (Django),{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/android/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Android
                  </a>{" "}
                  (Kotlin),{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/desktop/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    desktop
                  </a>{" "}
                  (C# with Avalonia) — all go through the API. No client holds
                  database credentials; the API is the only component that talks
                  to the database.
                </p>
              </div>
            </section>

            {/* API and database */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">API and database</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/api/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    apps/api
                  </a>{" "}
                  (Rust: Axum + tonic) exposes REST and gRPC surfaces from one
                  binary and persists through{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    sqlx
                  </code>{" "}
                  against PostgreSQL. See{" "}
                  <a
                    href="/docs/architecture/database-architecture"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    database architecture
                  </a>{" "}
                  and{" "}
                  <a
                    href="/docs/architecture/client-api-architecture"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    client/API architecture
                  </a>{" "}
                  for details.
                </p>
              </div>
            </section>

            {/* Shared contracts */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Shared contracts</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  The contract files in{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/contracts/proto"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      contracts/proto/
                    </code>
                  </a>{" "}
                  (
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    auth.proto
                  </code>
                  ,{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    users.proto
                  </code>
                  ,{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    system.proto
                  </code>
                  ) are the source of truth for the API surface: they are
                  compiled into the Rust binary at build time (
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    build.rs
                  </code>{" "}
                  +{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    tonic-prost-build
                  </code>
                  ) and shared with client implementations, so REST and gRPC
                  stay consistent.
                </p>
              </div>
            </section>

            {/* Project website */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Project website</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/home/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    apps/home
                  </a>{" "}
                  (Next.js) is the public project website and docs — this site.
                  It is standalone and does not depend on the API.
                </p>
              </div>
            </section>

            {/* Infrastructure */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Infrastructure</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Environment definitions live in{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/infra/docker/compose"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      infra/docker/compose/
                    </code>
                  </a>{" "}
                  (
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    compose.yaml
                  </code>
                  ,{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    prod.yaml
                  </code>
                  ), managed through{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/ironbook.sh"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/ironbook.sh
                    </code>
                  </a>{" "}
                  — see the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    scripts README
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/architecture/system-architecture"
                className="font-medium text-blue-600 hover:underline"
              >
                ← System architecture
              </a>

              <a
                href="/docs/architecture/data-flow"
                className="font-medium text-blue-600 hover:underline"
              >
                Data flow →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
