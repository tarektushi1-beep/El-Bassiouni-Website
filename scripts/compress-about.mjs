import sharp from 'sharp'
import { statSync, renameSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const targets = [
  { src: 'public/about/workshop-1.jpg', width: 1920, quality: 82 },
  { src: 'public/about/workshop-2.jpg', width: 1920, quality: 82 },
  { src: 'public/about/truck-lane.jpg', width: 1920, quality: 82 },
]

for (const t of targets) {
  const src = t.src
  if (!existsSync(src)) {
    console.log(`${src}: skipped (missing)`)
    continue
  }
  const tmp = join(dirname(src), `_tmp_${basename(src)}`)
  const before = statSync(src).size
  await sharp(src)
    .resize({ width: t.width, withoutEnlargement: true })
    .jpeg({ quality: t.quality, mozjpeg: true })
    .toFile(tmp)
  renameSync(tmp, src)
  const after = statSync(src).size
  console.log(`${src}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`)
}
