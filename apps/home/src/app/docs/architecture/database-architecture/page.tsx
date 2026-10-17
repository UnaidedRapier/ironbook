import DocsSidebar from "../../_components/docs-sidebar";

export default function DatabaseArchitecture() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/architecture/database-architecture" />

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
                  Database architecture
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                PostgreSQL is the single source of truth. The API is the only
                component that connects to it — no client holds database
                credentials. Schema is versioned with{" "}
                <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                  sqlx
                </code>
                -managed migrations in{" "}
                <a
                  href="https://github.com/ironbook-labs/ironbook/blob/main/apps/api/migrations"
                  className="font-medium text-blue-600 hover:underline"
                >
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    apps/api/migrations/
                  </code>
                </a>
                :
              </p>
            </section>

            {/* Migrations */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="px-4 py-3 font-semibold">Migration</th>
                        <th className="px-4 py-3 font-semibold">Contents</th>
                      </tr>
                    </thead>

                    <tbody className="text-zinc-700 dark:text-zinc-300">
                      <tr className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            0001_initial.sql
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            users
                          </code>{" "}
                          (id, username, email, Argon2{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            password_hash
                          </code>
                          ),{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            sessions
                          </code>{" "}
                          (user FK with{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            ON DELETE CASCADE
                          </code>
                          ,{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            token_hash
                          </code>
                          ,{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            active
                          </code>
                          ,{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            expires_at
                          </code>
                          )
                        </td>
                      </tr>

                      <tr className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            0002_add_clients_table.sql
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            clients
                          </code>{" "}
                          (name, owner email, unique{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            api_token
                          </code>
                          )
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Design notes */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Design notes</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>Passwords are never stored; only Argon2 hashes.</li>

                  <li>
                    Session tokens are never stored in cleartext; only SHA-256
                    hashes, so a database read alone cannot replay a session.
                  </li>

                  <li>
                    Sessions carry{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      active
                    </code>{" "}
                    +{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      expires_at
                    </code>
                    , which makes server-side revocation and expiry possible
                    without client cooperation.
                  </li>

                  <li>Deleting a user cascades to their sessions.</li>

                  <li>
                    An offline query cache (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      .sqlx/
                    </code>
                    ) keeps compile-time query checking working without a live
                    database.
                  </li>

                  <li>
                    Database services are provisioned through the Docker Compose
                    definitions in{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/infra/docker/compose"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                        infra/docker/compose/
                      </code>
                    </a>
                    , started during{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/ironbook.sh setup
                    </code>{" "}
                    — see{" "}
                    <a
                      href="/docs/architecture/data-flow"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      data flow
                    </a>
                    .
                  </li>
                </ul>

                <p className="mt-6 leading-8 text-zinc-700 dark:text-zinc-300">
                  See the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/docs/SECURITY.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Security
                  </a>{" "}
                  document for the authentication model built on this schema.
                </p>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/architecture/major-design-decisions"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Major design decisions
              </a>

              <a
                href="/docs/architecture/client-api-architecture"
                className="font-medium text-blue-600 hover:underline"
              >
                Client/API architecture →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
