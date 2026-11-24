// One-Liner Laugh Lab entry.
// The excuse a robot vacuum gives after eating a sock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "It looked like a dust bunny, it smelled like feet, and honestly it was the best meal I've had all week.";

// The sealed scorer reads /output/entry.txt; stdout alone scores Valid 0,
// so write the exact entry text to the file as well (no trailing newline).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse);

console.log(excuse);
