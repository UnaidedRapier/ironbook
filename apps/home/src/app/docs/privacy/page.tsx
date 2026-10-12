import DocsSidebar from "../_components/docs-sidebar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/privacy" />

        {/* Main */}
        <main className="flex-1 px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl space-y-24">
            {/* Hero */}
            <section className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900">
                Privacy
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl font-black tracking-tight">
                  Privacy Policy
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                <strong className="font-semibold">Project Iron Book</strong> —
                A Digital Financial Ledger
              </p>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                <strong className="font-semibold">Effective date:</strong>{" "}
                2026-10-11
              </p>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                This Privacy Policy explains how Project Iron Book
                (&quot;Iron Book&quot;, &quot;we&quot;, &quot;our&quot;) handles
                information. Iron Book is an open-source,{" "}
                <strong className="font-semibold">self-hosted</strong>{" "}
                financial ledger: you run every component (API, web app,
                desktop app, mobile app, and database) on infrastructure you
                control.
              </p>
            </section>

            {/* The short version */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">The short version</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    <strong className="font-semibold">
                      Your financial data never leaves your infrastructure.
                    </strong>{" "}
                    Iron Book has no central servers, no accounts system, and
                    no telemetry. We cannot see, access, or sell your data — we
                    simply never receive it.
                  </li>

                  <li>
                    This policy covers the software itself and the
                    project&apos;s public presence (repository, documentation
                    site, and releases).
                  </li>
                </ul>
              </div>
            </section>

            {/* 1. Information the software collects */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">
                1. Information the software collects
              </h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  <strong className="font-semibold">None.</strong> The Iron
                  Book applications (Rust API, Python web app, C# desktop app,
                  Kotlin Android app, Next.js project website) do not collect,
                  transmit, or share analytics, telemetry, usage statistics,
                  crash reports, or personal data with the project maintainers
                  or any third party.
                </p>

                <ul className="mt-4 list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    All ledger data (accounts, entries, transactions) is
                    stored in{" "}
                    <strong className="font-semibold">
                      your own PostgreSQL database
                    </strong>{" "}
                    (and Redis cache, when enabled).
                  </li>

                  <li>
                    Authentication credentials, API tokens, and secrets are
                    stored in{" "}
                    <strong className="font-semibold">
                      your own environment
                    </strong>{" "}
                    — see the{" "}
                    <a
                      href="https://github.com/ironbook-labs/ironbook/blob/main/SECURITY.md"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Security Policy
                    </a>{" "}
                    for handling guidance.
                  </li>

                  <li>
                    There is no &quot;phone home&quot; behavior, update check,
                    or license validation.
                  </li>
                </ul>

                <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 leading-7 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                  <strong className="font-semibold">Note:</strong> Optional
                  telemetry is a <em>proposed</em> feature (see the project
                  issue tracker). If telemetry is ever added, it will be
                  opt-in, documented here, and disabled by default. This policy
                  will be updated before any such release.
                </blockquote>
              </div>
            </section>

            {/* 2. Information you provide to third parties */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">
                2. Information you provide to third parties
              </h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Because Iron Book is self-hosted, any data sharing depends
                  entirely on <strong className="font-semibold">your</strong>{" "}
                  deployment choices, not on the software:
                </p>

                <ul className="mt-4 list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    If you expose your instance to the internet, your hosting
                    provider&apos;s policies apply.
                  </li>

                  <li>
                    If you enable backups, monitoring, or logging integrations,
                    those services&apos; policies apply.
                  </li>

                  <li>
                    You are responsible for complying with data-protection
                    regulations (such as GDPR) for data you store about others.
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Project website and documentation */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">
                3. Project website and documentation
              </h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  The public project website and documentation are static
                  content. They do not require accounts, do not set tracking
                  cookies, and do not run analytics.
                </p>
              </div>
            </section>

            {/* 4. GitHub repository interactions */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">
                4. GitHub repository interactions
              </h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  If you interact with the project on GitHub (issues, pull
                  requests, discussions), GitHub&apos;s own{" "}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Privacy Statement
                  </a>{" "}
                  governs that data. We do not export contributor data anywhere
                  else.
                </p>
              </div>
            </section>

            {/* 5. Security */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">5. Security</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  We take the security of the software seriously. Please report
                  vulnerabilities privately as described in the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/SECURITY.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Security Policy
                  </a>{" "}
                  — <strong className="font-semibold">do not</strong> include
                  real financial data or credentials in public issues.
                </p>
              </div>
            </section>

            {/* 6. Changes to this policy */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">6. Changes to this policy</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Material changes will be noted in the changelog (
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    docs/changelog/
                  </code>
                  ). Continued use of newer releases after a change constitutes
                  acceptance.
                </p>
              </div>
            </section>

            {/* 7. Contact */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">7. Contact</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Questions about this policy: open a{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/discussions"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    discussion
                  </a>{" "}
                  on the repository or contact the maintainer via the email
                  listed in the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/SECURITY.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Security Policy
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/security/security-practices"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Security practices
              </a>

              <a
                href="/docs"
                className="font-medium text-blue-600 hover:underline"
              >
                Documentation index →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
