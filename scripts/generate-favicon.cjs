const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateAllFaviconAssets() {
  const sourceImage = 'C:/Users/MEDLO/.gemini/antigravity-ide/brain/7ee40d00-9726-44de-9c02-b323e8f32422/.user_uploaded/media_1789509687853.jpg';

  if (!fs.existsSync(sourceImage)) {
    throw new Error(`Source image not found at: ${sourceImage}`);
  }

  // 1. Copy full original logo to public/images/logo-official.webp
  await sharp(sourceImage)
    .webp({ quality: 95 })
    .toFile('public/images/logo-official.webp');
  console.log('Saved public/images/logo-official.webp');

  // 2. Extract emblem region and center on square background (#0a2d55)
  const bg = { r: 10, g: 45, b: 85, alpha: 1 };
  const emblemExtract = await sharp(sourceImage)
    .extract({ left: 210, top: 75, width: 710, height: 490 })
    .toBuffer();

  const masterEmblem = await sharp({
    create: {
      width: 800,
      height: 800,
      channels: 4,
      background: bg
    }
  })
  .composite([{
    input: emblemExtract,
    gravity: 'center'
  }])
  .png()
  .toBuffer();

  // 3. Generate PNG sizes
  await sharp(masterEmblem).resize(16, 16).png().toFile('public/favicon-16x16.png');
  await sharp(masterEmblem).resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp(masterEmblem).resize(48, 48).png().toFile('public/favicon-48x48.png');
  await sharp(masterEmblem).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(masterEmblem).resize(192, 192).png().toFile('public/favicon-192x192.png');
  await sharp(masterEmblem).resize(512, 512).png().toFile('public/favicon-512x512.png');
  await sharp(masterEmblem).resize(512, 512).png().toFile('public/favicon.png');
  console.log('Saved all PNG favicon sizes (16, 32, 48, 180, 192, 512)');

  // 4. Generate header/footer logo.webp
  await sharp(masterEmblem)
    .resize(180, 180)
    .webp({ quality: 92 })
    .toFile('public/images/logo.webp');
  console.log('Saved updated public/images/logo.webp');

  // 5. Generate multi-resolution ICO file (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of icoSizes) {
    const buf = await sharp(masterEmblem).resize(size, size).png().toBuffer();
    pngBuffers.push({ size, buf });
  }

  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type (1 = ICO)
  header.writeUInt16LE(count, 4); // count of images

  const chunks = [header];
  for (let i = 0; i < count; i++) {
    const { size, buf } = pngBuffers[i];
    const entryOffset = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 0);
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1);
    header.writeUInt8(0, entryOffset + 2);
    header.writeUInt8(0, entryOffset + 3);
    header.writeUInt16LE(1, entryOffset + 4);
    header.writeUInt16LE(32, entryOffset + 6);
    header.writeUInt32LE(buf.length, entryOffset + 8);
    header.writeUInt32LE(offset, entryOffset + 12);
    chunks.push(buf);
    offset += buf.length;
  }
  fs.writeFileSync('public/favicon.ico', Buffer.concat(chunks));
  console.log('Saved public/favicon.ico');

  // 6. Generate SVG favicon with embedded high-res emblem
  const b64 = (await sharp(masterEmblem).resize(256, 256).png().toBuffer()).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="100%">
  <rect width="256" height="256" rx="48" fill="#0a2d55"/>
  <image href="data:image/png;base64,${b64}" width="256" height="256"/>
</svg>\n`;
  fs.writeFileSync('public/favicon.svg', svgContent);
  console.log('Saved public/favicon.svg');

  // Clean temporary files
  const tempFiles = [
    'public/favicon-full-192.png',
    'public/favicon-full-32.png',
    'public/emblem-800.png',
    'public/emblem-32.png',
    'public/emblem-192.png',
    'public/emblem-180.png',
    'public/logo-full-512.png',
    'public/logo-full-32.png'
  ];
  for (const f of tempFiles) {
    if (fs.existsSync(f)) {
      try { fs.unlinkSync(f); } catch (e) {}
    }
  }
  console.log('Cleaned temporary files');
}

generateAllFaviconAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
