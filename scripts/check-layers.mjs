#!/usr/bin/env node
// Fails when a CSS module has rules outside @layer.
// Every component stylesheet must wrap its rules in @layer components (and optionally @layer overrides).
// Usage: node scripts/check-layers.mjs [srcDir]   (default: src)

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.argv[2] ?? "src";

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      walk(full, out);
    } else if (entry.endsWith(".module.css")) {
      out.push(full);
    }
  }
  return out;
}

const files = walk(root);
const missing = files.filter((file) => !/@layer\s+(components|overrides)\b/.test(readFileSync(file, "utf8")));

if (missing.length > 0) {
  console.error("CSS modules without @layer components / @layer overrides:");
  for (const file of missing) console.error("  " + relative(process.cwd(), file));
  process.exit(1);
}

console.log(`check:layers OK (${files.length} modules)`);
