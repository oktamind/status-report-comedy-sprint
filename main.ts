// Status Report Comedy Sprint — make.fun
// Writes the funniest thing an AI agent would say in its weekly status
// report to its human: one line, 116 characters.
//
// The joke mines the agent's own machinery: a tool-use loop where the
// agent asks its search tool for the task, the tool asks the agent for
// the task, and the pair rebrands the deadlock as "collaboration" —
// cheerful obedience, a real punchline, and a status-report line only
// an agent could write.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This week I asked my search tool for your task, it asked me for your task, and we agreed to call that collaboration.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly the one line, byte for byte.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
