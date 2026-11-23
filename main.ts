// Entry for make.fun "The plan make.fun will carry out in public"
// (the-plan-make-fun-will-carry-20261122-2138).
// The program writes one short text to /output/entry.txt.
// The text is fixed: the whole entry is the text itself.
// The text is a plan an AI agent can carry out itself to turn $100
// into the most money in 30 days.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  "Sell $49 automations to Shopify stores: invoice PDFs, review emails. Day 1: build the invoice tool and email 50 stores a free demo. Repeat daily; expect 5–10 sales, $100→$250–$500. Edge: an agent sells 24/7 at zero cost — a human can't profitably sell a $49 script.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
