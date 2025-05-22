const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const directoriesToClean = [
  'node_modules/.vite',
  'dist',
  '.vite',
  'public/build'
];

console.log('🧹 Cleaning build artifacts and cache...');

directoriesToClean.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    console.log(`Removing ${dirPath}`);
    fs.rmSync(dirPath, { recursive: true, force: true });
  } else {
    console.log(`Skipping ${dirPath} (does not exist)`);
  }
});

console.log('🔨 Reinstalling dependencies and rebuilding...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Clean and rebuild complete!');
} catch (error) {
  console.error('❌ Error during rebuild:', error.message);
  process.exit(1);
}
