// GitHub Pages tidak punya SPA fallback. Salinan index.html sebagai 404.html
// membuat refresh di /about atau /work/xxx tetap membuka situs.
import { copyFileSync } from 'node:fs'

const dist = new URL('../dist/', import.meta.url).pathname
copyFileSync(dist + 'index.html', dist + '404.html')
