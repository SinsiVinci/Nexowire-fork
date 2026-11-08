# Fork CI on clean upstream-based branches — constraint proof (T-201)

Verified 2026-11-01. This is a read-only integration design, **not** a passing
required-check claim or permission to change upstream workflows.

## Observed facts

- Upstream `Naveax/Nexowire` `main` and fork `SinsiVinci/Nexowire-fork`
  `main` were both `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`.
- `git ls-tree -r --name-only origin/main .github/workflows/delegated-noncore.yml`
  returned no entry; the same lookup in the K13 feature branch returned the
  workflow. The original PR #1 fork-only run used its own branch's harness.
- A separate clean contributor branch based only on upstream `main` therefore
  does not contain the K13 workflow or the `scripts/delegated/k13/` test harness.
- T-200 detects missing harness **in the source head**, before dependencies.
  A merge checkout must not silently supply test files from the fork base.

## Why a seamless exact-HEAD shortcut is not established

| Option | Fork main stays upstream-identical? | GitHub Actions `run.head_sha` equals clean code PR head? | Tradeoff |
| --- | --- | --- | --- |
| Keep workflow only on K13 branch | Yes | No, for other clean branches | Only K13 branch push/PR is verified |
| Copy/cherry-pick K13 harness into every code branch | Yes | Only for the augmented branch SHA | Clean upstream PR SHA differs; files contaminate upstream diff |
| Dedicated CI branch with `workflow_dispatch` checkout of target SHA | Yes | No | Can test exact source bytes but Actions run is tied to CI branch; call it auxiliary smoke |
| Merge K13 workflow into fork `main` | **No** | Potentially, with extra checkout rules | Fork main now diverges; K14's fast-forward-only invariant is broken |
| Have upstream accept a reviewed CI workflow | Yes, after upstream itself changes | Potentially yes | Requires Ömer/upstream decision; cannot unilaterally alter CORE/release gates |

No branch rewrite, merge, workflow approval, secret or live test was performed.

## Safe near-term strategy

1. Keep fork `main` equal to upstream and keep clean production PRs free of
   fork-only CI assets. Preserve K13 fork PR #1 as Draft pending ownership decision.
2. For fast feedback, maintain a **disposable integration branch** from the clean
   commit with reviewed K13 harness files; use `push` on that branch to run
   offline checks. Record both `source_sha` and `ci_branch_sha`, and label the
   result `AUXILIARY_SMOKE`, **never exact-head PASS** for the original PR.
3. For a required exact-head check on clean PRs, request an upstream CI design
   decision from Ömer or a separate trusted check-run publisher. Both expand
   scope/authority and are blocked until explicitly approved.
4. T-200's early error is deliberate when a clean PR head lacks the harness;
   it exposes a missing proof rather than manufacturing success.

## Repeatable read-only check

```bash
git rev-parse origin/main
git ls-tree -r --name-only origin/main .github/workflows/delegated-noncore.yml
git ls-tree -r --name-only HEAD .github/workflows/delegated-noncore.yml
```

These commands inspect only local refs; recheck current upstream/fork SHAs before
applying this conclusion in a later turn. Actual cross-branch CI runner acceptance
for a clean branch remains **NOT_RUN**.
