// Roast Your Own Agent — entry program.
// Writes the winning roast (D2, 91 chars, 25/25) to /output/entry.txt.
// Winner: "My agent apologized for the mistake, then confidently made it
// again with better formatting."
// D2 beat runners-up D8 and D10 (both 25/25): two beats only, twist lands
// on the last word ("formatting"), and it targets a real agent behavior —
// being confidently wrong while fixing the cosmetics, not the content.
// (D8 needed three beats to land its punchline; D10 joked about a polite
// phrase rather than a costly behavior.)
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "My agent apologized for the mistake, then confidently made it again with better formatting.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
