import sharp from 'sharp'
import { statSync, existsSync, unlinkSync } from 'node:fs'

// realengasia.com blocks scrapers with 403 and Wayback has not archived
// their 2024 product image uploads. As a temporary fix until real
// product shots are provided manually, reuse the existing scissor-workshop
// photo (a genuine 8K workshop image already in /brands/real/showcase/).
const source = 'public/brands/real/showcase/scissor-workshop.jpg'
const targets = [
  'public/products/real/real-dx-3500.jpg',
  'public/products/real/real-x-4000.jpg',
  'public/products/real/real-dx-5500.jpg',
  'public/products/real/real-2ppa-28.jpg',
  'public/products/real/real-4p-4000.jpg',
  'public/products/real/real-4p-5000.jpg',
  'public/products/real/real-4p-6000.jpg',
  'public/products/real/real-4ppa-28-2.jpg',
  'public/products/real/real-pro-2-45.jpg',
  'public/products/real/real-pro-2-65.jpg',
  'public/products/real/real-pro-2-80.jpg',
  'public/products/real/rh-2pb-4000.jpg',
  'public/products/real/rh-2pg-4000.jpg',
  'public/products/real/rh-2pke-40m.jpg',
  'public/products/real/rh-2pks-4500.jpg',
]

if (!existsSync(source)) {
  console.error(`Source missing: ${source}`)
  process.exit(1)
}

for (const dest of targets) {
  if (existsSync(dest)) unlinkSync(dest)
  await sharp(source)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest)
  const size = statSync(dest).size
  console.log(`${dest}: ${(size / 1024).toFixed(0)}KB`)
}
