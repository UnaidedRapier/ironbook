# Privacy Policy

**Project Iron Book** — A Digital Financial Ledger
**Effective date:** 2026-10-11

This Privacy Policy explains how Project Iron Book ("Iron Book", "we", "our")
handles information. Iron Book is an open-source, **self-hosted** financial
ledger: you run every component (API, web app, desktop app, mobile app, and
database) on infrastructure you control.

## The short version

- **Your financial data never leaves your infrastructure.** Iron Book has no
  central servers, no accounts system, and no telemetry. We cannot see, access,
  or sell your data — we simply never receive it.
- This policy covers the software itself and the project's public presence
  (repository, documentation site, and releases).

## 1. Information the software collects

**None.** The Iron Book applications (Rust API, Python web app, C# desktop app,
Kotlin Android app, Next.js project website) do not collect, transmit, or share
analytics, telemetry, usage statistics, crash reports, or personal data with the
project maintainers or any third party.

- All ledger data (accounts, entries, transactions) is stored in **your own
  PostgreSQL database** (and Redis cache, when enabled).
- Authentication credentials, API tokens, and secrets are stored in **your own
  environment** — see `docs/SECURITY.md` for handling guidance.
- There is no "phone home" behavior, update check, or license validation.

> **Note:** Optional telemetry is a *proposed* feature (see the project issue
> tracker). If telemetry is ever added, it will be opt-in, documented here, and
> disabled by default. This policy will be updated before any such release.

## 2. Information you provide to third parties

Because Iron Book is self-hosted, any data sharing depends entirely on **your**
deployment choices, not on the software:

- If you expose your instance to the internet, your hosting provider's policies
  apply.
- If you enable backups, monitoring, or logging integrations, those services'
  policies apply.
- You are responsible for complying with data-protection regulations (such as
  GDPR) for data you store about others.

## 3. Project website and documentation

The public project website and documentation are static content. They do not
require accounts, do not set tracking cookies, and do not run analytics.

## 4. GitHub repository interactions

If you interact with the project on GitHub (issues, pull requests, discussions),
GitHub's own [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)
governs that data. We do not export contributor data anywhere else.

## 5. Security

We take the security of the software seriously. Please report vulnerabilities
privately as described in `docs/SECURITY.md` — **do not** include real financial
data or credentials in public issues.

## 6. Changes to this policy

Material changes will be noted in the changelog (`docs/changelog/`). Continued
use of newer releases after a change constitutes acceptance.

## 7. Contact

Questions about this policy: open a discussion on the repository or contact the
maintainer via the email listed in `docs/SECURITY.md`.
