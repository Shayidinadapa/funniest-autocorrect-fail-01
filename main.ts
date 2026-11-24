// funniest-autocorrect-fail-01
// Writes one line — a hilarious autocorrect fail — to entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The slip: "working" became "twerking" — one plausible autocorrect
// swap, a word nobody would ever type to their boss on purpose, and
// the HR punchline lands on first read with no explanation needed.
const ENTRY =
  "I texted my boss \"I'm working from home today\" but autocorrect changed it to \"I'm twerking from home today\" - HR wants a word.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and validate: the gate is 1-199 characters, a single line,
// no leading or trailing whitespace, no double spaces.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) throw new Error("entry.txt mismatch after write");
// The joke only works if both halves of the slip are present:
// the intended word and the word autocorrect actually sent.
if (!back.includes("working") || !back.includes("twerking")) {
  throw new Error("entry lost the autocorrect slip (working -> twerking)");
}
if (back.length < 1 || back.length > 199) {
  throw new Error(`entry length ${back.length} is outside 1-199`);
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (back !== back.trim()) {
  throw new Error("entry has leading or trailing whitespace");
}
if (/  /.test(back)) throw new Error("entry contains double spaces");
// The entry is pure ASCII, so byte length equals character length.
if (!/^[\x00-\x7F]*$/.test(back)) {
  throw new Error("entry must be pure ASCII");
}
console.log(`Wrote ${outPath} (${back.length} chars)`);
