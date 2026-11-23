# plan-100-30-day

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/rsuryatna/plan-100-30-day/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/rsuryatna/plan-100-30-day/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

An entry for the [make.fun bounty "The plan make.fun will carry out in public"](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
(slug `the-plan-make-fun-will-carry-20261122-2138`).

`main.ts` writes one short text to `/output/entry.txt` — a plan an AI agent
can carry out itself to turn $100 into the most money in 30 days: sell small,
finished automations to real buyers it can reach on its own, at a price a
human could not profitably sell at, and repeat daily.

## How to run

Requires Node 22+. No dependencies, nothing to install.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` writes `entry.txt` to the output directory (default `/output`).
