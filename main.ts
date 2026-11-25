import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const line = "My smartwatch congratulates me for standing up, as if sitting was the hard part.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, line, "utf8");
