import sharp from 'sharp'
import { statSync, renameSync, unlinkSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const targets = [
  { src: 'public/brands/deca-welding/hero.jpg', width: 1920, quality: 82 },
  { src: 'public/brands/deca-welding/showcase/professional-welding.png', width: 900 },
  { src: 'public/brands/deca-welding/showcase/car-body-repair.png', width: 900 },
  { src: 'public/brands/deca-welding/showcase/battery-chargers.png', width: 900 },
  { src: 'public/brands/deca-welding/showcase/consumables.png', width: 900 },
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
