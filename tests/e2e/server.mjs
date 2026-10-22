// GitHub Pages と同じように dist/ を配信するだけのサーバーです。
// ファイルが無いパスは 404.html を 404 で返すので、リロード時の 404 対策 (public/404.html) も確認できます。
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = process.argv[2] || 'dist';
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

async function resolveFile(pathname) {
  const file = join(root, normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, ''));
  const info = await stat(file).catch(() => null);
  if (info && info.isDirectory()) return resolveFile(join(pathname, 'index.html'));
  return info ? file : null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const file = await resolveFile(pathname);
  const body = file || join(root, '404.html');
  res.writeHead(file ? 200 : 404, { 'Content-Type': types[extname(body)] || 'application/octet-stream' });
  res.end(await readFile(body));
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
