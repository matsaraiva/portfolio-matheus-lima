import fs from "node:fs/promises";
import path from "node:path";

const basePath = process.argv[2] ?? "/portfolio-matheus-lima";
const output = path.resolve("out");
const failures = [];
let pageCount = 0;
let referenceCount = 0;

async function check(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await check(file);
    } else if (entry.name.endsWith(".html")) {
      pageCount++;
      const html = await fs.readFile(file, "utf8");
      for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        const reference = match[1].replaceAll("&amp;", "&");
        if (!reference.startsWith("/") && !reference.startsWith("#")) continue;
        const url = new URL(reference, `http://preview${basePath}/${path.relative(output, file).replaceAll("\\", "/")}`);
        let relative = decodeURIComponent(url.pathname);
        if (relative.startsWith(`${basePath}/`)) relative = relative.slice(basePath.length);
        const target = relative.endsWith("/") ? `${relative}index.html` : relative;
        const targetFile = path.join(output, target);
        referenceCount++;
        try {
          await fs.access(targetFile);
          if (url.hash && targetFile.endsWith(".html")) {
            const targetHtml = await fs.readFile(targetFile, "utf8");
            if (!targetHtml.includes(`id="${url.hash.slice(1)}"`)) failures.push(`${reference}: missing anchor`);
          }
        } catch {
          failures.push(`${path.relative(output, file)}: ${reference}`);
        }
      }
    }
  }
}

await check(output);
console.log(JSON.stringify({ pageCount, referenceCount, failures: [...new Set(failures)] }, null, 2));
if (failures.length) process.exitCode = 1;
