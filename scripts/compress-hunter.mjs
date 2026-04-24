import sharp from 'sharp'
import { statSync, renameSync, unlinkSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const targets = [
  // Hero: convert PNG to JPG for file size (hero.png -> hero.jpg)
  { src: 'public/brands/hunter-engineering/hero.png', dest: 'public/brands/hunter-engineering/hero.jpg', width: 1920, quality: 80 },
  // Showcase product shots
  { src: 'public/brands/hunter-engineering/showcase/alignment.png', width: 1200 },
  { src: 'public/brands/hunter-engineering/showcase/tire-changer.png', width: 1200 },
  { src: 'public/brands/hunter-engineering/showcase/balancer.png', width: 1200 },
  { src: 'public/brands/hunter-engineering/showcase/adas.jpg', width: 1200, quality: 82 },
  { src: 'public/brands/hunter-engineering/showcase/inspection.jpg', width: 1200, quality: 82 },
]

for (const t of targets) {
  const src = t.src
  const dest = t.dest || src
  const tmp = join(dirname(dest), `_tmp_${basename(dest)}`)
  const before = statSync(src).size
  const pipeline = sharp(src).resize({ width: t.width, withoutEnlargement: true })
  if (dest.endsWith('.jpg')) pipeline.jpeg({ quality: t.quality, mozjpeg: true })
  else pipeline.png({ compressionLevel: 9, palette: true })
  await pipeline.toFile(tmp)
  renameSync(tmp, dest)
  if (src !== dest) unlinkSync(src)
  const after = statSync(dest).size
  console.log(`${dest}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`)
}
