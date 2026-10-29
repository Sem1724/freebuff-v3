// Menambahkan base path (penting untuk GitHub Pages di sub-folder repo).
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')
