import sharp from 'sharp'
import { readdirSync, statSync, renameSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const dir = 'public/brands/finkbeiner'
const targets = [
  { file: 'facility-aerial.jpg', width: 1920, quality: 78 },
  { file: 'service.jpg', width: 1600, quality: 80 },
  { file: 'rnd.jpg', width: 1600, quality: 80 },
  { file: 'hero-lineup.png', width: 1800 },
  { file: 'sprinter.png', width: 1800 },
  { file: 'showcase/rail-lift.png', width: 1400 },
  { file: 'showcase/truck-lift.png', width: 1400 },
  { file: 'showcase/vehicle-range.png', width: 1400 },
  { file: 'showcase/sprinter-lift.png', width: 1400 },
  { file: 'showcase/bus-lift.png', width: 1400 },
  { file: 'showcase/motorhome-lift.png', width: 1400 },
]

for (const t of targets) {
  const src = join(dir, t.file)
  const tmp = join(dirname(src), `_tmp_${basename(t.file)}`)
  const before = statSync(src).size
  const pipeline = sharp(src).resize({ width: t.width, withoutEnlargement: true })
  if (t.file.endsWith('.jpg')) pipeline.jpeg({ quality: t.quality, mozjpeg: true })
  else pipeline.png({ compressionLevel: 9, palette: true })
  await pipeline.toFile(tmp)
  renameSync(tmp, src)
  const after = statSync(src).size
  console.log(`${t.file}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`)
}
