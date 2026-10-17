import DocsSidebar from "../../_components/docs-sidebar";

export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar current="/docs/architecture/system-architecture" />

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
                  System architecture
                </h1>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Iron Book is a{" "}
                <strong className="font-semibold">polyglot monorepo</strong>:
                all 7 parts of the product live in one repository, each in its
                own tech stack, all managed through one toolchain (
                <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                  mise
                </code>{" "}
                tasks +{" "}
                <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                  scripts/ironbook.sh
                </code>
                ). The onboarding promise from the{" "}
                <a
                  href="https://github.com/ironbook-labs/ironbook/blob/main/README.md"
                  className="font-medium text-blue-600 hover:underline"
                >
                  root README
                </a>{" "}
                is three steps — install the prerequisites, clone the repo, run{" "}
                <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                  scripts/ironbook.sh setup
                </code>
                .
              </p>
            </section>

            {/* The 7 parts */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">The 7 parts</h2>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="px-4 py-3 font-semibold">Part</th>
                        <th className="px-4 py-3 font-semibold">Location</th>
                        <th className="px-4 py-3 font-semibold">Tech</th>
                        <th className="px-4 py-3 font-semibold">Status</th>
                        <th className="px-4 py-3 font-semibold">Role</th>
                      </tr>
                    </thead>

                    <tbody className="text-zinc-700 dark:text-zinc-300">
                      {[
                        [
                          "API",
                          "apps/api/",
                          "Rust (Axum + tonic)",
                          "Live",
                          "Backend: REST + gRPC, business logic, persistence",
                        ],
                        [
                          "Web client",
                          "apps/web/",
                          "Python (Django)",
                          "Live",
                          "Browser client",
                        ],
                        [
                          "Android app",
                          "apps/android/",
                          "Kotlin",
                          "Live",
                          "Mobile client",
                        ],
                        [
                          "Desktop app",
                          "apps/desktop/",
                          "C# (Avalonia)",
                          "Live",
                          "Linux/Windows client",
                        ],
                        [
                          "Database",
                          "—",
                          "PostgreSQL",
                          "Live",
                          "Primary data store",
                        ],
                        ["Cache", "—", "Redis", "Planned", "Caching layer"],
                        [
                          "Project website",
                          "apps/home/",
                          "Next.js",
                          "Live",
                          "Public site and docs",
                        ],
                      ].map(([part, location, tech, status, role]) => (
                        <tr
                          key={part}
                          className="border-b border-zinc-100 dark:border-zinc-800"
                        >
                          <td className="px-4 py-3 font-medium">{part}</td>
                          <td className="px-4 py-3">
                            {location === "—" ? (
                              "—"
                            ) : (
                              <a
                                href={`https://github.com/ironbook-labs/ironbook/blob/main/${location}README.md`}
                                className="font-medium text-blue-600 hover:underline"
                              >
                                <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                                  {location}
                                </code>
                              </a>
                            )}
                          </td>
                          <td className="px-4 py-3">{tech}</td>
                          <td className="px-4 py-3">{status}</td>
                          <td className="px-4 py-3">{role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  Each app has a dedicated README with setup and development
                  notes; see the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    apps overview
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Tooling */}
            <section className="space-y-12">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Tooling</h2>
              </div>

              <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-2xl font-semibold">
                  mise — the task runner
                </h3>

                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  The repository root holds a{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/mise.toml"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      mise.toml
                    </code>
                  </a>
                  , and each sub-project defines its own{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    mise.toml
                  </code>{" "}
                  (e.g.{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/api/mise.toml"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      apps/api/mise.toml
                    </code>
                  </a>
                  ). Any task for any sub-project can be run from the repository
                  root, e.g.{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    mise run //apps/api/test
                  </code>{" "}
                  — there is no need to{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    cd
                  </code>{" "}
                  into the app directory, and per-app{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    setup
                  </code>{" "}
                  tasks do not need to be run separately after the root setup
                  script.
                </p>
              </div>

              <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-2xl font-semibold">
                  scripts/ironbook.sh — the custom bash tooling
                </h3>

                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Everything is driven through a single entry point,{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/ironbook.sh"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      scripts/ironbook.sh
                    </code>
                  </a>
                  , documented in the{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/scripts/README.md"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    scripts README
                  </a>
                  :
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="px-4 py-3 font-semibold">Command</th>
                        <th className="px-4 py-3 font-semibold">Purpose</th>
                      </tr>
                    </thead>

                    <tbody className="text-zinc-700 dark:text-zinc-300">
                      <tr className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            setup
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          First-time developer setup (see{" "}
                          <a
                            href="/docs/architecture/data-flow"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            data flow
                          </a>
                          )
                        </td>
                      </tr>

                      <tr className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            build
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          Build the project artifacts
                        </td>
                      </tr>

                      <tr className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            release
                          </code>
                        </td>
                        <td className="px-4 py-3">Cut and sign a release</td>
                      </tr>

                      <tr className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            update-version
                          </code>
                        </td>
                        <td className="px-4 py-3">Bump version numbers</td>
                      </tr>

                      <tr className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="px-4 py-3">
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            get-tree
                          </code>{" "}
                          /{" "}
                          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                            get-codebase
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          Developer utilities (repo tree, codebase dump)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Implementation layout:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="px-4 py-3 font-semibold">Directory</th>
                        <th className="px-4 py-3 font-semibold">Purpose</th>
                      </tr>
                    </thead>

                    <tbody className="text-zinc-700 dark:text-zinc-300">
                      {[
                        [
                          "scripts/lib/",
                          "Shared shell helpers (vars.sh, utility.sh, help.sh) sourced by the entry point",
                        ],
                        [
                          "scripts/setup/",
                          "First-time setup: system.sh, mise.sh, docker.sh, environment.sh, project.sh, git-hooks.sh",
                        ],
                        [
                          "scripts/build/",
                          "Build, packaging, changelog generation",
                        ],
                        ["scripts/release/", "Versioning, signing, publishing"],
                        [
                          "scripts/install/",
                          "Installer scripts used by the curl-based install in the root README",
                        ],
                        ["scripts/tools/", "get_tree, get_codebase utilities"],
                      ].map(([dir, purpose]) => (
                        <tr
                          key={dir}
                          className="border-b border-zinc-100 dark:border-zinc-800"
                        >
                          <td className="px-4 py-3">
                            <a
                              href={`https://github.com/ironbook-labs/ironbook/blob/main/${dir}`}
                              className="font-medium text-blue-600 hover:underline"
                            >
                              <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                                {dir}
                              </code>
                            </a>
                          </td>
                          <td className="px-4 py-3">{purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-2xl font-semibold">Environment handling</h3>

                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  Environment variables are the single mechanism for
                  configuration across all parts. Variable names are documented
                  in{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/.env.example"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      .env.example
                    </code>
                  </a>{" "}
                  at the repo root (and per-app where needed, e.g.{" "}
                  <a
                    href="https://github.com/ironbook-labs/ironbook/blob/main/apps/api/.env.example"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      apps/api/.env.example
                    </code>
                  </a>
                  ); real values are supplied at deploy time and never
                  committed. The setup script (
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    scripts/ironbook.sh setup
                  </code>
                  , via{" "}
                  <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                    scripts/setup/environment.sh
                  </code>
                  ) handles environment preparation automatically — see{" "}
                  <a
                    href="/docs/architecture/data-flow"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    data flow
                  </a>
                  .
                </p>
              </div>

              <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-2xl font-semibold">
                  Shared contracts and infrastructure
                </h3>

                <ul className="list-disc space-y-4 pl-6 leading-7 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Shared API contracts live in{" "}
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
                    ) and are the source of truth for server and clients alike.
                  </li>

                  <li>
                    Infrastructure definitions live in{" "}
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
                      dev.yaml
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                      prod.yaml
                    </code>
                    ).
                  </li>
                </ul>

                <p className="leading-8 text-zinc-700 dark:text-zinc-300">
                  See{" "}
                  <a
                    href="/docs/architecture/component-relationships"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    component relationships
                  </a>{" "}
                  for how these pieces connect.
                </p>
              </div>
            </section>

            {/* Next */}
            <section className="flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <a
                href="/docs/architecture"
                className="font-medium text-blue-600 hover:underline"
              >
                ← Architecture overview
              </a>

              <a
                href="/docs/architecture/component-relationships"
                className="font-medium text-blue-600 hover:underline"
              >
                Component relationships →
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
