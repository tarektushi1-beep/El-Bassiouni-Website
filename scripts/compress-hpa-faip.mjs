import sharp from 'sharp'
import { statSync, renameSync, unlinkSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const targets = [
  // Nexion aerial hub -> hero JPG (skip if already compressed)
  { src: 'public/brands/hpa-faip/hero.png', dest: 'public/brands/hpa-faip/hero.jpg', width: 1920, quality: 80 },
  // Showcase — tire changer line (passenger + commercial)
  { src: 'public/brands/hpa-faip/showcase/bravo-m51.png', width: 900 },
  { src: 'public/brands/hpa-faip/showcase/diamond-m1032.png', width: 900 },
  { src: 'public/brands/hpa-faip/showcase/passenger-m624.png', width: 900 },
  { src: 'public/brands/hpa-faip/showcase/commercial-f565.png', width: 900 },
]

for (const t of targets) {
  const src = t.src
  const dest = t.dest || src
  if (!existsSync(src)) {
    console.log(`${src}: skipped (already processed)`)
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
  console.log(`${dest}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`)
}
