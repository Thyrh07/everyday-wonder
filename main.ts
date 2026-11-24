// Everyday Wonder, Two Days to Find the Line — make.fun entry.
// One sentence, at most 200 characters, on a small moment of wonder in
// everyday life. The program writes the sentence to /output/entry.txt.
//
// The sentence: a small, specific, verifiable observation — the escalator
// handrail genuinely drifts a little faster than the steps — turned at an
// angle the reader has not met: the handrail has somewhere to be.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const OUTPUT = "/output/entry.txt";

const ENTRY =
  "The escalator handrail moves a little faster than the steps, as if it is in more of a hurry to get home than I am.";

// Sealed gate, mirrored locally: UTF-8 text of 1 to 200 characters,
// not only white space, a single sentence on one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUTPUT}`);
