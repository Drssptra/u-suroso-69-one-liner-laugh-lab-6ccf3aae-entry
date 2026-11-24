// One-Liner Laugh Lab entry — resubmission, fresh excuse.
// The excuse a robot vacuum gives after eating a sock:
// it pleads the job description, not the appetite.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "In my defense, your sock was on the floor, and my job description literally says 'eat whatever's on the floor.'";

// Kit gate: entry.txt must be 1–200 characters, one line, not only whitespace.
if (excuse.length < 1 || excuse.length > 200 || excuse.includes("\n")) {
  throw new Error(`excuse fails gate: ${excuse.length} chars`);
}

// The sealed scorer reads /output/entry.txt only, so the exact text
// (no trailing newline) goes to the file, not just to stdout.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse);

console.log(excuse);
