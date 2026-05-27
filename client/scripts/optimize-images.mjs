import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const imageRoots = [
  path.join(root, 'src/assets/ProyetosIMG'),
  path.join(root, 'public'),
];
const supported = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (supported.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimize(file) {
  const parsed = path.parse(file);
  const output = path.join(parsed.dir, `${parsed.name}.webp`);

  await sharp(file)
    .rotate()
    .webp({ quality: 78, effort: 6 })
    .toFile(output);

  return { input: file, output };
}

async function rewriteProjectImports(converted) {
  const projectDataPath = path.join(root, 'src/data/projects.js');
  let content = await fs.readFile(projectDataPath, 'utf8');

  content = content.replace(
    /(["'])(\.\.\/assets\/ProyetosIMG\/[^"']+)\.(png|jpe?g)\1/g,
    (match, quote, importPath) => {
      const webpImportPath = `${importPath}.webp`;
      const webpFilePath = path.join(path.dirname(projectDataPath), webpImportPath);
      return converted.some(({ output }) => path.normalize(output) === path.normalize(webpFilePath))
        ? `${quote}${webpImportPath}${quote}`
        : match;
    }
  );

  await fs.writeFile(projectDataPath, content);
}

const allFiles = [];
for (const dir of imageRoots) {
  try {
    allFiles.push(...await walk(dir));
  } catch {
    // Directory does not exist in every environment.
  }
}

const converted = [];
for (const file of allFiles) {
  converted.push(await optimize(file));
}

await rewriteProjectImports(converted);

for (const { input, output } of converted) {
  console.log(`${path.relative(root, input)} -> ${path.relative(root, output)}`);
}

console.log(`Optimized ${converted.length} images to WebP.`);
