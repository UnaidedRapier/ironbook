import DocsSidebar from "../../_components/docs-sidebar";

export default function Authorization() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/security/authorization" />

        {/* Main */}
        <main className="min-w-0 flex-1 px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl space-y-24">
            {/* Hero */}
            <section className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900">
                Security
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                  Authorization
                </h1>
              </div>
            </section>

            {/* Content */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Access is checked in the{" "}
                    <strong className="font-semibold">service layer</strong> (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      apps/api/src/services/
                    </code>
                    ), not just at the route: handlers in{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      views/
                    </code>
                    /
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      grpc/
                    </code>{" "}
                    delegate to services, which verify the caller before
                    touching the database.
                  </li>

                  <li>
                    User-scoped data is tied to{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      user_id
                    </code>
                    ; there is no ambient authority — every request must present
                    a valid session token.
                  </li>

                  <li>
                    Privileged operations (e.g. registration) additionally
                    require a valid{" "}
                    <strong className="font-semibold">client API token</strong>{" "}
                    (see{" "}
                    <a
                      href="/docs/security/api-tokens"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      API tokens
                    </a>
                    ), so arbitrary third parties cannot create accounts even if
                    they reach the endpoint.
                  </li>
                </ul>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/security/authentication"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Authentication
              </a>

              <a
                href="/docs/security/api-tokens"
                className="font-medium text-blue-600 hover:underline"
              >
                API tokens →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
