import sharp from 'sharp'
import { statSync, renameSync, unlinkSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const targets = [
  { src: 'public/logos/brands/chief-usa.png', width: 440 },
  { src: 'public/brands/chief-usa/hero.jpg', width: 1920, quality: 82 },
  { src: 'public/brands/chief-usa/showcase/mi300t.png', width: 900 },
  { src: 'public/brands/chief-usa/showcase/multimig-525.png', width: 900 },
  { src: 'public/brands/chief-usa/showcase/phoenix-rack.png', width: 900 },
  { src: 'public/brands/chief-usa/showcase/pnp90.png', width: 900 },
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
