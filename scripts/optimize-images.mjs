import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Keep original artwork intact; the site uses compressed display derivatives.
const root = process.cwd();
const publicDir = path.join(root, "public");
const mapping = {};
let originalBytes = 0;
let optimizedBytes = 0;

async function visit(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (entry.name === "optimized") continue;
    const source = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(source);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const relative = path.relative(publicDir, source).split(path.sep).join("/");
      const destination = `optimized/${relative}.webp`;
      await fs.mkdir(path.dirname(path.join(publicDir, destination)), { recursive: true });
      await sharp(source).rotate().resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(publicDir, destination));
      mapping[`/${relative}`] = `/${destination}`;
      originalBytes += (await fs.stat(source)).size;
      optimizedBytes += (await fs.stat(path.join(publicDir, destination))).size;
    }
  }
}

await visit(publicDir);
await fs.writeFile(path.join(root, "src/content/optimized-images.json"), `${JSON.stringify(mapping, null, 2)}\n`);
console.log(JSON.stringify({ images: Object.keys(mapping).length, originalBytes, optimizedBytes }));
