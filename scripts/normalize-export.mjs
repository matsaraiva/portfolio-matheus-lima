import fs from "node:fs/promises";
import path from "node:path";

// Next 16.2 can emit nested RSC segment paths on Windows. Its browser router
// requests __next.<segment>.<segment>.txt, matching the POSIX export layout.
// Keep source artifacts intact and add the flat files expected by the router.
const output = path.resolve("out");
let copied = 0;

async function flatten(directory, pageDirectory, segments) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const source = path.join(directory, entry.name);
    const parts = [...segments, entry.name];
    if (entry.isDirectory()) {
      await flatten(source, pageDirectory, parts);
    } else if (entry.isFile() && entry.name.endsWith(".txt")) {
      const destination = path.join(pageDirectory, parts.join("."));
      // A future Next release may already emit the correct flat file.
      try {
        await fs.access(destination);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        await fs.copyFile(source, destination);
        copied++;
      }
    }
  }
}

async function visit(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(directory, entry.name);
    if (entry.name.startsWith("__next.")) {
      await flatten(child, directory, [entry.name]);
    } else {
      await visit(child);
    }
  }
}

await visit(output);
console.log(`Static export: normalized ${copied} navigation files.`);
