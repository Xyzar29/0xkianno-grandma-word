// One Word From Grandma — writes the single word grandma would text about AI.
// The word: CHATGBT — the classic grandma typo of ChatGPT. Warm, baffled,
// instantly readable, and tied to AI in one word.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "CHATGBT";

// Guard the gate before writing: the entry must be UTF-8 text of 1 to 30
// characters and not only whitespace, with nothing else in the file.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error("word fails the entry gate: must be 1-30 non-whitespace chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
