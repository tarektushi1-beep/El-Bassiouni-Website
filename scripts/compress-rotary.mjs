import sharp from 'sharp'
import { statSync, renameSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const targets = [
  // Heritage band hero + showcase
  { file: 'public/brands/rotary-lift/hero.jpg', width: 1920, quality: 78 },
  { file: 'public/brands/rotary-lift/showcase/inspiration.png', width: 1000 },
  { file: 'public/brands/rotary-lift/showcase/model-a.png', width: 1400 },
  { file: 'public/brands/rotary-lift/showcase/mid-century-workshop.jpg', width: 1400, quality: 80 },
  // Product catalogue
  { file: 'public/products/rotary-lift/spoa10.png', width: 1200 },
  { file: 'public/products/rotary-lift/ds35.png', width: 1200 },
  { file: 'public/products/rotary-lift/sm40.png', width: 1200 },
  { file: 'public/products/rotary-lift/sm65.png', width: 1200 },
]

for (const t of targets) {
  const src = t.file
  const tmp = join(dirname(src), `_tmp_${basename(src)}`)
  const before = statSync(src).size
  const pipeline = sharp(src).resize({ width: t.width, withoutEnlargement: true })
  if (src.endsWith('.jpg')) pipeline.jpeg({ quality: t.quality, mozjpeg: true })
  else pipeline.png({ compressionLevel: 9, palette: true })
  await pipeline.toFile(tmp)
  renameSync(tmp, src)
  const after = statSync(src).size
  console.log(`${src}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`)
}
