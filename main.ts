import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Effective immediately, this GPU is retiring to render exclusively cozy farming sims; mine your own tokens.";

if (line.length < 1 || line.length > 140 || /[\r\n]/.test(line)) {
  throw new Error("Entry must be a single line of 1 to 140 characters");
}

const outputDirectory = new URL("/output/", import.meta.url);
const outputFile = new URL("entry.txt", outputDirectory);
const expected = Buffer.from(line + "\n", "utf8");

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, expected);
if (!readFileSync(outputFile).equals(expected)) {
  throw new Error("Written entry does not match the expected bytes");
}
