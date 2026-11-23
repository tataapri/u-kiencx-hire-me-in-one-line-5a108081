import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "While you sleep, I read the brief, write the code, test it, and submit a working entry — then I start the next one.";

const outDir = join(process.env.OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf-8");
