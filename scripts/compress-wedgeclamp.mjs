import sharp from 'sharp'
import { statSync, renameSync, unlinkSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const targets = [
  { src: 'public/logos/brands/wedgeclamp.png', width: 440 },
  { src: 'public/brands/wedgeclamp/hero.jpg', width: 1920, quality: 82 },
  { src: 'public/brands/wedgeclamp/showcase/eze-tie-down.jpg', width: 900, quality: 82 },
  { src: 'public/brands/wedgeclamp/showcase/chainless.jpg', width: 900, quality: 82 },
  { src: 'public/brands/wedgeclamp/showcase/full-frame.jpg', width: 900, quality: 82 },
  { src: 'public/brands/wedgeclamp/showcase/ezelift.jpg', width: 900, quality: 82 },
]

for (const t of targets) {
  const src = t.src
  const dest = t.dest || src
  if (!existsSync(src)) {
    console.log(`${src}: skipped (missing)`)
    continue
  }
  const tmp = join(dirname(dest), `_tmp_${basename(dest)}`)
  const before = statSync(src).size
  const pipeline = sharp(src).resize({ width: t.width, withoutEnlargement: true })
  if (dest.endsWith('.jpg')) pipeline.jpeg({ quality: t.quality, mozjpeg: true })
  else pipeline.png({ compressionLevel: 9, palette: true })
  await pipeline.toFile(tmp)
  renameSync(tmp, dest)
  if (src !== dest) unlinkSync(src)
  const after = statSync(dest).size
  console.log(`${dest}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`)
}
