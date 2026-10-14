import DocsSidebar from "../../_components/docs-sidebar";

export default function Authentication() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/security/authentication" />

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
                  Authentication
                </h1>
              </div>
            </section>

            {/* Content */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    <strong className="font-semibold">Passwords</strong> are
                    hashed with{" "}
                    <strong className="font-semibold">Argon2</strong>{" "}
                    (memory-hard, salted per user) in{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      apps/api/src/services/auth.rs
                    </code>
                    . Cleartext passwords are never stored and never logged.
                  </li>

                  <li>
                    <strong className="font-semibold">Sessions</strong> are
                    stateful and opaque: on login/registration the API issues a
                    random token and stores only its{" "}
                    <strong className="font-semibold">SHA-256 hash</strong> in
                    the{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      sessions
                    </code>{" "}
                    table. A database read alone therefore cannot replay
                    anyone&apos;s session.
                  </li>

                  <li>
                    Every session row carries an{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      active
                    </code>{" "}
                    flag and an{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      expires_at
                    </code>{" "}
                    timestamp, so sessions can be{" "}
                    <strong className="font-semibold">
                      revoked server-side
                    </strong>{" "}
                    and expire without any client cooperation.
                  </li>

                  <li>
                    Sessions reference{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      users(id)
                    </code>{" "}
                    with{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      ON DELETE CASCADE
                    </code>
                    : deleting a user destroys all of their sessions.
                  </li>

                  <li>
                    Failed authentication attempts are logged (
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      warn!
                    </code>{" "}
                    on invalid tokens), so abuse is visible in the structured
                    logs.
                  </li>
                </ul>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/security"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Security overview
              </a>

              <a
                href="/docs/security/authorization"
                className="font-medium text-blue-600 hover:underline"
              >
                Authorization →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
