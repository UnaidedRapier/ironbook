import DocsSidebar from "../../_components/docs-sidebar";

export default function ClientApiArchitecture() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/architecture/client-api-architecture" />

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
                  Client/API architecture
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                This document covers how the clients —{" "}
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
                (C# with Avalonia) — communicate with the{" "}
                <a
                  href="https://github.com/ironbook-labs/ironbook/blob/main/apps/api/README.md"
                  className="font-medium text-blue-600 hover:underline"
                >
                  API
                </a>{" "}
                (Rust: Axum + tonic). See{" "}
                <a
                  href="/docs/architecture/component-relationships"
                  className="font-medium text-blue-600 hover:underline"
                >
                  component relationships
                </a>{" "}
                for where this fits in the whole project.
              </p>
            </section>

            {/* Points */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="list-disc space-y-6 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    The API binary exposes{" "}
                    <strong className="font-semibold">
                      two surfaces from one process
                    </strong>
                    : REST (Axum) and gRPC (tonic). Both are thin adapters over
                    the same{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      services
                    </code>{" "}
                    layer, so behavior is identical regardless of transport.
                  </li>

                  <li>
                    The shared contract files in{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/contracts/proto"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                        contracts/proto/
                      </code>
                    </a>{" "}
                    are compiled into the Rust binary at build time (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      build.rs
                    </code>{" "}
                    +{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      tonic-prost-build
                    </code>
                    ) and serve as the source of truth for client
                    implementations.
                  </li>

                  <li>
                    Clients authenticate per user (session tokens) and, for
                    privileged operations such as registration, per client (API
                    tokens from the{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      clients
                    </code>{" "}
                    table). See the{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/docs/SECURITY.md"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Security
                    </a>{" "}
                    document for the full model.
                  </li>

                  <li>
                    CORS is configurable (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      ALLOWED_ORIGINS
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      ALLOW_ALL_ORIGINS
                    </code>{" "}
                    — documented in{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/apps/api/.env.example"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                        apps/api/.env.example
                      </code>
                    </a>
                    ) rather than open by default.
                  </li>

                  <li>
                    A typical request travels: transport (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      src/views/
                    </code>{" "}
                    for REST,{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      src/grpc/
                    </code>{" "}
                    for gRPC) → business logic (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      src/services/
                    </code>
                    ) → persistence (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      src/db/
                    </code>{" "}
                    via{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      sqlx
                    </code>{" "}
                    against PostgreSQL) → structured error responses (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      src/errors.rs
                    </code>
                    ).
                  </li>
                </ul>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/architecture/database-architecture"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Database architecture
              </a>

              <a
                href="/docs/security"
                className="font-medium text-blue-600 hover:underline"
              >
                Security overview →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
