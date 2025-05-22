import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputSvg = path.join(__dirname, '../public/favicon.svg');
const outputDir = path.join(__dirname, '../public');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate favicon.ico (16x16, 32x32, 48x48 in one file)
async function generateFavicon() {
  try {
    const sizes = [16, 32, 48];
    const buffers = await Promise.all(
      sizes.map(size => 
        sharp(inputSvg)
          .resize(size, size)
          .toBuffer()
      )
    );

    await sharp({
      create: {
        width: 48,
        height: 48,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([
      { input: buffers[0], gravity: 'northwest' },
      { input: buffers[1], gravity: 'center' },
      { input: buffers[2], gravity: 'southeast' }
    ])
    .toFile(path.join(outputDir, 'favicon.ico'));

    console.log('Generated favicon.ico');
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
  }
}

// Generate other icon sizes
async function generateIcons() {
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' }
  ];

  for (const { size, name } of sizes) {
    try {
      await sharp(inputSvg)
        .resize(size, size)
        .toFile(path.join(outputDir, name));
      console.log(`Generated ${name}`);
    } catch (error) {
      console.error(`Error generating ${name}:`, error);
    }
  }
}

// Generate all icons
async function generateAll() {
  console.log('Generating favicon and icons...');
  await Promise.all([
    generateFavicon(),
    generateIcons()
  ]);
  console.log('All icons generated successfully!');
}

generateAll().catch(console.error);
