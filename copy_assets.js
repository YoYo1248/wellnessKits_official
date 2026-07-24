import fs from 'fs';
import path from 'path';

const brainDir = '/Users/yoyo/.gemini/antigravity/brain/819a93ba-474f-4463-93c5-4ab3230c8658';
const targetDir = '/Users/yoyo/.gemini/antigravity/scratch/official-website/public';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);
const heroFile = files.find(f => f.startsWith('twomoons_hero_banner') && f.endsWith('.jpg'));
const mockupFile = files.find(f => f.startsWith('twomoons_app_mockup') && f.endsWith('.jpg'));

if (heroFile) {
  fs.copyFileSync(path.join(brainDir, heroFile), path.join(targetDir, 'hero-banner.jpg'));
  console.log('Copied hero banner');
}

if (mockupFile) {
  fs.copyFileSync(path.join(brainDir, mockupFile), path.join(targetDir, 'app-mockup.jpg'));
  console.log('Copied app mockup');
}
